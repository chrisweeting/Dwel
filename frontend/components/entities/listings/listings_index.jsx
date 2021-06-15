import React from 'react';
import ListingIndexItem from './listings_index_item';

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.currentUser.liked_listings
    };

    this.setState = this.setState.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchListings(this.props.filters);
    this.props.fetchLikes().then(res => {
      this.setState(res.likes);
    });
   
  }

  componentWillUnmount() {
    this.props.clearFilters();
  }

  componentDidUpdate() {
    let m = document.getElementById("listing-map-container");
    m.style.position = "fixed";
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

    const items = listings.map((listing) => {
      if (listing.id) {
        return (
          <div key={listing.id}> 
            <ListingIndexItem 
              listing={listing} 
              openModal={this.props.openModal} 
              handleClick={this.handleClick} 
              currentUser={this.props.currentUser}
              likes={this.state.likes}
              createLike={this.props.createLike}
              removeLike={this.props.removeLike}
              setState={this.setState}
            />
          </div>
        )
      }
    })

    return (
      <div className="listing-section">
        <ul className="listing-items">
          {items}
        </ul>
        <footer>
          
        </footer>
      </div>
    );
  
  }
}

export default ListingIndex;


// {
//   listings.map(listing => <div key={listing.id}><ListingIndexItem listing={listing} openModal={this.props.openModal} handleClick={this.handleClick} /></div>)
// }