import { connect } from 'react-redux';
import ListingSearch from './listing_search';
import { fetchListings } from '../../actions/listing_actions';
import { updateFilter, updateFilters, clearFilters } from '../../actions/filter_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchLikes, removeLike, createLike } from '../../actions/like_actions';
import { createSearch, updateSearch, removeSearch } from '../../actions/search_actions';



const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings),
  currentUser: state.session,
  likes: state.entities.likes,
  filters: state.ui.filters,
});

const mapDispatchToProps = dispatch => ({
  fetchListings: (filters) => dispatch(fetchListings(filters)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateFilters: (filter) => dispatch(updateFilters(filter)),
  clearFilters: (filter) => dispatch(clearFilters(filter)),
  openModal: modal => dispatch(openModal(modal)),
  fetchLikes: () => dispatch(fetchLikes()),
  removeLike: (likeId) => dispatch(removeLike(likeId)),
  createLike: (like) => dispatch(createLike(like)),
  removeSearch: (searchId) => dispatch(removeSearch(searchId)),
  createSearch: (search) => dispatch(createSearch(search)),
  updateSearch: (search) => dispatch(updateSearch(search)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ListingSearch);