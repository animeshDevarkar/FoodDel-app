import foodModel from "../models/foodModel.js";
import fs from "fs";



// add food item

const addFood = async (req, res) => {

    // req.file.path contains the Cloudinary URL
    let image_filename = `${req.file.path}`;

    const food = new foodModel({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,
    })
    try { 
        await food.save();
        res.json({success:true,message:"Food Item Added Successfully"});
    } catch (error) {
        res.json({success:false,message:"Error in adding food item",});
    }

}

// all food list

const listFood = async (req,res)=>{
    try {
        const foods = await foodModel.find({});
        res.json({success : true, data : foods})
    } catch (error) {
        console.log(error);
        res.json({success : false, message : "Error"})
    }
}

// remove food item 

const removeFood = async (req,res)=>{
    try {
        const food = await foodModel.findById(req.body.id);
        if (food.image && !food.image.startsWith('http')) {
            fs.unlink(`uploads/${food.image}`,()=>{})
        }

        await foodModel.findByIdAndDelete(req.body.id)
        res.json({success: true, message : "Food Removed"})
    } catch (error) {
        console.log(error);
        res.json({success: false, message : "Food not Removed" })
    }
}

export { addFood , listFood, removeFood};