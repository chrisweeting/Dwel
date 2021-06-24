import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';
import { CREATE_LIKE, FETCH_LIKES, REMOVE_LIKE } from '../actions/like_actions';
import {
  FETCH_SEARCHES,
  UPDATE_SEARCH,
  CREATE_SEARCH,
  REMOVE_SEARCH
} from '../actions/search_actions';

const _nullState = {
  id: null,
  email: null,
  liked_listings: [],
  searches: [],
  loggedIn: false
};

const SessionReducer = (state = _nullState, action) => {
  Object.freeze(state);
  let nextState = {...state};

  switch (action.type) {
    case UPDATE_SEARCH:
      nextState.searches = nextState.searches.filter(search => search.id !== action.search.search_record.id);
      nextState.searches.push(action.search.search_record);
      return nextState;
    case FETCH_SEARCHES:
      nextState.searches = action.searches;
      return nextState;

    case REMOVE_SEARCH:
      nextState.searches = nextState.searches.filter(search => search.id !== action.searchId[0]);
      return nextState;
    case CREATE_SEARCH:
      nextState.searches.push(action.search.search_record);
      return nextState;
    case REMOVE_LIKE:
      let filtered = nextState.liked_listings.filter(listing => listing !== action.listingId[0]);
      nextState.liked_listings = filtered;
      return nextState;
    case CREATE_LIKE:
      if (!nextState.liked_listings.includes(action.listing_id)) {
        nextState.liked_listings.push(action.listing_id);
      }
      return nextState;
    case RECEIVE_CURRENT_USER:
      let listingIds = action.currentUser.liked_listings.map(listing => listing.id);
      nextState = {
        id: action.currentUser.id,
        email: action.currentUser.email,
        liked_listings: listingIds,
        searches: action.currentUser.search_records,
        loggedIn: true
      };
      return nextState;
    case REMOVE_CURRENT_USER:
      return _nullState;
    default:
      return state;
  }
};


export default SessionReducer;