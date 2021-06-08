import { CREATE_LIKE, FETCH_LIKES, REMOVE_LIKE } from '../actions/like_actions';


const LikesReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = {...state};
  switch (action.type) {
    case CREATE_LIKE:
      return Object.assign({}, newState, { [action.listing_id]: { user_id: action.user_id, listing_id: action.listing_id } });
    case REMOVE_LIKE:
      delete newState[action.listingId];
      return newState;
    case FETCH_LIKES:
      return action.likes;
    default:
      return state;
  }
};

export default LikesReducer;