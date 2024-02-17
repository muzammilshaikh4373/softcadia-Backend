import {
  addnewtrainingapplyservice,
  trainingapplylistservice,
} from "../services/trainingapplyService.js";
// import AWS from 'aws-sdk';

// import dotenv from 'dotenv'
// dotenv.config();

// const s3 = new AWS.S3({
//     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.AWS_SEC_KEY,
//     region: process.env.AWS_REGION
// });

// const uploadfile = async (file) => {
//     console.log("File received:", file);

//     const params = {
//         Bucket: process.env.AWS_BUCKET_NAME,
//         Key: `resumes/${Date.now()}_${file.originalname}`, // Replace spaces in file name
//         Body: file.buffer,
//     };
//     console.log("Upload params:", params);

//     try {
//         const data = await s3.upload(params).promise();
//         console.log("Upload success:", data);
//         return data;
//     } catch (error) {
//         console.error("Error uploading file:", error.message);
//         throw new Error(`Error uploading file: ${error.message}`);
//     }
// };

export const addnewtrainingapply = async (req, res) => {
  try {
    console.log(req.body.applicantdetail, "sana k liye");
   // const trainingdetail = JSON.parse(req.body.trainingdetail || "{}"); // Fix the field name to match what you're sending from the frontend

    console.log("=====>", req.body);
    const {
      fname,
      lname,
      email,
      mobile,
      _id
    } = req.body;
    const applicantDetails = {fname,lname,email,mobile};

    const savedTrainingApply = await addnewtrainingapplyservice(_id,applicantDetails);

    if (savedTrainingApply === "success") {
      res.status(200).send("Successfully applied");
    } else {
      res.status(400).send("Failed to apply");
    }
  } catch (error) {
    console.error(error, "Error at addnewtrainingapply controller");
    res.status(500).json({ message:error.message });
  }
}; // admin

// export const addnewtrainingapply = async (req, res) => {
// try {
//   // Extract form data from the request body
//   const { trainingdetail, fname, lname, email, mobile } = req.body;

//   // Process the form data as needed
//   // For example, save it to a database or perform other operations

//   // Assuming you have a function to save the training application
//   const savedTrainingApply = await  addnewtrainingapplyservice({
//     trainingdetail: JSON.parse(trainingdetail),
//     fname,
//     lname,
//     email,
//     mobile,
//   });

//   if (savedTrainingApply === 'success') {
//     // Respond with success message
//     res.status(200).send('Successfully applied');
//   } else {
//     // Respond with failure message
//     res.status(400).send('Failed to apply');
//   }
// } catch (error) {
//   // Handle errors
//   console.error('Error submitting form:', error);
//   res.status(500).send('Internal Server Error');
// }
// };

// controllers/trainingController.js

// import { addnewtrainingapplyservice } from '../services/trainingService.js';

// export const addnewtrainingapply = async (req, res) => {
//   const { id } = req.params;
//   const { applicantdetail } = req.body;

//   try {
//     const savedTrainingApply = await addnewtrainingapplyservice(id, applicantdetail);
//     res.status(200).json({ message: 'Successfully applied for training', savedTrainingApply });
//   } catch (error) {
//     console.error('Error in addnewtrainingapply controller:', error);
//     res.status(500).json({ error: 'Failed to apply for training' });
//   }
// };

export const trainingapplylist = async (req, res) => {
  try {
    let trainingapply = await trainingapplylistservice(
      req.body.applicantdetail,
      req.body.trainingdetail
    );
    res.send(trainingapply);
  } catch (error) {
    console.log(error, "error at list-trainingapply  controlller");
  }
};
