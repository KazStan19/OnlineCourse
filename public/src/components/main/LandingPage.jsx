import React, { useEffect, useState } from 'react'
import courseServices from '../../services/courseServices'
import { LoadingPage } from './loadingPage'

function LandingPage() {
  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    setLoading(true)

    courseServices.getCourses()
    .then(course =>{

      setData(course)

    })

    setLoading(false)

  },[])



  
  if(loading === true){

    return(<LoadingPage/>)

  }
  else{

    return(<div>

      {data.map(item =>{

        return(
          <div key={item._id}>
          <h1>{item.text}</h1>
          <h5>{item.user}</h5>
          </div>
        )


      })}

    </div>)

  }
}

export default LandingPage