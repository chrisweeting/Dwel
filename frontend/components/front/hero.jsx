import React from 'react';


class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {searchBar: false};
    this.stickyBar = this.stickyBar.bind(this);
  }
  
  
  stickBar() {
    const x = document.querySelector(".search-container");
    console.log(x.getBoundingClientRect());
  }

  stickyBar() {
    if (scrollY >= 325) {
      this.setState({searchBar: true});
    } else {
      this.setState({searchBar: false});
    }
  }

  render() {
    window.addEventListener("scroll", this.stickyBar);
    
    return (
      <>
        <figure className="hero-image">
        </figure>
        <section className="hero-section">
          <h1>Change starts here</h1>
          <section className={this.state.searchBar ? "search-container sticky" : "search-container" } >
            <input type="text" className={this.state.searchBar ? "searchbar stick" : "searchbar"} placeholder="Enter an address, city, or Zip code"  id="searchbar" />
            <div id="search-submit" onClick={this.stickBar} ></div>
          </section>
        </section>
        <div className={this.state.searchBar ? "bar active" : "bar"} ></div>

      </>
    )
  }
}

export default Hero;