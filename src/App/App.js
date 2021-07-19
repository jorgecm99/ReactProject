import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Components/Core/Header';
import ApiDetails from '../Components/ApiState/ApiDetail';
import Apilist from '../Components/ApiState/ApiList';
import Register from '../Components/Formulario';
import styled from '@emotion/styled';
import MainComponent from '../Components/Home';


const Bodystyled = styled ('body')({
  background: '#E1E1E1'
})

function App() {
  return (
    <Router>
      <Bodystyled>
      <Header />
      <div className="container mt-0">
      
      <Switch>

      <Route path="/lista/:id">
         <ApiDetails /> 
        </Route>

        <Route path="/cart" exact>
          Cart
        </Route>

        <Route path="/delivery" exact>
          Delivery
        </Route>
      
        <Route path="/formulario">
          <Register />
        </Route>

        <Route path="/lista">
         <Apilist /> 
        </Route>

        

        <Route path="/" exact>
          <MainComponent />
        </Route>
        
        
      </Switch>
      </div>

      </Bodystyled>
      
      

      
      
    

    </Router>
    
  );
}

export default App;
