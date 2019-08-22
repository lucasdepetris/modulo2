import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login"
import Perfil from "./pages/Perfil"
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
          <Route path="/usuarios/:id" component={Perfil} />
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
