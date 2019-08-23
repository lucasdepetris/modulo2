import React, { Fragment } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/* Componente presentacional */
const Register = () => (
  <Fragment>
    <h1>Registro</h1>
    <Form>
                <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicUserName">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" placeholder="Enter UserName" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" >
                    Registrarse
                </Button>
            </Form>
  </Fragment>
);
export default Register;
