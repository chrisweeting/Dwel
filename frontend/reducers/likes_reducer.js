import { CREATE_LIKE, FETCH_LIKES, REMOVE_LIKE } from '../actions/like_actions';


const LikesReducer = (state = {}, action) => {
  Object.freeze(state);
  // debugger
  switch (action.type) {
    case REMOVE_LIKE:
      const newState = {...state};

      delete newState[action.likeId];
      return newState;
    // case CREATE_LIKE:
    case FETCH_LIKES:
      // debugger
      return action.likes;
    

    default:
      return state;
  }
}

export default LikesReducer;