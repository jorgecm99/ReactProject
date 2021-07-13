import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Components/Core/Header';
import ApiDetails from '../Components/ApiState/ApiDetail';
import Apilist from '../Components/ApiState/ApiList';
import Register from '../Components/Formulario';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-5">
      
      <Switch>

      <Route path="/lista/:id">
         <ApiDetails /> 
        </Route>
      
        <Route path="/formulario">
          Esta es la pagina de formulario
          <Register />
        </Route>

        <Route path="/lista">
         <Apilist /> 
        </Route>

        <Route path="/" exact>
          Esta es la pagina de inicio
        </Route>
        
        
      </Switch>
      </div>
      

      
      
    

    </Router>
    
  );
}

export default App;
