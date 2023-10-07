//const express = require('express') //older version to import

import express from 'express';       //imported express
                                     //IMPORTANT: for this to work add "type" : "module",  in package.json!

import bodyParser from 'body-parser';   
import mongoose from 'mongoose';  

//always have space between installed and imported dependencies

import authRoutes from './routes/auth.routes.js'; 
import bugRoutes from './routes/bug.routes.js';

//this authRoutes is just a name for something that is just a variable, so anything else could be put here as a name
//this is a variable where exported value from file auth.routes.js will be saved
//if a const was expored in  auth.routes.js, then exact name should have been used    
// ./ means exits from one file and enetering second which are in the same folder
// ../ means that we are exiting that whole folder and  being in its parent folder                

const app = express()                //declared express app
const PORT = 4000                    //declared main port

//it is very beneficial to write const variables with a capital letter, such as PORT

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//this is how you write routes in node, eg. app.- post, put, delete, get
//req - request, res - response, next - next
//through request you send data for something, for login ect.
//response - is the result
app.get('/', (req, res) => {
    console.log(req.body); 
    //this line of code will be the one that will print out the sent data as its body because of an implementation of a body parser, 
    //if there was no body parser it would not be possible to this since Nodejs does not have body by default
  res.send('Flower is colorful!')
  res.status(200).send("Success")
});  //always write ; at the end of a function in node 


app.use('/auth', authRoutes);
//this is a trigger to know that routes which are saved under name authRoutes will be started
//something like a middle man that sends a signal to auth.routes.js, when spots that a route prefix /auth/ has been called

app.use('/bugs', bugRoutes);

//Models for queries, findByID, getOne ect, use it for making schemas etc
//This bug report is how we are naming a Database in the MongoDB to which we are connecting
//This whole line of code 'mongodb://127.0.0.1:27017/bug-report' is a service that is started through running a server with PS C:\Users\User> mongod --dbpath=c:\data\db
mongoose.connect('mongodb://127.0.0.1:27017/bug-report')
  .then(() => console.log('Connected to the database!'));

//callback function to know something is working
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}); 