//const express = require('express') //older version to import

import express from 'express'        //imported express
                                     //IMPORTANT: for this to work add "type" : "module",  in package.json!

const app = express()                //declared express app
const PORT = 4000                    //declared main port

//it is very beneficial to write const variables with a capital letter

//this is how you write routes in node, eg. app.- post, put, delete, get
//req - request, res - response, next - next
//through request you send data for something, for login ect.
//response - is the result
app.get('/', (req, res) => {
  res.send('Flower is colorful!')
  res.status(200).send("Success")
});  //always write ; at the end of a function in node 

//callback function to know something is working
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
}); 