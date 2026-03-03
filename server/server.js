
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

//initialize app 
const app = express();  //Creates the Express application — the object that handles all incoming HTTP requests.
//db connection
await connectDB();  //Runs a connection function that connects your server to a MongoDB database
//middlewares
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>res.send("Server is running!"));
app.use('/api/user', userRouter )
app.use('/api/owner', ownerRouter)
app.use('/api/bookings', bookingRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))