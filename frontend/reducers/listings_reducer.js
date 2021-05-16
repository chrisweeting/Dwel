import { RECEIVE_ALL_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';

const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTING:
      
      return Object.assign({}, state, { [action.listing.id]: action.listing });
    case RECEIVE_ALL_LISTINGS:
      return action.listings;
    default:
      return state;
  }
};

export default ListingsReducer;