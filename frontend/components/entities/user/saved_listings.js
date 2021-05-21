import { connect } from 'react-redux';
import SavedListingsIndex from './saved_listing_index';
import { fetchListings } from '../../../actions/listing_actions';
import { updateFilter, updateFilters } from '../../../actions/filter_actions';
import { openModal } from '../../../actions/modal_actions';
import { fetchLikes, removeLike } from '../../../actions/like_actions';



const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings),
  currentUser: state.session.id,
  likes: state.entities.likes,
  filters: state.ui.filters,
});

const mapDispatchToProps = dispatch => ({
  fetchListings: (filters) => dispatch(fetchListings(filters)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateFilters: (filter) => dispatch(updateFilter(filter)),
  openModal: modal => dispatch(openModal(modal)),
  fetchLikes: () => dispatch(fetchLikes()),
  removeLike: (likeId) => dispatch(removeLike(likeId)),
  createLike: (like) => dispatch(createLike(like)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SavedListingsIndex);