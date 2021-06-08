import { connect } from 'react-redux';
import { fetchListings } from '../../actions/listing_actions';
import { updateFilter, updateFilters } from '../../actions/filter_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchLikes, removeLike, createLike } from '../../actions/like_actions';
import HeroSearchBar from './hero_searchbar';
import { withRouter } from 'react-router-dom';



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
  openModal: modal => dispatch(openModal(modal)),
  fetchLikes: () => dispatch(fetchLikes()),
  removeLike: (likeId) => dispatch(removeLike(likeId)),
  createLike: (like) => dispatch(createLike(like)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HeroSearchBar));