const roleCheck = (permissions) =>{

    return (req,res,next) => {

        const userRole = req.body.role

        if(permissions.includes(userRole)){

            next()

        }else{

            return res.status(400).json({message: 'You do not have permossion'})

        }

    }

}

module.exports = roleCheck