const express = require('express')
const { addCourse, getAllCourse, getSingleCourse, deleteCourse, updateCourse } = require('../controllers/course')

const router = express.Router()

router.post('/create', addCourse)
router.get('/AllCourse', getAllCourse)
router.get('/singleCourse',getSingleCourse)
router.delete('/deleteCourse', deleteCourse)
router.patch('/updateCourse', updateCourse)


module.exports=router