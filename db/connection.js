import mongoose from "mongoose";

const dbconnect = async(url , dbname) => {
try {
    await mongoose.connect(url + dbname)
    
    console.log("connected to db successfully") 
} catch (error) {
    console.log(error , "error occured while db connection")
    
}
};

export default dbconnect