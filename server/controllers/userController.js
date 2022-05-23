const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHanlder =  require('express-async-handler')
const User = require('../model/userModel')


// @desc register user
// @route Post /user
// @access public

const registerUser = asyncHanlder(async(req,res) =>{

    const {firstName,lastName,email,password,role} = req.body

    if(!firstName || !lastName || !email || !password || !role){

        res.status(400)
        throw new Error('Please fill in all the empty fields')

    }

    const userExists = await User.findOne({email})

    if(userExists){

        res.status(400)
        throw new Error('user exists')

    }

    //hashing password

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({

        firstName,
        lastName,
        email,
        password:hashedPassword,
        role

    })

    if(user){

        res.status(201).json({

            _id:user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            token: genToken(user._id)

        })

    }

})

// @desc login user
// @route Post /user/login
// @access public

const loginUser = asyncHanlder(async(req,res) =>{

    const {email,password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password,user.password))){

        res.status(201).json({

            _id:user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            role: user.role,
            token: genToken(user._id)

        })

    }else{

    res.status(400)
    throw new Error('invalid crendentials')

    }

})

// @desc get user data
// @route Get /user/me
// @access private

const getUserData = asyncHanlder(async(req,res) =>{

    const {_id,firstName,lastName,email,role} = await User.findById(req.user.id)

    
    res.status(200).json({

        id:_id,
        firstName,
        lastName,
        email,
        role


    })

})

const genToken = (id) => {

    return jwt.sign({id},process.env.JWT_SECRET,{

        expiresIn:'30d'

    })

}

module.exports = {
    registerUser,loginUser,getUserData
}