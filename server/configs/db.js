import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        mongoose.connection.on('connected',()=>console.log("database connected")); //Register 'connected' event listener
        await mongoose.connect(`${process.env.MONGODB_URL}/car-rental`); //after mongodb gets connect it fires connected event 
        
    } catch (error) {
        console.log(error.message);
    }
}

export default connectDB;