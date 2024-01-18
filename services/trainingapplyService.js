import TrainingApplyModel from '../models/trainingapplyModel.js'


export const addnewtrainingapplyservice = async(trainingDetails, applicantDetails) => {
 try{
    const trainingApplyInstance = new TrainingApplyModel({
        trainingdetail: trainingDetails,
        applicantdetail: applicantDetails,
      });
  
      const savedTrainingApply = await trainingApplyInstance.save();
      console.log("job seervice",savedTrainingApply);
      return "success";
 }
 catch (error) {
    console.log(error)
}

}


export const trainingapplylistservice = async() => {
    try {

        let applylist = TrainingApplyModel.find();

        return applylist
    
    } catch (error) {
        console.log(error)
    }

}