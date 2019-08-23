import React, { Component ,Fragment} from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Spinner from "react-bootstrap/Spinner";

class Perfil extends Component {
  constructor(props) {
    super(props);

    /* Estado */
    this.state = {
      usuario: {},
      isLoading:true
    };
  }

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => this.setState({ usuario: data ,isLoading:false}))
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const usuario = this.state.usuario;

    const { isLoading } = this.state;

    return (
        <Fragment>
        <Breadcrumb>
                <Breadcrumb.Item href="/home">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Perfil</Breadcrumb.Item>
        </Breadcrumb>
        <h1>Perfil Usuario</h1>
        {!isLoading ? <Fragment><h5>{usuario.name}</h5>
        <h5>{usuario.email}</h5>
        <h5>{usuario.username}</h5></Fragment>:<Spinner animation="border" role="status">
          <span className="sr-only">Cargando...</span>
        </Spinner>}
        
      </Fragment>
    );
  }
}

export default Perfil;
