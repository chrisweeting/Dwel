import React from 'react';
import ListingMap from '../map/listingMap';
import ListingsIndex from '../entities/listings/listings_index';
import SearchBar from './searchbar';

class ListingSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filters: this.props.filters,
      title: undefined
    };
  }

  componentDidMount() {
    const path = this.props.location.pathname.split("/");
    if (path.length > 3) {
      const search = {
        minBeds: parseInt(path[2]),
        minBaths: parseInt(path[3]),
        maxSqft: parseInt(path[4]),
        minPrice: parseInt(path[5]),
        maxPrice: parseInt(path[6]),
        query: path[7],
      };
      this.props.updateFilters(search).then(this.setState({ title: path[8] }));
      //  
      // this.props.updateFilters(search).then(
      //   this.setState({ 
      //     searchTitle: path[8],
      //     searchId: path[9]
      //   })
      // );
      // this.setState({ searchTitle: path[8] });
    }
  }

  render() {
    if (this.props.location.pathname.split("/").length > 2 && !this.state.title) {
      return null
    }
     
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
        clearFilters
      } = this.props;
      //  
    return (
      <div className="lw" >
        <SearchBar 
          filters={this.props.filters} 
          updateFilter={updateFilter} 
          updateFilters={updateFilters} 
          removeSearch={this.props.removeSearch}
          updateSearch={this.props.updateSearch}
          createSearch={this.props.createSearch}
          currentUser={currentUser}
          openModal={openModal}
        />
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
          filters={this.props.filters}
          clearFilters={clearFilters}
          />
        
      </div>
    )
  }
}

export default ListingSearch;