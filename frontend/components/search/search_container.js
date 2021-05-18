import { connect } from 'react-redux';
import ListingSearch from './listing_search';
import { fetchListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';
import { openModal } from '../../actions/modal_actions';


const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings)
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingSearch);