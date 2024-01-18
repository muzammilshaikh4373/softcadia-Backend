import express from 'express'
import { addnewtrainingapply, trainingapplylist } from '../controllers/trainingapplyController.js';
import multer from 'multer';
const trainingapplyRouter = express.Router();

const upload = multer({ storage: multer.memoryStorage() });

trainingapplyRouter.post('/applyuser' ,upload.single('file'), addnewtrainingapply)  //post for applicant
trainingapplyRouter.get('/getuserinfo' , trainingapplylist)   //get for admin




export default trainingapplyRouter