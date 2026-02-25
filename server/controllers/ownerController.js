import User from "../models/user.js";
import fs from "fs";
import imagekit from "../configs/imagekit.js";
import Car from "../models/Car.js";


//change role to owner from user
export const changeRoleToOwner = async (req,res)=>{
    try {
        const {_id} = req.user;
        await User.findByIdAndUpdate(_id, {role: "owner"})
        res.json({success: true, message: "Now you can list cars"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}

//api to list cars

export const addCar = async(req, res)=>{
    try {
        const {_id} = req.user;
        let car = JSON.parse(req.body.carData);
        const imageFile = req.file;
        
        //upload image to imagekit
        const fileBuffer = fs.readFileSync(imageFile.path)
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder:'/cars'
        })
        
        //optimize through imagekit url transformation
        var optimizedImageUrl = imagekit.url({
            path : response.filePath,
            transformation : [
                {width: '1280'},  //width resizing
                {quality: 'auto'}, //auto compression
                {format : 'webp'}  //convert to modern format
            ]

        })

        const image = optimizedImageUrl;
        await Car.create({...car, owner:_id,image})
        res.json({success:true,message:"Car added"})
    } catch (error) {
        console.log(error.message);
        res.json({success: false, message: error.message})
    }
}