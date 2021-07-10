import React from "react";
import { Route, Switch, Link } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import ListingDetailContainer from './entities/listings/listing_detail_container';
import SavedSearchesContainer from "./entities/user/saved_searches";
import SavedListings from './entities/user/saved_listings';
import SearchContainer from './search/search_container';
import Modal from './modal/modal';
import Hero from './front/hero';
import Cards from './front/cards';
import Footer from './footer';
import HeaderNav from './header_nav';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div className="main-wrapper" >
    <header className="header-container">
      <Link className="header-logo"  to='/'>Dwel.</Link>
      <GreetingContainer />
      <HeaderNav />
    </header>
      <Route path={`/homes/homedetails/:listingId`} component={ListingDetailContainer}></Route>
    <Modal/>
      
    <Switch>
      <Route path="/homes" component={SearchContainer} ></Route>
      <AuthRoute path="/saved" component={SavedListings}></AuthRoute>
      <AuthRoute path="/searches" component={SavedSearchesContainer}></AuthRoute>
      <Route exact path="/">
        <Hero/>
        <Cards/>
        <Footer/>
      </Route>
    </Switch>
  </div>
);

export default App;