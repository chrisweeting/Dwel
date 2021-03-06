import { connect } from 'react-redux';
import SavedSearchesIndex from './saved_searches_index';
import { updateFilter, updateFilters } from '../../../actions/filter_actions';
import { openModal } from '../../../actions/modal_actions';
import { removeSearch, fetchSearches, updateSearch } from '../../../actions/search_actions';



const mapStateToProps = state => ({
  searches: state.session.searches,
  currentUser: state.session.id,
  filters: state.ui.filters,
});

const mapDispatchToProps = dispatch => ({
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateFilters: (filter) => dispatch(updateFilters(filter)),
  openModal: modal => dispatch(openModal(modal)),
  fetchSearches: () => dispatch(fetchSearches()),
  removeSearch: (searchId) => dispatch(removeSearch(searchId)),
  updateSearch: (search) => dispatch(updateSearch(search)),
});


export default connect(mapStateToProps, mapDispatchToProps)(SavedSearchesIndex);