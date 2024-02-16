const express=require("express");
const { addMentor, getAllMentor, getSingleMentor, deleteMentor, updateMentor } = require("../controllers/mentor");
const router=express.Router();

router.post('/create', addMentor)
router.get('/AllCourse', getAllMentor)
router.get('/singleCourse',getSingleMentor)
router.delete('/deleteCourse', deleteMentor)
router.patch('/updateCourse', updateMentor)


module.exports=router