import React, { Fragment, Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/* Componente presentacional */
export default class Register extends Component {
    constructor() {
        super();
        this.state = {
          name:"",  
          username:"",
          email: "",
          password: "",
        };
        this.handleChange = this.handleChange.bind(this);
      }
      handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
      }
      handleChange(event) {
        var target = event.target;
        var name = target["name"];
        console.log(name);
        this.setState({
          [name]: target.value
        });
      }
   
    handleRegister = () => {
      console.log(this.state);
      //this.props.history.push('/home');
    }

    render(){
        return(
            <Fragment>
            <h1>Registro</h1>
            <Form className="login-form"> 
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={this.handleChange} name="name" value={this.state.name} type="text" placeholder="Enter name" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={this.handleChange} name="email" value={this.state.email} type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicUserName">
                            <Form.Label>UserName</Form.Label>
                            <Form.Control onChange={this.handleChange} name="username" value={this.state.username} type="text" placeholder="Enter UserName" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={this.handleChange} name="password" value={this.state.password} type="password" placeholder="Password" />
                        </Form.Group>
                        
                        <Button variant="primary" onClick={this.handleRegister} >
                            Registrarse
                        </Button>
                    </Form>
          </Fragment>
        )
    }
}

