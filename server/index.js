//const express = require('express') //older version to import

import express from 'express';       //imported express
                                     //IMPORTANT: for this to work add "type" : "module",  in package.json!

import bodyParser from 'body-parser';   
import mongoose from 'mongoose';                             

const app = express()                //declared express app
const PORT = 4000                    //declared main port

//it is very beneficial to write const variables with a capital letter

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

//Models for queries, findByID, getOne ect, use it for making schemas etc
mongoose.connect('mongodb://127.0.0.1:27017/bug-report')
  .then(() => console.log('Connected to the database!'));

//callback function to know something is working
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}); 