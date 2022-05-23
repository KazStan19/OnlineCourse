import axios from "axios"


class CourseServices {

    addCourse = () =>{



    }
    updateCourse = () =>{

        

    }
    getCourses = () =>{

        return axios.get(`http://localhost:5000/api`)
        .then((response) =>{

            return response.data

        })      

    }
    deleteCourse = () =>{



    }

}

export default new CourseServices