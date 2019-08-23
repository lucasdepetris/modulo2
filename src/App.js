import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login"
import Perfil from "./pages/Perfil"
import Register  from "./pages/Register"
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        {/* <nav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/usuarios">Lista de Usuarios</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </nav> */}
       
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/registro" component={Register} />
          <Route path="/usuarios/:id" component={Perfil} />
          <Redirect from="" to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
