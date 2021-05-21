import React from 'react';
import ListingIndexItem from './listings_index_item';

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
    // debugger

  }
  
  componentDidMount() {
    // debugger
    this.props.fetchListings(this.props.filters);
    this.props.fetchLikes();
    // debugger
   
  };

  componentDidUpdate() {
    let m = document.getElementById("listing-map-container");
    m.style.position = "fixed";
  }

  // handleClick(e) {
  //   if (!this.props.currentUser) {
  //     this.props.openModal("signin");
  //   } else {
      
  //     let obj = this.props.likes;
  //     // debugger
  //     for (const [key, value] of Object.entries(obj)) {
  //       // debugger
  //       if (value["listing_id"] === parseInt(e.currentTarget.id)) {
  //         // debugger
  //         this.props.removeLike(key);
          
  //       } else {
  //         this.props.createLike({ user_id: this.props.currentUser, listingId: parseInt(e.currentTarget.id) });
  //       }
  //     }
  //     this.componentDidMount();
  //   }
  // }


  render() {
    // debugger
    debugger
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
              likes={this.props.likes}
              createLike={this.props.createLike}
              removeLike={this.props.removeLike}
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