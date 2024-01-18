import express from 'express'
const app = express();
import dotenv from 'dotenv'
import dbconnect from './db/connection.js';
import jobRouter from './routes/jobRoute.js';
import bodyParser from 'body-parser';
import cors from 'cors'
import loginRouter from './routes/loginRoute.js';
import trainingRouter from './routes/trainingRoute.js';
import jobapplyRouter from './routes/jobapplyRoute.js';
import trainingapplyRouter from './routes/trainingapplyRoute.js';

// import userloginRouter from './routes/userlogin.js';

dotenv.config()
const port = process.env.PORT || 3000
const url = process.env.URL;
const dbname = process.env.DBNAME;

//connection to db by mongoose
dbconnect(url, dbname);

app.use(cors())

//using bodyparser to attach body with request object 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//routing
app.use('/softcadia/job', jobRouter);
app.use('/softcadia/training', trainingRouter)
app.use('/softcadia', loginRouter)
app.use('/softcadia/jobapply' , jobapplyRouter)
app.use('/softcadia/trainingapply' , trainingapplyRouter)
// app.use('/softcadia/tainingapply')
// app.use('/softcadia/user' , userloginRouter)

app.listen(port, () => {
    console.log(`server started at ${port}`)
})