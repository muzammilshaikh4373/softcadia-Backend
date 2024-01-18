import JobModel from "../models/jobModel.js";
import {  getjobidservice, jobdeleteservice, jobeditservice, joblistservice } from "../services/jobService.js"
// addnewjobservice,

const generatejobId = async () => {
    const totalJobs = await JobModel.countDocuments();
    const softcadia = 'softcadia';
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const day = currentDate.getDate().toString().padStart(2, '0');

    const count = (totalJobs + 1).toString().padStart(2, '0');
    const jobId = `${softcadia}${year}${month}${day}${count}`;
    console.log(jobId , "job controller");
    return jobId;
};

export const addnewjob = async (req, res) => {
const {title, remote, employee, skills, company, joblocation, summary, details}=req.body
const customId = await generatejobId();

         req.body.jobId = customId

         const jobData = {
          jobId: customId,
          title,
          remote,
          employee,
          skills,
          company,
          joblocation,
          summary,
          details
        };

        const job = new JobModel(jobData)
  try {
    let jobstatus = await job.save()
    if (jobstatus === 'success') {
      res.status(200).send("success")
    } else {
      res.status(400).send("error")
    }

  } catch (error) {
    console.log(error, 'error occure while service call')
  }
};

export const newjoblist = async (req, res) => {
let {jobId ,title, remote, employee, skills, company, joblocation, summary, details}=req.body
  try {
    let joblist = await joblistservice(jobId ,title, remote, employee, skills, company, joblocation, summary, details);
    res.status(200).send(joblist)
  } catch (error) {
    console.log(error, 'error occure while controller')
  }
};

export const editjob = async (req, res) => {
  let id = req.params.id;
const { title, remote, employee, skills, company, joblocation, summary, details}=req.body
  try {
    const editjob = await jobeditservice(id,  title, remote, employee, skills, company, joblocation, summary, details);
    if (editjob === "success") {

      res.status(200).send("success")
    } else {
      res.status(400).send("error")
    }
  } catch (error) {
    console.log(error, "error at edit controller")
  }

}
export const deletejob = async (req, res) => {
  let id = req.params.id;
  try {
    let deletejob = await jobdeleteservice(id )
    if (deletejob === "success") {
      res.status(200).send("delete user from controller")
    } else {
      res.status(400).send("error")
    }
  } catch (error) {
    console.log(error, "user is not delte at congtroller")
  }
}


export const getjobbyid = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(400).send({ error: 'Invalid or missing job ID' });
    }

    let jobidapply = await getjobidservice(id);

    if (!jobidapply) {
      return res.status(404).send({ error: 'Job not found' });
    }

    res.status(200).send(jobidapply);
    console.log(jobidapply);
  } catch (error) {
    console.error(error, 'error at getjobbyid');
    res.status(500).send({ error: 'Internal Server Error' });
  }
};


