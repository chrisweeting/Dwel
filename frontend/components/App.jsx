import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import ListingsIndexContainer from './entities/listings/listings_index_container';
import ListingDetailContainer from './entities/listings/listing_detail_container';
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
    <Modal/>
      <Route exact path="/map" component={ListingMap} ></Route>
      <Route path={`/homes/:listingId`} component={ListingDetailContainer}></Route>
      
    <Switch>
      <Route path="/homes" component={SearchContainer} ></Route>
      <Route exact path="/">
        <Hero/>
        <Cards/>
      </Route>
      
    </Switch>
   
  </div>
);

export default App;


// .photo.attach(io: File.open("/Users/cs/Desktop/Appa/fullstack/other/Photos/60_poppy.jpeg"), filename: "60_poppy.jpeg")