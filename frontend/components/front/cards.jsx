import React from 'react';



const Cards = (props) => {
  const handleClick = () => {
    return document.getElementById("searchbar").focus();
  };
  return (
    <section className="card-section">
      <h2>Whether you’re buying, selling or renting, we can help you move forward.</h2>
        <div className="card-container">
          <div className="card" onClick={handleClick} >
            <p className="card-text">
              Find your place with an immersive photo experience and the most 
              listings.
            </p>
            <button className="card-button" >Search homes</button>
          </div>
          <div className="card">
            <p className="card-text">
              We can help you navigate a successful sale.
            </p>
            <button className="card-button" >See your options</button>
          </div>
          <div className="card" onClick={handleClick} >
            <p className="card-text">
              Find your next home with our large rental network.
            </p>
            <button className="card-button" >Find rentals</button>
          </div>
        </div>
    </section>
  )
};

export default Cards;