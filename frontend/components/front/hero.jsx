import React from 'react';


class Hero extends React.Component {
  constructor(props) {
    super(props);

    this.stickBar = this.stickBar.bind(this);
  }
  
  
  stickBar() {
    return console.log(window.scrollY);
  }

  render() {
    return (
      <>
        <figure className="hero-image">
        </figure>
        <section className="hero-section">
          <h1>Change starts here</h1>
          <input type="text" className="searchbar" placeholder="Enter an address, city, or Zip code" onScroll={() => this.stickBar} id="searchbar" />
        </section>

      </>
    )
  }
}

export default Hero;