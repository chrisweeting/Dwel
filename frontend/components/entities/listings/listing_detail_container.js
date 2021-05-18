import { connect } from 'react-redux';
import ListingDetail from './listing-detail';
import { fetchListing, fetchListings } from '../../../actions/listing_actions';
import { openModal } from '../../../actions/modal_actions';

/*
Export a container component for the `PostIndex` that maps an array of all posts  
from the store as a `posts` prop. Additionally, it should map in functions that
will dispatch `fetchPosts` and `deletePost` to the store as props of the same
name.
*/

// const mapSTP = (state, ownProps) => ({
//   listing: state.entities.listings[ownProps.match.params.listingId]
// });
const mapSTP = (state, ownProps) => {
  return {
    listing: state.entities.listings[ownProps.match.params.listingId],
    currentUser: state.session.id,
  }
};

const mapDTP = (dispatch) => ({
  fetchListing: (listing) => dispatch(fetchListing(listing)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapSTP, mapDTP)(ListingDetail);
