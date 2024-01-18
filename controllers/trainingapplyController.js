import { addnewtrainingapplyservice, trainingapplylistservice } from "../services/trainingapplyService.js";
import AWS from 'aws-sdk';

import dotenv from 'dotenv'
dotenv.config();

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SEC_KEY,
    region: process.env.AWS_REGION
});

const uploadfile = async (file) => {
    console.log("File received:", file);

    const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `resumes/${Date.now()}_${file.originalname}`, // Replace spaces in file name
        Body: file.buffer,
    };
    console.log("Upload params:", params);

    try {
        const data = await s3.upload(params).promise();
        console.log("Upload success:", data);
        return data;
    } catch (error) {
        console.error("Error uploading file:", error.message);
        throw new Error(`Error uploading file: ${error.message}`);
    }
};

export const addnewtrainingapply = async(req , res) => {
    try {

        const trainingDetails = JSON.parse(req.body.trainingdetail || "{}")
        console.log(req.file, "File received");
        console.log(req.body)
        const { fname, lname, email, mobile } = req.body;
        if (req.file) {
            const userDocument = await uploadfile(req.file);
            console.log(userDocument, "Uploaded file details");

            const uploadResumeUrl = userDocument.Location


            const savedTrainingApply =await addnewtrainingapplyservice(trainingDetails, {
                fname,
                lname,
                email,
                mobile,
                uploadresume: uploadResumeUrl,
            })
            if (savedTrainingApply == "success") {

                res.status(200).send("Successfully applied");

            } else {
                res.status(400).send("Failed to apply");
            }


        } else {
            res.status(400).send("No file uploaded");
        }

    } catch (error) {
        console.log(error, "Error at addnewtrainingapply controller");
        res.status(500).send("Internal Server Error");
    }
};
// admin
export const trainingapplylist = async(req , res) => {
    try {
        let trainingapply = await trainingapplylistservice(req.body.applicantdetail , req.body.jobdetail)
        res.send(trainingapply)
    } catch (error) {
        console.log(error , "error at list-trainingapply  controlller")
    }


}



