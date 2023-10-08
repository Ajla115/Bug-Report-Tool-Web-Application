import {Card, CardContent, CardActions, Button, TextField, Box} from '@mui/material';

const Login = ( ) => {

    return(
        <Box sx={{width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: 'center'}}>
        <Card sx={{ maxWidth: "500px",  border: "1px blue solid" }}>
        <CardContent>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <TextField id="outlined-basic" label="Password" variant="outlined" />
        </CardContent>
        <CardActions>
          <Button variant = "outlined">Login</Button>
        </CardActions>
      </Card>
      </Box>

        



    );
};

export default Login;