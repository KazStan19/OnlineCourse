const express = require('express')
const router = express.Router()
const {getCourses, postCourses, updateCourses, deleteCourses} = require('../controllers/coursesControllers')
const { protect } = require('../middleware/authMiddleware')

router.get('/',getCourses).post('/',protect,postCourses)
router.put('/:id',protect,updateCourses).delete('/:id',protect,deleteCourses)

module.exports = router