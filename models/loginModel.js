import mongoose from "mongoose";

const loginSchema = mongoose.Schema({
    usertype : {type:String , required:true},
    username: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = new mongoose.model('loginuser', loginSchema);


export default LoginModel;