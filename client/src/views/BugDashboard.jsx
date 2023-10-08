import { Box, Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import BugReportOutlinedIcon from '@mui/icons-material/BugReportOutlined';
import { useState, useEffect } from 'react';
import axiosInstance from "../axios-instance.js";
import { decodeToken } from "react-jwt";

const BugDashboard = () => {
    const [bugs, setBugs] = useState([]);
    const token = localStorage.getItem('token');
    const user = decodeToken(token);
    {/*this part here is how you rename a variable, so you can use the value of variable decodedToken under a different name in the rest of the code, decodedToken: user*/}
   
    useEffect(() => {
        (async () => {
            const result = await axiosInstance.get('/bugs');
            if (result?.data?.length) {
                setBugs(result.data);
            }
        })();
    }, []);


    //this one doesn't really have certain purpose, 
    //it will just be triggered when certain changes to bugs array will be made
    useEffect(() => {
        console.log(bugs);

    }, [bugs]);

    return (
        <Box>
            <Box sx={{ backgroundColor: 'black', color: 'white', height: '40px', textAlign: 'center', display: 'flex', justifyContent: 'center', allignItems: "center" }}>
                <Typography>Bug app</Typography>
                <BugReportOutlinedIcon/>
                </Box>
                <Box sx={{marginTop: "10px"}}>
                    {user?.role === 'QA' && <Button variant ="outlined" sx={{marginLeft: "5px"}}>Create Bug</Button>}
                </Box>

                {/*typography is a replacement for a p tag in HTML, it is used for text, and it also needs to be imported*/}
                {/*thing with maps is their size at the end is the same as size at the beginning*/}
                <Box sx={{ display: 'flex' }}>

                    {/*this part here with bugs?.map can be written like this without return function, 
                and this is immediate response, the second option would be to write it likr => {
                    return ( )
                }}*/}

                    {bugs?.map((bug) => (
                        <Card sx={{ maxWidth: "250px", border: "2px black solid", justifyContent: "center", marginTop: "20px", marginLeft: "5px", alignItems: 'center' }} key = {bug._id}>
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold' }}>Title: {bug?.title}</Typography>
                                <Typography sx={{ fontWeight: 'bold' }}>Reproduction steps: {bug?.steps}</Typography>
                {/*this part of code key = {bug._id} is always used with mapping, because it works and keeps track of everything htrough their id from the database,
                this way it will be much easier to do deletion, updating or something else because there will be a unique id through which this will be resolved.*/}
                            </CardContent>
                            <CardActions>
                                {user?.role === 'Developer' && 
                                <Button variant="outlined">Finish</Button>}
                            </CardActions>
                        </Card>


                    ))}
                </Box>
        </Box>
    );
};

export default BugDashboard;