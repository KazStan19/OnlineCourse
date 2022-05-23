import React from 'react'
import {Button, Form} from 'react-bootstrap'

function Login() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <p>Don't have a account <a href="/register">Click here</a></p>
      </Form.Group>
      <Button variant="primary" type="submit">
        login
      </Button>
    </Form>
  )
}

export default Login