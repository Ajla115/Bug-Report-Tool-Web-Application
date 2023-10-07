import User from "../models/User.model.js";

 export const getUserByEmail = async(email) =>{
    try {
        const user = await User.findOne({email: email});
        //with these built-in methods for queries, always inside of { } are key-value pairs, 
        //of the column name from the database where the value will be stored and value as a parameter

        return user;
    }
    catch(e){
        return null;

    }
    
 }