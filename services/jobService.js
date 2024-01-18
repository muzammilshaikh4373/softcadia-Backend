import JobModel from "../models/jobModel.js";

// export const addnewjobservice = async (job) => {
//     let job = new JobModel({jobId, title, remote, employee, skills, company, joblocation, summary, details })
//     try {
//         let joblist = await job.save()
//         return 'success'
//     } catch (error) {
//         console.log(error, 'error occure while insertion')
//         return 'error'
//     }
// };


export const joblistservice = async () => {
    try {
        let list = await JobModel.find();
        return list
    } catch (error) {
        console.log(error, "error occure while showing list")
    }
};

export const jobeditservice = async (id, title, remote, employee, skills, company, joblocation, summary, details) => {

    try {
        let edit = await JobModel.findByIdAndUpdate(id, { title, remote, employee, skills, company, joblocation, summary, details })
        return "success"
    } catch (error) {
        console.log(error, "error at update service ")
    }
};

export const jobdeleteservice = async (id ) => {
    try {
        const del = await JobModel.findByIdAndDelete(id);
        return "success"
    } catch (error) {
        console.log(error, "error at delete service")
    }
}

export const getjobidservice = async (id) => {
    try {
      const job = await JobModel.findOne({ jobId: id }); // Assuming _id is the field to query by
  
      if (!job) {
        throw new Error("Job not found");
      }
  
      return job;
    } catch (error) {
      throw error;
    }
  };


