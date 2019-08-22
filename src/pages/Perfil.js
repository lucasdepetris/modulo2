import React, { Component ,Fragment} from "react";


class Perfil extends Component {
  constructor(props) {
    super(props);

    /* Estado */
    this.state = {
      usuario: {}
    };
  }

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => this.setState({ usuario: data }))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const usuario = this.state.usuario;
    return (
        <Fragment>
        <h1>Detalle Usuario</h1>
    
        <h5>{usuario.name}</h5>
        <h5>{usuario.email}</h5>
        <h5>{usuario.username}</h5>
      </Fragment>
    );
  }
}

export default Perfil;
