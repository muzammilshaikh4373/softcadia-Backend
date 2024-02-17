import { comparepassword, convertpassword } from '../helper/encrypt.js';
import LoginModel from '../models/loginModel.js';


export const loginservice = async (usertype, username, email, password) => {
    try {
        const hashpass = await convertpassword(password, 10);
        let user = new LoginModel({ usertype, username, email, password: hashpass });
        const userlogin = await user.save();
        console.log('Login user insert successful');
        return "success";
    } catch (error) {
        console.log("Error occurred while insertion");
        return "error";
    }
};


export const compareloginservice = async (email, password) => {
    try {
        let userpass = await LoginModel.findOne({ email: email });
        // console.log("uset" , userpass)

        if (!userpass) {
            // User not found with the provided email
            return "error";
        }

        let loginpass = await comparepassword(password, userpass.password);
        // console.log("userrr")
        if (loginpass) {
            // console.log("usetttt")
            return "success"
        } else {
            return "error "
        }
    } catch (error) {
        console.log(error, "error occure while password comparing at service")
    }
}

export const loginupdateservice = async (email, password) => {
    try {
        let update = await LoginModel.findOneAndUpdate({ email }, { password });
      
        return update

    } catch (error) {
        console.log(error)
    }
}

export const getloginuserservice = async () => {
    try {
        let getuserslist = await LoginModel.find()
        // console.log(getuserslist,"hiiii")
        return getuserslist
    } catch (error) {
        console.log(error, "error occured at userlist")
        return "error occured at userlist"
    }
}

export const userdeleteservice = async(id) => {
    try {
        const dele = await LoginModel.findByIdAndDelete(id);
        return "success"
    } catch (error) {
        console.log(error, "error at delete service")
    }
}
