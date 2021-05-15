import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { fetchListings } from '../../../actions/listing_actions';

/*
Export a container component for the `PostIndex` that maps an array of all posts  
from the store as a `posts` prop. Additionally, it should map in functions that
will dispatch `fetchPosts` and `deletePost` to the store as props of the same
name.
*/

const mapStateToProps = state => ({
  listings: Object.values(state.entities.listings)
});

const mapDispatchToProps = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsIndex);