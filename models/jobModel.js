import mongoose from "mongoose";

export const jobSchema = mongoose.Schema({
    jobId : {type:String },
    title: { type: String, required: true },
    remote: { type: String, required: true },
    employee: { type: String, required: true },
    skills: { type: String, required: true },
    company: { type: String, required: true },
    joblocation: { type: String, required: true },
    summary: { type: String, required: true },
    details: { type: String, required: true },
    createdDate: { type: Date, default: Date.now() }
});

const JobModel = mongoose.model('joblist', jobSchema);

export default JobModel;