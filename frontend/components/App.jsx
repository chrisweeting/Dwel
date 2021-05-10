import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';

const App = () => (
  <div>
    <Link to='/' >
    <h1>Dwel.</h1>
    </Link>

    <GreetingContainer />
    <Route exact path='/signin' component={SigninFormContainer} ></Route>
    <Route exact path='/signup' component={SignupFormContainer} ></Route>
  </div>
);

export default App;