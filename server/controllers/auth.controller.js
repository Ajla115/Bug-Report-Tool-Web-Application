import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../models/User.model.js';
import { SALT_ROUNDS, SECRET } from '../constants.js';
import { getUserByEmail } from '../dao/user.dao.js';

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

export const login = async (req, res) => {
    const { email, password } = req.body; //this is the data from the body of the Postman that we enter
    if( !password  || !email){
        return res.status(400).send('Missing credentials. Please write in both your email and password.');
        //here we put return, because if this is the case, don't go any further but just return message and exit
    }

    try {

    const user  = await getUserByEmail(email);
    console.log(user._id.toString());

    const match = await bcrypt.compare(password, user.password);
    //built-in method compare is used to compare the entered password and the password matched to a email from database whih was sent as parameter

    if(match){

        const token = jwt.sign({
            id:user._id.toString(),
            email: user.email
        }, SECRET, {expiresIn: 60 * 60});
        //this 60*60 means 1 hours, it is also possible to recognize 1h

        console.log(user);
        res.status(201).send({token});
      

    } else {
        console.log('Login was not successful')
        res.status(401).send('Wrong password or email.');
    }
    } catch(e){
        console.log("Error! Please try again.");
        res.status(500).send('Ups.. Something went wrong');
    }
}
    


