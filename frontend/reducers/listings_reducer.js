import { RECEIVE_ALL_LISTINGS, RECEIVE_LISTING } from '../actions/listing_actions';

const ListingsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTING:
      
      return Object.assign({}, state, { [action.listing.id]: action.listing });
    case RECEIVE_ALL_LISTINGS:
      return action.listings;

    // case CREATE_LIKE:
    //   const nextState = {...state};
    //   if (nextState.likers) {
    //     nextState.likers.push(action.userId);
    //   } else {
    //     nextState.likers = [action.userId];
    //   }

    //   return nextState;

    default:
      return state;
  }
};

export default ListingsReducer;