import { connect } from 'react-redux';
import ListingsIndex from './listings_index';
import { fetchListings } from '../../../actions/listing_actions';
import { fetchLikes } from '../../../actions/like_actions';


const mSTP= state => ({
  listings: Object.values(state.entities.listings)
});

const mDTP = dispatch => ({
  fetchListings: () => dispatch(fetchListings()),
  fetchLikes: (likes) => dispatch(fetchLikes(likes)),
});

export default connect(mSTP, mDTP)(ListingsIndex);



// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!