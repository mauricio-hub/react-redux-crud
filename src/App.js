import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Header } from "./components/Header";
import { Nav } from "./components/Nav";

import { Home } from "./pages/Home";
import {AgregarUsuario } from "./pages/AgregarUsuario"
import {EditarUsuario } from './pages/EditarUsuario'

//Importando redux

import {Provider} from 'react-redux';
import {store} from './store/store';

export default function App() {
  
  
  return (
    <Router>

    <Provider store={store}>

      <div>
        <Header />

        <Switch>
          <Route exact path="/editar/:id">
            <EditarUsuario />
          </Route>

          <Route path="/agregarnuevo">
            <AgregarUsuario />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      </Provider>
    </Router>
  );
}
