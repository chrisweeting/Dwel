import React from 'react';

class SavedSearchesIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   listings: this.props.listings,
    //   likes: this.props.currentUser.liked_listings,
    //   filters: {
    //     minBeds: 0,
    //     minBaths: 0,
    //     minSqft: 500,
    //     maxSqft: 7000,
    //     minPrice: 50000,
    //     maxPrice: 1000000000,
    //     query: '',
    //   }
    // };

    // this.setState = this.setState.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    // this.props.fetchSearches();
  }

  handleClick(e) {
    debugger
    this.props.removeSearch(e.currentTarget.id).then(res => {
      debugger
    });
  }

  render() {
    // debugger
    const { searches } = this.props;
    // if (searches.length === 0) {
    //   return (
    //     <section id="no-results">

    //       {/* <h1>Please widen your search</h1> */}
    //     </section>
    //   )
    // }


    // let liked = this.state.listings.filter(listing => this.props.currentUser.liked_listings.includes(listing.id));
    
    const searchItems = searches.map((search) => {
      return (
        <div key={search.id} >
          <li>{search.id}</li>
          <button onClick={this.handleClick} id={search.id} >X</button>
        </div>
      )
      
    })

    const sIText = searchItems.length === 1 ? 
      '1 saved search':
      `${searchItems.length} saved searches`
    
    return (
      <div className="liked-listing-section">
        <h1>Saved Searches</h1>
        <h2>{sIText}</h2>
        <ul className="listing-items">
          {searchItems}
        </ul>
        <footer>

        </footer>
      </div>
    );

  }
}

export default SavedSearchesIndex;