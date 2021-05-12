import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import Hero from './front/hero';
import Cards from './front/cards';
import Footer from './footer';
import HeaderNav from './header_nav'
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className="header-container">
      <Link className="header-logo"  to='/'>Dwel.</Link>
      <GreetingContainer />
      <HeaderNav />
    </header>
    <Hero/>
    <Cards/>
    <div className="user-modal">
      <AuthRoute component={SigninFormContainer} ></AuthRoute>
      <AuthRoute component={SignupFormContainer} ></AuthRoute>
    </div>
    <Footer/>
  </div>
);

export default App;