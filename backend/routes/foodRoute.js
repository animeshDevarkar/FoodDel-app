import express from "express";
import { addFood ,listFood ,removeFood} from "../controllers/foodController.js";
import multer from "multer";
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const foodRouter = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Cloudinary storage configuration
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'food-del-uploads',
    allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
  }
}); 


const upload = multer({storage:storage});

foodRouter.post("/add", upload.single("image"), addFood);

foodRouter.get("/list",listFood);

foodRouter.post("/remove",removeFood);


export default foodRouter;
