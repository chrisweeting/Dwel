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
    this.openSearch = this.openSearch.bind(this);
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

  openSearch(e) {
    const search = this.props.searches.filter(search => `${search.id}` === e.currentTarget.id);
    debugger
    const searchObj = {
      min_beds: search[0].min_beds,
      min_baths: search[0].min_baths,
      min_sqft: search[0].min_sqft,
      max_sqft: search[0].max_sqft,
      min_price: search[0].min_price,
      max_price: search[0].max_price,
      query: search[0].query,
    };

    this.props.updateFilters(searchObj).then(this.props.history.push(`/homes/${search[0].title}`));

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
        <div key={search.id} className="search-card" >
          <li onClick={this.openSearch} id={search.id} >{search.title}</li>
          <div onClick={this.handleClick} id={search.id} >Edit</div>
        </div>
      )
      
    })

    const sIText = searchItems.length === 1 ? 
      '1 saved search':
      `${searchItems.length} saved searches`
    
    return (
      <div className="saved-searches-section">
        <h1>Saved Searches</h1>
        <h2>{sIText}</h2>
        <ul className="saved-listing-items">
          {searchItems}
        </ul>
        <footer>

        </footer>
      </div>
    );

  }
}

export default SavedSearchesIndex;