import {v2 as cloudinary} from 'cloudinary';
import fs from "fs";     

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloudinary = async (localFilePath) => {
    try{
        if(!localFilePath) return null
        //Uplode the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type: "auto"
        });
        //File has been uplode successfully
        console.log("file has been upload successfully",response.url);
        return response
    }catch(error){
        fs.unlinkSync(localFilePath)
        //remove the locally saved temporary file save as the upload opration got failed
        return null
    }
}

export{
    uploadOnCloudinary
}

