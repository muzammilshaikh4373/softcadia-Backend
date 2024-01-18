import { comparepassword, convertpassword } from '../helper/encrypt.js';
import LoginModel from '../models/loginModel.js';


export const loginservice = async (usertype,username, email, password) => {

    try {
        const hashpass = await convertpassword(password, 10);
        let user = new LoginModel({usertype, username, email, password: hashpass })
        const userlogin = await user.save()
        console.log('login user insert successful')
        return "success"
    } catch (error) {
        console.log("error occure while insertion");
        return "error"
    }
};

export const compareloginservice = async (usertype,email, password) => {
    try {
        let userpass = await LoginModel.findOne({ email: email });

        let loginpass = await comparepassword(password, userpass.password);
        if (loginpass) {
            return "success"
        } else {
            return "error"
        }
    } catch (error) {
        console.log(error, "error occure while password comparing at service")
    }
}

export const loginupdateservice = async (email, password) => {
    try {
        let update = await LoginModel.updateOne({ email }, { password });
        return 'updated successfully'
    } catch (error) {
        console.log(error)
    }
}


