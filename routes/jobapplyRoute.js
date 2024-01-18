import express from 'express';
import { addnewjobapply, jobapplylist } from '../controllers/jobapplyController.js';
import multer from 'multer';

const jobapplyRouter = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

jobapplyRouter.post('/applyuser', upload.single('file'), addnewjobapply); // Post for applicant
jobapplyRouter.get('/getuserinfo', jobapplylist); // Get for admin


export default jobapplyRouter;
