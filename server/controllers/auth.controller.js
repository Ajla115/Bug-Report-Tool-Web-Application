import bcrypt from 'bcrypt';

import User from '../models/User.model.js';
import { SALT_ROUNDS } from '../constants.js';

export const register = async (req, res) => {
    const {password, ...data} = req.body;
    //this means that we are extracting seperately password, and this ...data means that all the other data will be extracted together
    
    try {

    const hashedPassword =  await bcrypt.hash(password, SALT_ROUNDS);
    const user = new User({...data, password: hashedPassword });

    //await means that before going to the next line, you will execute to the end this action, and then move
    //await and async are always used together, bc asyncs means that something will not be executed orderly
    //line by line, but rather there will waiting for a certain action to finish and then continue
    //await and async always go together

    await user.save();
    //this is to save to the database
    console.log(user);
    res.status(201).send('User was succesfully created in the database!');
    }
    catch(e) {
        res.status(400).send("Could not create user.")
    }
}

//when we write the data in the request body in the Postman, the keys of key value pairs should be the same as in the User.model.js

export const login = (req, res) => {
    console.log("Login route found!");
    res.status(201).send('Login is a success!')
}
