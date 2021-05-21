import React from 'react'
import ListingMap from '../map/listingMap';
import ListingsIndex from '../entities/listings/listings_index';
import SearchBar from './searchbar';

class ListingSearch extends React.Component {
  render() {
    const { listings, 
        fetchListings, 
        updateFilter, 
        updateFilters, 
        openModal, 
        currentUser, 
        fetchLikes, 
        removeLike, 
        likes, 
        createLike,  
        filters,
      } = this.props;
      // debugger
    return (
      <div className="lw" >
        <SearchBar filters={filters} updateFilter={updateFilter} updateFilters={updateFilters} />
        <div id="mapcontainer">
          <ListingMap listings={listings} updateFilter={updateFilter} />

        </div>
        <ListingsIndex 
          listings={listings} 
          fetchListings={fetchListings} 
          openModal={openModal} 
          currentUser={currentUser} 
          fetchLikes={fetchLikes} 
          removeLike={removeLike }
          likes={likes}
          createLike={createLike}
          filters={filters}
          />
        
      </div>
    )
  }
}

export default ListingSearch;