import { JwtSign, JwtVerify } from "../helper/jwt.js";
import { compareuserloginService, updateuserloginService, userloginService } from "../services/userloginService.js";

const CreateUserLogin = async (req , res) => {
let {firstname , lastname , email , password} = req.body;

try {
    let userstatus = await userloginService(firstname , lastname , email , password);
    if(userstatus === "success"){
        res.status(200).send("successfully login")
    }else{
        res.status(400).send("login failed")
    }
} catch (error) {
    console.log(error)
    res.send("error while create controller")
}
};


const UserCheck =async (req , res) => {
    let {email , password} = req.body;

    try {
        let checklogin = await compareuserloginService(email , password);
        let token = JwtSign(email);
        if(checklogin === "success"){
            res.send(token);
        }else{
            res.send("failed to generate token")
        }
    } catch (error) {
        console.log(error)
        res.send("error while check controller")
    }

};

const UserUpdate = async (req , res) => {
let {email , password} = req.body;
console.log(req.body)
let token = req.headers.authorization.split(' ')[1]
console.log(token)
try {
    let verifytoken = JwtVerify(token);
    console.log(verifytoken)

    if(verifytoken.email === email ){
        let updatelogin = await updateuserloginService(email , password);
        res.send("update successfully")
    }else{
        res.send("update failed")
    }
} catch (error) {
    console.log(error);
    res.send("error while update controller")
}

};

export { CreateUserLogin , UserCheck , UserUpdate }