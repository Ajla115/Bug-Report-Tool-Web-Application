import User from '../models/User.model.js'

export const register = (req, res) => {
    const data = req.body;
    const user = new User(data);


    //console.log("Register route found!");
    //res.status(201).send('Registration was successful!');
}

//when we write the data in the request body in the Postman, the keys of key value pairs should be the same as in the User.model.js

export const login = (req, res) => {
    console.log("Login route found!");
    res.status(201).send('Login is a success!')
}

