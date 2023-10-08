//names of the models should always start with capital letter
//Models are used to make a schema (collection)  in MongoDB, something like making a table in MySQL and 
//deciding the propertie for column values
import mongoose from 'mongoose';
const {Schema} = mongoose;

const bugSchema = new Schema({
    title: String, 
    steps : String,
    assignedTo : String,
    reportBy : String,
    completed : Boolean,
    timestamp: {
        type: Date,
        default : new Date()},
    severity : String    
});

//We declared timestap with multiple features just to describe it more precise, 
//however only one value will be returned for the value of this column
//so for the timestamp, type is date, and if we don't write it, it wil be by default calculated
const Bug = mongoose.model('bugs', bugSchema);

export default Bug;