import {Card, CardContent, CardActions, Button, TextField, Box} from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ( ) => {
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    //everything that starts with use- is a hook from react
    const navigate = useNavigate();

    console.log(email);
    console.log(password);

    const loginUser = async() => {
        try{
          const result = await axios.post('http://localhost:4000/auth/login',
         {email: email, password: password}); 


         //this ? checks if the variable is undefined before going on to work with their property
         if(result?.data && result?.status === 201){

           const {token}= result.data;
           localStorage.setItem('token', token);

          navigate("/bugs-overview")
           
         }
      }
        catch(e){
            console.log(e);
        }
    }


    return(
        <Box sx={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: 'center'}}>
        <Card sx={{ maxWidth: "500px",  border: "1px blue solid" }}>
        <CardContent>
        <TextField id="outlined-basic" label="Email" variant="outlined" value = {email} onChange = {(e) => setEmail(e.target.value)} />
        <TextField id="outlined-basic" label="Password" variant="outlined" value = {password} onChange = {(e) => setPassword(e.target.value)} />

        {/*onChangeEvent is used to track any textual changes that are made to the field that it is pointing to, and then will immediately save that into a field which is declared under a value option of the same textfield.*/ }
        
        </CardContent>
        <CardActions>
          <Button variant = "outlined" onClick= {loginUser} >Login</Button>
        </CardActions>
      </Card>
      </Box>

    );
};

export default Login;