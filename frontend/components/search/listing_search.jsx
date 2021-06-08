import React from 'react'
import ListingMap from '../map/listingMap';
import ListingsIndex from '../entities/listings/listings_index';
import SearchBar from './searchbar';

class ListingSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: this.props.filters
    };
  }

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
        <SearchBar filters={this.state.filters} updateFilter={updateFilter} updateFilters={updateFilters} />
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
          filters={this.state.filters}
          />
        
      </div>
    )
  }
}

export default ListingSearch;