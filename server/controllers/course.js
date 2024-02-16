const Course = require("../Model/courseModel");
const ErrorHandler=require("../utils/ErrorHandler")



//create Course

const addCourse = async (req, res, next) => {
    try {
        const { courseName, description, duration, price, courseCurriculum } = req.body;
        if (!courseName || !description || !duration || !price || !courseCurriculum) {
            return next(new ErrorHandler("Please provide all required fields", 400))
        }


        const createCourse = await Course.create({
            courseName,
            description,
            duration,
             price,
            courseCurriculum

        })
        console.log(createCourse)
        return res.status(200).json(createCourse)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }

}

//get All

const getAllCourse = async (req, res, next) => {
    const courses = await Course.find({})
    res.status(200).json({ courses })
}


const getSingleCourse = async (req, res, next) => {

}


const updateCourse = async (req, res, next) => {

}

const deleteCourse = async (req, res, next) => {
  
    

}

module.exports = { addCourse, getAllCourse, getSingleCourse, updateCourse, deleteCourse }




