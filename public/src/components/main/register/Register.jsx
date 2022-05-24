import React, { useState } from 'react'
import {  Container, Row} from 'react-bootstrap'
import { LecturerForm } from './LecturerForm'
import { UserForm } from './UserForm'

function Register() {
  
  const [type, setType] = useState(true)
  
  const switchRole = (e) =>{

    e.preventDefault()
    setType(!type)

  }

  return (
    <Container>
    <Row>
    <button className="btn w-50" onClick={switchRole}>User</button>
    <button className="btn w-50" onClick={switchRole}>Lecturer</button>
    </Row>
    {type === true ? <UserForm/> : <LecturerForm/>}
    </Container>
  )
}

export default Register