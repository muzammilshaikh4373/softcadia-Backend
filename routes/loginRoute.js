import express from 'express';
import { createloginuser, deleteuser, getloginusers, logincheck, loginupdate } from '../controllers/loginController.js';

const loginRouter = express.Router();

loginRouter.post('/login', createloginuser) // create login and convert password into hash password
loginRouter.post('/logincheck', logincheck) //compare password true...generate jwt token
loginRouter.post('/loginupdate', loginupdate) // token verify then update
loginRouter.get('/getloginuser' , getloginusers)
loginRouter.delete('/userdelete/:id', deleteuser)


export default loginRouter;