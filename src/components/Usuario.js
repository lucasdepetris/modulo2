import React from "react";
import { Link } from "react-router-dom";

const Usuario = ({ id, name, email, username }) => {
  return (
    <tr>
      <td>
        <Link to={`/usuarios/${id}`}>{id}</Link>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{username}</td>
    </tr>
  );
};
export default Usuario;
