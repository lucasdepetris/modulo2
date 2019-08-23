import React, { Component, Fragment } from "react";
import Usuarios from "../components/Usuarios";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

class Home extends Component {
  constructor(props) {
    super(props);

    /* Estado */
    this.state = {
      usuarios: [],
      update: true,
      isLoading: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleSetUpdate = this.handleSetUpdate.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ usuarios: data, isLoading: false }))
      .catch(error => console.log(error));
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextState);

    return this.state.update;
  }

  addUser() {
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: "Gonzalo",
        email: "gonzalo@gmail.com",
        userId: 11,
        username: "gonzs"
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        this.setState({
          usuarios: this.state.usuarios.concat([data])
        });
      })
      .catch(error => console.log(error));
  }

  handleSetUpdate(e, update) {
    this.setState({
      update: !update
    });
  }

  handleClick(e) {
    switch (e.target.id) {
      case "ADD":
        console.log(e.target);
        this.addUser();
        break;

      case "CB":
        e.preventDefault();

        break;

      default:
        break;
    }
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading)
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Cargando...</span>
        </Spinner>
      );
    else {
      return (
        <Fragment>
          <h1>Home</h1>
          <Usuarios usuarios={this.state.usuarios} />

          <Button id="ADD" onClick={this.handleClick}>
            Agregar Usuario
          </Button>
        </Fragment>
      );
    }
  }
}
export default Home;
