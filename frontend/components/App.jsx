import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import ListingsIndexContainer from './entities/listings/listings_index_container';
import Modal from './modal/modal';
import Hero from './front/hero';
import Cards from './front/cards';
import Footer from './footer';
import HeaderNav from './header_nav';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import GoogleMaps from './front/maps';

const App = () => (
  <div className="main-wrapper" >
    <header className="header-container">
      <Link className="header-logo"  to='/'>Dwel.</Link>
      <GreetingContainer />
      <HeaderNav />
    </header>
    <Modal/>
    <Switch>
      <Route path="/homes" component={ListingsIndexContainer} ></Route>
      <Route  path="/">
        <Hero/>
        <Cards/>
      </Route>
      
    </Switch>
   
  </div>
);

export default App;