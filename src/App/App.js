import './App.css';
import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Apilist from '../Components/ApiState/ApiList/apilist';

function App() {
  return (
    <Router>
      <div className="container">
      <h1>Todo OK Jorge</h1>

      <Apilist />

      <Switch>
      <Route path="/" exact>
          Esta es la pagina de inicio
        </Route>

        <Route path="/lista">
          Esta es la pagina de lista
        </Route>

        <Route path="/formulario">
          Esta es la pagina de formulario
        </Route>

        
      </Switch>
      
    </div>

    </Router>
    
  );
}

export default App;
