import mongoose from 'mongoose';
import {trainingSchema} from './trainingModel.js'

const trainingapplySchema = mongoose.Schema({
    fname : { type:String , required : true } ,
    lname : { type:String , required : true } ,
    email : { type:String , required : true } ,
    mobile : { type:String , required : true } ,
    uploadresume : { type:String , required : true } 
});
const TotalTrainingDetailSchema = mongoose.Schema({
    trainingdetail:{type:trainingSchema },
    applicantdetail : {type:trainingapplySchema , required : true}
})
const TrainingApplyModel = mongoose.model( "trainingapplicant" , TotalTrainingDetailSchema ) ;

export default TrainingApplyModel;