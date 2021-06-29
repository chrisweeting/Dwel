import React from 'react';
import { Link } from 'react-router-dom';


const HeaderNav = (props) => {
  return (
    <section className="header-links">
      <Link to="/homes" >Buy</Link>
      {/* <Link to="/" >Rent</Link>
      <Link to="/" >Sell</Link> */}
      <a
        href="https://www.linkedin.com/in/christopher-sweeting-6878211a3/"
        target="_blank"
        rel="noopener noreferrer"
        // className="footer-logo-in"
      >Linkedin</a>
      <a
        href="https://github.com/chrisweeting/Dwel"
        target="_blank"
        rel="noopener noreferrer"
        // className="footer-logo-github"
      >Github</a>
      <a
        href="http://www.christophersweeting.com/"
        target="_blank"
        rel="noopener noreferrer"
        // className="footer-logo-github"
      >Portfolio</a>
    </section>
  )
};

export default HeaderNav;