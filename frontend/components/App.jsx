import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className="header-container">
      <Link className="header-logo"  to='/'>Dwel.</Link>
      <GreetingContainer />
    </header>
    <div className="user-modal">
      <AuthRoute exact path='/signin' component={SigninFormContainer} ></AuthRoute>
      <AuthRoute exact path='/signup' component={SignupFormContainer} ></AuthRoute>
    </div>
  </div>
);

export default App;