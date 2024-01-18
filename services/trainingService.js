import TrainingModel from "../models/trainingModel.js";

// export const addnewtrainingservice = async (title, offered, location, duration, details, date, summary, trainingdetail) => {
//     let trainings = new TrainingModel({ title, offered, location, duration, details, date, summary, trainingdetail });
//     try {
//         let traininglist = await trainings.save();
//         console.log("success service call")
//         return "success"
//     } catch (error) {
//         console.log(error)
//     }
// };

export const traininglistservice = async () => {
    try {
        let list = await TrainingModel.find()
        return list

    } catch (error) {
        console.log(error)
    }
}

export const trainingeditservice = async (id, title, offered, location, duration, details, date, summary, trainingdetail) => {
    try {
        let edit = await TrainingModel.findByIdAndUpdate(id, { title, offered, location, duration, details, date, summary, trainingdetail });
        return "successedit"
    } catch (error) {
        console.log(error)
    }
}

export const trainingdeleteservice = async (id) => {
    try {
        const result = await TrainingModel.findByIdAndDelete(id);
        return "success"
    } catch (error) {
        console.log(error)
    }
}

export const gettrainingidservice = async (id) => {
    try {
      const training = await TrainingModel.findOne({ trainingId : id }); // Assuming _id is the field to query by
  
      if (!training) {
        throw new Error("training not found");
      }
  
      return training;
    } catch (error) {
      throw error;
    }
  };
