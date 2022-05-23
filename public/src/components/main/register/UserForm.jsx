
import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'

export const UserForm = () => {
  
  const [userInfo, setUserInfo] = useState({

    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: '',
    role: 'user',

  })

  const {firstName,lastName, email, password, password2} = userInfo
  
  const onChange = (e) => {

    setUserInfo((prevState) => ({

      ...prevState,
      [e.target.name]:e.target.value

    }))

  }

  const onSubmit = (e) => {

    e.preventDefault()

  }

  return (
    <Form onSubmit={onSubmit}>
      <h1>Hello new user</h1>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>First Name</Form.Label>
          <Form.Control onChange={onChange} value={firstName} type="text" placeholder="Enter First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Last Name</Form.Label>
          <Form.Control onChange={onChange} value={lastName} type="text" placeholder="Enter Last Name" />
        </Form.Group>
      </Row>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={onChange} value={email} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={onChange} value={password} type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Confirm password</Form.Label>
        <Form.Control onChange={onChange} value={password2} type="password" placeholder="Confirm password" />
      </Form.Group>

      <button className="btn btn-primary" type="submit">
        Register
      </button>
    </Form>
  )
}
