import { jwtsign, jwtverify } from "../helper/jwt.js";
import { compareloginservice, loginservice, loginupdateservice } from "../services/loginService.js";

export const createloginuser = async (req , res) => {
    let {usertype,username, email, password}=req.body
try {
    let userstatus = await loginservice(usertype,username, email, password);

    if(userstatus === "success"){
        res.status(200).send("successfully login")
    }else{
        res.status(400).send("error login")
    }
} catch (error) {
    console.log( error ,"error occure while serive call at login")
    return "error"
}
};


export const logincheck = async (req , res) => {
    let {usertype,email , password} = req.body
try {
    let checkloginpas = await compareloginservice(usertype,email , password);
    let token = jwtsign(email)
    if(checkloginpas === "success"){
        res.status(200).send({status:"success" , token , usertype:"Admin"})
    }else{
        res.status(400).send('login failed')
    }
} catch (error) {
    console.log(error)
}
}

export const loginupdate = async (req , res) => {
let {email , password}= req.body;
let token = req.headers.authorization.split(' ')[1]
try {
    let verifytoken = jwtverify(token)
 if(verifytoken.email === email){
    let updatelogin =  await loginupdateservice(email , password);
    res.status(200).send("updated successfully ")
 }else{
    res.status(400).send("failed updating")
 }
} catch (error) {
    console.log(error);
    res.send("error while update controller")
}
}


