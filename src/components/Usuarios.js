import React, { Fragment } from "react";
import Usuario from "./Usuario";
import Table from "react-bootstrap/Table";

/* Componente presentacional */
const Usuarios = ({ usuarios }) => {
  return (
    <Fragment>
     

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>email</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => {
            // return <li>{user}</li>;
            return <Usuario key={index} {...usuario} />;
          })}
        </tbody>
      </Table>
    </Fragment>
  );
};
export default Usuarios;
