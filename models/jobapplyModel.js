import mongoose from 'mongoose';
import { jobSchema } from './jobModel.js';

const jobapplySchema = mongoose.Schema({
    // jobID : {type:String , required:true , trim:true },
    
    fname : { type:String , require:true  } ,
    lname : { type:String , require:true  } ,
    email : { type:String , require:true  } ,
    mobile : { type:String , require:true } ,
    uploadresume : { type:String ,require:true } 
});

const TotalJobDetailSchema = mongoose.Schema({
    jobdetail:{type:jobSchema},
    applicantdetail : {type:jobapplySchema }
})

const JobApplyModel = mongoose.model( "jobapplicant" , TotalJobDetailSchema ) ;

export default JobApplyModel;

