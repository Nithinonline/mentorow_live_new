const Course = require("../Model/courseModel");
const ErrorHandler=require("../utils/ErrorHandler")



//create Course

const addCourse = async (req, res, next) => {

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




