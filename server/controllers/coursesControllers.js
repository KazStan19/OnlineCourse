const asyncHanlder =  require('express-async-handler')

const Course = require('../model/courseModel')
const User = require('../model/userModel')
// @desc get courses
// @route Get /api
// @access public

const getCourses = asyncHanlder(async(req,res) =>{
    const courses = await Course.find()
    
    res.status(200).json(courses)
})

// @desc adds a course
// @route Post /api
// @access privite

const postCourses = asyncHanlder(async(req,res) =>{

    if(!req.body.text){

        res.status(400)
        throw new Error("please add text field")

    }

    const courses = await Course.create({
        
        user: req.user.id,
        text: req.body.text

    })

    res.status(200).json(courses)
})

// @desc updates a specific course
// @route Put /api
// @access privite

const updateCourses = asyncHanlder(async(req,res) =>{
    const course = await Course.findById(req.params.id)
    
    if(!course){

        res.status(400)
        throw new Error('Course is not found')

    }

    if(!req.body.text){

        res.status(400)
        throw new Error("please add text field")

    }

    const user = await User.findById(req.user.id)

    if(!user){

        res.status(401)
        throw new Error('User not found')

    }

    if(course.user.toString() !== user.id && user.role !== 'admin'){

        res.status(401)
        throw new Error('User not authorized')

    }

    const courseUpdated = await Course.findByIdAndUpdate(req.params.id,req.body,{ new:true })

    res.status(200).json(`updated ${course} to ${courseUpdated}`)
})

// @desc deletes a specific course
// @route Delete /api
// @access privite

const deleteCourses = asyncHanlder(async(req,res) =>{
    const course = await Course.findById(req.params.id)
    
    if(!course){

        res.status(400)
        throw new Error('Course is not found')

    }

    const user = await User.findById(req.user.id)

    if(!user){

        res.status(401)
        throw new Error('User not found')

    }

    if(course.user.toString() !== user.id && user.role !== 'admin'){

        res.status(401)
        throw new Error('User not authorized')

    }

    await course.remove()

    res.status(200).json(req.params.id)
})

module.exports = {
    getCourses,postCourses,updateCourses,deleteCourses
}