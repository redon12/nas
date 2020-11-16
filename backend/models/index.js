import mongoose, { mongo } from 'mongoose';


const newSchema = new mongoose.Schema({
    fname:{type:String, required:true},
    lname:{type:String, required:true},
    pwd:{type:String, required:true},
    email:{type:String, required:true, unique:true, dropDups:true},
    isAdmin:{type:Boolean, required:true, default:false},
    isVerified:{type:Boolean, required:true, default:false},
    phone:{type:String}
})


const newUser = mongoose.model("viva", newSchema)


export default newUser;