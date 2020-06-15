import mongoose, { Schema}  from 'mongoose';


const UserSchema = new Schema({
    email:{
        type : String,
        required : true,       
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String
    },
    numberPhone:{
        type: String,
        required : true
    },
    roles :{
        type : [String],
        required : true
    },
    active :{
        type : Boolean,
        required : true
    },
    keyForActivation :{
        type : String
    },
    keyForRecoverPassword : {
        type : String
    },
    delete :{
        type : Boolean,
        required :true
    }
});

export default UserSchema;