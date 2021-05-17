import React from 'react';
import { Link } from 'react-router-dom';


const HeaderNav = (props) => {
  return (
    <section className="header-links">
      <Link to="/homes" >Buy</Link>
      <Link to="/" >Rent</Link>
      <Link to="/" >Sell</Link>
    </section>
  )
};

export default HeaderNav;