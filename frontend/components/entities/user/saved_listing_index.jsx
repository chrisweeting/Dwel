import React from 'react';
import ListingIndexItem from '../listings/listings_index_item';

class SavedListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: this.props.listings,
      likes: this.props.currentUser.liked_listings
    };

    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    this.props.fetchListings(this.props.filters).then(({listings}) => {
      this.setState({listings: Object.values(listings)});
    });
    // this.props.fetchLikes();
    // debugger

  }

  render() {
    const { listings } = this.props;
    if (listings.length === 0) {
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
      <div className="listing-section">
        <h1>Liked Listings</h1>
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