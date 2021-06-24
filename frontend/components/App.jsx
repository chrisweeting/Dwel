import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import ListingsIndexContainer from './entities/listings/listings_index_container';
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
import ListingMap from './map/listingMap';

const App = () => (
  <div className="main-wrapper" >
    <header className="header-container">
      <Link className="header-logo"  to='/'>Dwel.</Link>
      <GreetingContainer />
      <HeaderNav />
    </header>
      {/* <Route exact path="/map" component={ListingMap} ></Route> */}
      <Route path={`/homes/homedetails/:listingId`} component={ListingDetailContainer}></Route>
    <Modal/>
      
      {/* <Route exact path={"/"} component={Footer}  ></Route> */}
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


// .photo.attach(io: File.open("/Users/cs/Desktop/Appa/fullstack/other/Photos/60_poppy.jpeg"), filename: "60_poppy.jpeg")