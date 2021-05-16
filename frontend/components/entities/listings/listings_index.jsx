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
            listings.map(listing => <ListingIndexItem listing={listing} key={listing.id}/>)
          }
        </ul>
       
      </div>
    );
  
  }
}

export default ListingIndex;