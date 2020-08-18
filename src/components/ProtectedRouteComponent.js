import React, { createElement } from 'react';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({ user, ...rest }) => {

  const routeComponent = (props) => 
    
    user ? createElement(props) : < Redirect to={{pathname: "/"}} />
    
  return < Route 
   {
     ...rest
   } render={routeComponent} />
}

export default ProtectedRoute