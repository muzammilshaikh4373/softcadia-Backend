import express from 'express';
import { addnewtraining, deletetraining, edittraining, gettrainingbyid, newtraininglist } from '../controllers/trainingController.js';

const trainingRouter = express.Router();

trainingRouter.get('/traininglist', newtraininglist)
trainingRouter.post('/addnewtraining', addnewtraining)
trainingRouter.post('/trainingedit/:id', edittraining)
trainingRouter.delete('/trainingdelete/:id', deletetraining)
trainingRouter.get('/trainingbyid/:id', gettrainingbyid)


export default trainingRouter;