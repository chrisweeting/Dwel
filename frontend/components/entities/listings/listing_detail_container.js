import { connect } from 'react-redux';
import ListingDetail from './listing-detail';
import { fetchListing, fetchListings, updateListing } from '../../../actions/listing_actions';
import { createLike, removeLike } from '../../../actions/like_actions';
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
    likes: state.entities.likes,
    val: false
  };
};

const mapDTP = (dispatch) => ({
  fetchListing: (listing) => dispatch(fetchListing(listing)),
  updateListing: (listing) => dispatch(updateListing(listing)),
  createLike: (like) => dispatch(createLike(like)),
  openModal: (modal) => dispatch(openModal(modal)),
  removeLike: (likeId) => dispatch(removeLike(likeId)),
});

export default connect(mapSTP, mapDTP)(ListingDetail);
