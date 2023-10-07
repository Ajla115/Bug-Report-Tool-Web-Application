//names of the models should always start with capital letter
//Models are used to make a schema (collection)  in MongoDB, something like making a table in MySQL and 
//deciding the propertie for column values
import mongoose from 'mongoose';
const {Schema} = mongoose;

const userSchema = new Schema({
    name : String, 
    email : String,
    password : String,
    role : String
});

const User = mongoose.model('users', userSchema);
//This User is an instance (object) which will be used to create a collection in MongoDB,
// the name of the collection will be users and the data used for creating that table (collection) will be userSchema

export default User;