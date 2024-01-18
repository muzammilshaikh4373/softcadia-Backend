import express from 'express';
import { CreateUserLogin, UserCheck, UserUpdate } from '../controllers/userloginController.js';

const userloginRouter = express.Router();


userloginRouter.post( "/signup" ,  CreateUserLogin );
userloginRouter.post( "/signin" , UserCheck );
userloginRouter.post( "/userupdate" , UserUpdate );




export default userloginRouter