import UserLoginModel from "../models/userloginModel.js";
import { comparePassword, convertPassword } from '../helper/encrypt.js';

const userloginService = async (firstname , lastname , email , password) => {
    
    try {
        const hashpass = await convertPassword(password , 10)
    let user = new UserLoginModel({firstname , lastname , email , password:hashpass});
    const userlogin =await user.save();
    return "success"

    } catch (error) {
        console.log(error);
        return "error"
    }

};

const compareuserloginService = async (email , password) => {
    try {
        let userpass = await UserLoginModel.findOne({email:email});
        let loginpass = await comparePassword(password , userpass.password)
        if(loginpass){
            return "success"
        }else{
            return "error"
        }

    } catch (error) {
        console.log(error)
    }
};

const updateuserloginService = async (email , password) => {
    try {
        let update = await UserLoginModel.updateOne({email} , {password});
        return "update successfully"
        
    } catch (error) {
        console.log(error)
    }
};


export {userloginService , updateuserloginService , compareuserloginService}