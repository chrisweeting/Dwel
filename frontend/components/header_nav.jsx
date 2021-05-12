import React from 'react';
import { Link } from 'react-router-dom';


const HeaderNav = (props) => {
  return (
    <section className="header-links">
      <Link to="/homes" >Buy</Link>
      <Link to="/homes/for_rent" >Rent</Link>
      <Link to="/sell" >Sell</Link>
    </section>
  )
};

export default HeaderNav;