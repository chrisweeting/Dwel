import { connect } from 'react-redux';
import ListingDetail from './listing-detail';
import { fetchListing, fetchListings, updateListing } from '../../../actions/listing_actions';
import { fetchLikes, createLike, removeLike } from '../../../actions/like_actions';
import { openModal } from '../../../actions/modal_actions';


const mapSTP = (state, ownProps) => {
  
  return {
    listing: state.entities.listings[ownProps.match.params.listingId],
    currentUser: state.session,
    likes: state.entities.likes,
  };
};

const mapDTP = (dispatch) => ({
  fetchListing: (listing) => dispatch(fetchListing(listing)),
  updateListing: (listing) => dispatch(updateListing(listing)),
  createLike: (like) => dispatch(createLike(like)),
  openModal: (modal) => dispatch(openModal(modal)),
  removeLike: (likeId) => dispatch(removeLike(likeId)),
  fetchLikes: () => dispatch(fetchLikes()),
});

export default connect(mapSTP, mapDTP)(ListingDetail);
