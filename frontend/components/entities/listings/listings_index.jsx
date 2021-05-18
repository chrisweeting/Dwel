import React from 'react';
import ListingIndexItem from './listings_index_item';

class ListingIndex extends React.Component {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.props.fetchListings();
  }

  render() {
    const { listings } = this.props;

    return (
      <div className="listing-section">
        <ul className="listing-items">
          {
            listings.map(listing => <div key={listing.id}><ListingIndexItem listing={listing} openModal={this.props.openModal} /></div>)
          }
        </ul>
        <footer>
          
        </footer>
      </div>
    );
  
  }
}

export default ListingIndex;