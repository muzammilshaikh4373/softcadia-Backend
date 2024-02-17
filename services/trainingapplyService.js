import TrainingModel from '../models/trainingModel.js'
import TrainingApplyModel from '../models/trainingapplyModel.js'



export const addnewtrainingapplyservice = async(_id,applicantdetail ) => {
    // console.log(trainingdetail, "training")
    console.log(applicantdetail , "apply")
 try{
        const trainingDetails =await TrainingModel.findById(_id);
        console.log(trainingDetails, 'status');
    const trainingApplyInstance = await new TrainingApplyModel({
        trainingdetail: trainingDetails,
        applicantdetail: applicantdetail,
      });
      console.log("service training apply")
      const savedTrainingApply = await trainingApplyInstance.save();
    //   console.log("job seervice",savedTrainingApply);
      return "success";
 }
 catch (error) {
    console.log(error);
    throw new Error("Error in addnewtrainingapplyservice");
}

}







// services/trainingService.js

// import TrainingModel from '../models/trainingModel.js';
// import TrainingApplyModel from '../models/trainingapplyModel.js';

// Function to add new training application
// services/trainingapplyService.js



// export const addnewtrainingapplyservice = async (id, applicantdetail) => {
//   try {
//     // Find training details by ID and populate it
//     const trainingDetails = await TrainingModel.findById(id).populate('trainingdetail');
    
//     if (!trainingDetails) {
//       throw new Error('Training details not found');
//     }

//     const trainingApplyInstance = new TrainingApplyModel({
//       trainingdetail: trainingDetails,
//       applicantdetail,
//     });

//     const savedTrainingApply = await trainingApplyInstance.save();
//     return savedTrainingApply;
//   } catch (error) {
//     console.error('Error in addnewtrainingapplyservice:', error);
//     throw new Error('Failed to add new training application');
//   }
// };








export const trainingapplylistservice = async() => {
    try {

        let applylist = await TrainingApplyModel.find();

        return applylist
    
    } catch (error) {
        console.log(error)
    }

}