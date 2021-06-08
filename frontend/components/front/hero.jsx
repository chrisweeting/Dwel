import React from 'react';
import { Link } from 'react-router-dom';
import HeroSearchbarContainer from '../search/hero_searchbar_container';


class Hero extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {searchBar: false};
    // this.stickyBar = this.stickyBar.bind(this);
  }
  
  // componentDidMount() {
  //   window.addEventListener("scroll", this.stickyBar);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("scroll", this.stickyBar);
  // }
  

  // stickyBar() {
  //   if (scrollY >= 325) {
  //     this.setState({searchBar: true});
  //   } else {
  //     this.setState({searchBar: false});
  //   }
  // }

  render() {
    
    return (
      <>
        <figure className="hero-image">
        </figure>
        <section className="hero-section">
          <h1>Change starts here</h1>
          {/* <section className={this.state.searchBar ? "search-container sticky" : "search-container" } >
            <input type="text" className={this.state.searchBar ? "searchbar stick" : "searchbar"} placeholder="Enter an address, city, or Zip code"  id="searchbar" />
            <Link to="/homes" id="search-submit" ></Link>
          </section> */}
          <HeroSearchbarContainer/>
        </section>
        {/* <div className={this.state.searchBar ? "bar active" : "bar"} ></div> */}

      </>
    )
  }
}

export default Hero;