import React, { Fragment,Component } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

/* Componente presentacional */
export default class  LoginPage extends Component {
    constructor() {
        super();
        this.state = {
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
   
    handleLogin = () => {
      console.log(this.state);
      this.props.history.push('/home');
    }

    render(){
        return (
            <Fragment>
            <h1>Login</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.handleChange} name="email" value={this.state.email} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  onChange={this.handleChange}  name="password" value={this.state.password} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicChecbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="link" href="/Registro">Registrate</Button>
                <Button variant="primary" onClick={this.handleLogin}>
                    Login
                </Button>
            </Form>
        </Fragment>
        )
    }
}

