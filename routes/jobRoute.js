import express from 'express'
import { addnewjob, newjoblist, editjob, deletejob, getjobbyid } from '../controllers/jobController.js';
const jobRouter = express.Router();

jobRouter.post('/addnewjob', addnewjob);
jobRouter.get("/joblist", newjoblist);

jobRouter.post('/jobedit/:id', editjob);
jobRouter.delete('/jobdelete/:id', deletejob)
jobRouter.get('/jobbyid/:id', getjobbyid)




export default jobRouter;