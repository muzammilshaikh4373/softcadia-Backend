import mongoose from 'mongoose';

// title , offered , location , duration , details , date , summary , trainingdetail
export const trainingSchema = mongoose.Schema({
    trainingId : {type:String},
    title: { type: String, required: true },
    offered: { type: String, required: true },
    location: { type: String, required: true },
    duration: { type: String, required: true },
    details: { type: String, required: true },
    date: { type: String, required: true },
    summary: { type: String, required: true },
    trainingdetail: { type: String, required: true },
    createdDate: { type: Date, default: Date.now()}
});

const TrainingModel = new mongoose.model('traininglist', trainingSchema);


export default TrainingModel;