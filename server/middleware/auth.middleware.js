//to verify tokens, you can do it either in header, body or payload
//when you do it in the header, you use an x-access-token that already exists
//next parameter is used here with because of a middleware and it means, 
//if everything is okay go to the next step

//after successful logging, copy the token into a header for ny bug route, and put it into a header
//use the name used here, which is x-access-token, write it as a key in header and and as a value paste the value of token and then try

import jwt from 'jsonwebtoken';
import { SECRET } from '../constants.js';

const verifyJwtToken = (req, res, next) => {
    const token = req.header('x-access-token');

    try {
        const decoded = jwt.verify(token, SECRET);
        console.log(decoded);

        if(decoded) {
            req.user = {
                id : decoded.id,
                role: decoded.id,
                email: decoded.id
            }
            //this is a "hacky" way to access traits of logged or registered user, without having the need to access database
            next(); //this next moves to the next function in the route serie
        }
    }
    catch(e){
        res.status(401).send('Unathorized access!');
    }
};

export default verifyJwtToken;