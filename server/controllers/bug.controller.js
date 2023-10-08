 import Bug from '../models/Bug.model.js';
 import User from '../models/User.model.js';
 import  { ROLES } from '../constants.js';


export const getAllBugs = async (req, res) => {

    const {role, id} = req.user;
    //req.params is used when we are taking necessary data out of a http link

    //this userID is just a name of the variable, who has a certain value
    //but this belongs to assignedTo field in the database, so we will match value of this variable
    //with field assignedTo in the database

    //logic of the task: assignedTo - developer
    //reportedBy - qa

    try {
        let bugs = [];
        //let is used to define varibales whose value will change through the program
        //const is used to define variables whose value will never change 
        //var is NEVER recommended to use

        if(role === ROLES.QA){
            bugs = await Bug.find({reportBy: id});
        }
        else {
            bugs = await Bug.find({assignedTo: id});
        }

        res.status(200).send(bugs);
    }
    catch(e){
        
        res.status(500).send("Could not fetch bugs");

    }
};


export const createBug = async (req, res) => {
    const bug = req.body;
    const bugToSave = new Bug(bug); 
    //here we initialize table in the database with the values we entered
    try {
       await bugToSave.save(); 
       res.status(200).send({bugToSave});
    }
    catch(e){
        res.status(500).send("Could not create a bug.");
    }
};

export const changeCompletedStatus = async(req, res) => {
    const {completed} = req.body;
    //this body will take the values from the postman body

    const {id} = req.params;
    //this params will take the id from the http link
    console.log(req);

    try {
        //await Bug.findByIdAndUpdate(id, {completed: completed});
        //when key and value have the same name, you can just write it once
        //no need to write it as a key value pair
        await Bug.findByIdAndUpdate(id, {completed});
        res.status(200).send("Successfully changed status.");

    }
    catch(e){
        res.status(500).send("Could not change status.");

    }  
};

//filtering route
//that is the difference between these two

