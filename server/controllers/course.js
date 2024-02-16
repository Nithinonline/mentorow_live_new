const Course = require("../Model/courseModel");
const ErrorHandler = require('../utils/ErrorHandler')

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

        return res.status(200).json(createCourse)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }
}

const getAllCourse = async (req, res, next) => {

}

const getSingleCourse = async (req, res, next) => {

}

const updateCourse = async (req, res, next) => {
    try {
        const courseDetails = await Course.findByIdAndUpdate(req.params.id, {
            $set: {
                courseName: req.body.courseName,
                description: req.body.description,
                duration: req.body.duration,
                price: req.body.price,
                courseCurriculum: req.body.courseCurriculum
            }
        }, {
            new: true,
            runValidators: true,
        })

        if (!courseDetails) {
            return next(new ErrorHandler(`No course with id: ${req.params.id}`, 404))
        }

        res.status(200).json(courseDetails)
    } catch (error) {
        return next(new ErrorHandler(error.message, 500))
    }

}

const deleteCourse = async (req, res, next) => {

}

module.exports = { addCourse, getAllCourse, getSingleCourse, updateCourse, deleteCourse }




