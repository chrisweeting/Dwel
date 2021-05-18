import React from 'react'
import ListingMap from '../map/listingMap';
import ListingsIndex from '../entities/listings/listings_index';

class ListingSearch extends React.Component {
  render() {
    const { listings, fetchListings, updateFilter, openModal } = this.props;
    return (
      <div className="lw" >
        
        <ListingMap listings={listings} updateFilter={updateFilter} />
        <ListingsIndex listings={listings} fetchListings={fetchListings} openModal={openModal}  />
        
      </div>
    )
  }
}

export default ListingSearch;