import React from 'react';
import ListingIndexItem from '../listings/listings_index_item';

class SavedListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.listings,
      likes: this.props.currentUser.liked_listings,
      filters: {
        minBeds: 0,
        minBaths: 0,
        minSqft: 500,
        maxSqft: 7000,
        minPrice: 50000,
        maxPrice: 1000000000,
        query: '',
      }
    };

    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    this.props.fetchListings(this.state.filters).then(({listings}) => {

      this.setState({listings: Object.values(listings)});
    });
    // this.props.fetchLikes();
    // debugger

  }

  render() {
    const { listings } = this.props;
    if (this.state.listings.length === 0) {
      return (
        <section id="no-results">

          {/* <h1>Please widen your search</h1> */}
        </section>
      )
    }


    let liked = this.state.listings.filter(listing => this.props.currentUser.liked_listings.includes(listing.id));

    const items = liked.map((listing) => {
      return (
        <div key={listing.id}>
          <ListingIndexItem
            listing={listing}
            openModal={this.props.openModal}
            currentUser={this.props.currentUser}
            likes={this.state.likes}
            createLike={this.props.createLike}
            removeLike={this.props.removeLike}
            setState={this.setState}
          />
        </div>
      )
      
    })

    return (
      <div className="liked-listing-section">
        <h1>Liked Listings</h1>
        <h2>{items.length} liked listings</h2>
        <ul className="listing-items">
          {items}
        </ul>
        <footer>

        </footer>
      </div>
    );

  }
}

export default SavedListingIndex;