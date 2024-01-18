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