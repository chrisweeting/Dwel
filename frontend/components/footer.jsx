import React from 'react';



const Footer = (props) => {
  return (
    <>
      <section className="credits">
        <div className="footer-logo">Dwel.</div>
        <a 
          href="https://www.linkedin.com/in/christopher-sweeting-6878211a3/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-logo-in"
        ></a>
        <a 
          href="https://github.com/chrisweeting/Dwel" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="footer-logo-github"
        ></a>
      </section>
      <section className="footer">
        <div id="footer-left"></div>
        <div id="footer-mid"></div>
        <div id="footer-right"></div>
        {/* <div id="ft-img"></div> */}
      </section>
    </>
  )
};

export default Footer;