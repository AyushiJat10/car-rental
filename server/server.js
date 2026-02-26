
import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

//initialize app
const app = express();
//db connection
await connectDB();
//middlewares
app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>res.send("Server is running!"));
app.use('/api/user', userRouter )
app.use('/api/owner', ownerRouter)
app.use('/api/bookings', bookingRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))