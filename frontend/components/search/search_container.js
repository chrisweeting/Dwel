import { connect } from 'react-redux';
import ListingSearch from './listing_search';
import { fetchListings } from '../../actions/listing_actions';
import { updateFilter } from '../../actions/filter_actions';


const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings)
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingSearch);