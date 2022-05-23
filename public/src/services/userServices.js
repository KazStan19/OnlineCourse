import axios from "axios"


class UserServices {

    registerUser = (firstName,lastName,email,password,role) =>{

        axios.post('http://localhost:5000/user',{firstName:firstName,lastName:lastName,email:email,password:password,role:role})

    }
    getUsers = () =>{

        return axios.get(`http://localhost:5000/user/all`)
        .then((response) =>{

            return response.data

        })      

    }
    loginUser = () =>{



    }

}

export default new UserServices