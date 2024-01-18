import TrainingModel from "../models/trainingModel.js";
import {  gettrainingidservice, trainingdeleteservice, trainingeditservice, traininglistservice } from "../services/trainingService.js";


const generatejobId = async () => {
    const totalTraining = await TrainingModel.countDocuments();
    const softcadia = 'softcadia';
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');

    const count = (totalTraining + 1).toString().padStart(2, '0');
    const trainingId = `${softcadia}${year}${month}${day}${count}`;
    console.log(trainingId , "training controller");
    return trainingId;
};
export const addnewtraining = async (req, res) => {
const {title, offered, location, duration, details, date, summary, trainingdetail}=req.body

const customId = await generatejobId();

         req.body.trainingId = customId

         const trainingData = {
          trainingId: customId,
          title,
          offered,
          location,
          duration,
          details,
          date,
          summary,
          trainingdetail
        };

        const training = new TrainingModel(trainingData)
    try {
        let trainingstatus = await training.save()
     
        if (trainingstatus === "success") {
            res.status(200).send("successful")
        } else {
            res.status(400).send("failed")
        }
    } catch (error) {
        console.log(error)
    }
}

export const newtraininglist = async (req, res) => {
const {trainingId,title, offered, location, duration, details, date, summary, trainingdetail}=req.body
    try {
        let traininglist = await traininglistservice(trainingId,title, offered, location, duration, details, date, summary, trainingdetail);
        res.status(200).send(traininglist)
    } catch (error) {
        console.log(error)
    }
}

export const edittraining = async (req, res) => {
    let id = req.params.id;
let {title, offered, location, duration, details, date, summary, trainingdetail}=req.body
    try {
        const edittraining = await trainingeditservice(id, title, offered, location, duration, details, date, summary, trainingdetail)
        if (edittraining === "successedit") {
            res.status(200).send("edited successfully")
        } else {
            res.status(400).send("failed edit")
        }
    } catch (error) {
        console.log(error)
    }
}

export const deletetraining = async (req, res) => {
    let id = req.params.id;
    try {
        let status = await trainingdeleteservice(id);
        if (status === "success") {
            res.status(200).send("user deleted")
        } else {
            res.status(400).send("failed delete")
        }
    } catch (error) {
        console.log(error)
    }
}


export const gettrainingbyid = async (req, res) => {
    try {
      const id = req.params.id;
  
      if (!id) {
        return res.status(400).send({ error: 'Invalid or missing job ID' });
      }
  
      let trainingidapply = await gettrainingidservice(id);
  
      if (!trainingidapply) {
        return res.status(404).send({ error: 'Job not found' });
      }
  
      res.status(200).send(trainingidapply);
      console.log(trainingidapply);
    } catch (error) {
      console.error(error, 'error at getjobbyid');
      res.status(500).send({ error: 'Internal Server Error' });
    }
  };
  
  
