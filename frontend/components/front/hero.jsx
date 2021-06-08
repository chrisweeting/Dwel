import React from 'react';
import { Link } from 'react-router-dom';
import HeroSearchbarContainer from '../search/hero_searchbar_container';


class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    
    return (
      <>
        <figure className="hero-image">
        </figure>
        <section className="hero-section">
          <h1>Change starts here</h1>
          <HeroSearchbarContainer/>
        </section>
      </>
    )
  }
}

export default Hero;