import { convertpassword } from "../helper/encrypt.js";
import { jwtsign, jwtverify } from "../helper/jwt.js";
import { compareloginservice, getloginuserservice, loginservice, loginupdateservice, userdeleteservice } from "../services/loginService.js";

export const createloginuser = async (req, res) => {
    let { usertype, username, email, password } = req.body;
    try {
        let userstatus = await loginservice(usertype, username, email, password);
        if (userstatus === "success") {
            // let token = jwtsign(email);
            res.status(200).json({ message: "User created successfully"});
        } else {
            res.status(400).json({ message: "Error creating user" });
        }
    } catch (error) {
        console.log(error, "error occurred while service call at login");
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


export const logincheck = async (req, res) => {
    let { usertype, email, password } = req.body;
    // let token = req.headers.authorization.split(' ')[1];

    try {
        
            let checkloginpas = await compareloginservice(email, password);
            // console.log(checkloginpas , "herrrr")
            let token = jwtsign(email);
            // console.log(token , "rahat")
            
            if (checkloginpas === "success") {
                res.status(200).json({
                    status: "success",
                    token,
                    usertype: "Admin",
                    message: "Login Successfully Hello"
                });
            } else {
                res.status(401).json({ status: "failed", message: "Invalid credentials" });
            }
       
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: "error", message: "Internal Server Error" });
    }
};

export const loginupdate = async (req , res) => {
let {email , password}= req.body;
  
// console.log("hello",req.body)
// console.log(req.headers.authorization)
// let token = req.headers.authorization.split(' ')[1];
try {
    // let verifytoken = jwtverify(token)
    const hashpass = await convertpassword(password, 10);
  
//  if(verifytoken.email === email){
    let updatelogin =  await loginupdateservice(email , hashpass);
    // console.log(updatelogin,'kkkkk')
    res.status(200).send("updated successfully ")
//  }else{
//     res.status(400).send("failed updating")
//  }
} catch (error) {
    console.log(error);
    res.send("error while update controller")
}
}

export const getloginusers = async(req , res) => {
    let {usertype , username , email , password} = req.body
    try {
        let userlist = await getloginuserservice(usertype , username , email , password)
        res.status(200).send(userlist)
        
    } catch (error) {
        console.log(error, 'error occure while userlist controller')
    }
}


export const deleteuser = async(req , res) => {
    let id = req.params.id;
    try {
      let deleteuser = await userdeleteservice(id )
      if (deleteuser === "success") {
        res.status(200).send("delete user from controller")
      } else {
        res.status(400).send("error")
      }
    } catch (error) {
      console.log(error, "user is not delte at congtroller")
    }
}

