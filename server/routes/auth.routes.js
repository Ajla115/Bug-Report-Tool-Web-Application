import express from 'express';
import { login, register } from '../controllers/auth.controller.js';
//this part with { } is to import the specific functions from auth.controller.js
const router = express.Router();

//this is a way of writing routes when we don't have controller folder
//it is better to have it since everything is seperated and everything looks tidy and organized
/*router.post('/register', (req, res) => {
    console.log("Register route found!");
    res.status(201).send('test');
});*/

//a new way of writing a route when we have included controllers folder
router.post('/register', register);

router.post('/login', login)

export default router;
//this is connected to all REST requests starting with route.something
//this export part here will also enable to connect all of these routes to their calling in another file, 
//so they (their value) is exported so they can be used elsewhere