import { 
  FETCH_SEARCHES, 
  UPDATE_SEARCH, 
  CREATE_SEARCH,
  REMOVE_SEARCH
} from '../actions/search_actions';


const SearchReducer = (state = {}, action) => {
  Object.freeze(state);
  const newState = { ...state };
  switch (action.type) {
    case FETCH_SEARCHES:
      return action.searches;
    case UPDATE_SEARCH:
      return Object.assign(
        {},
        newState,
        {
          [action.id]: {
            max_price: action.maxPrice,
            max_sqft: action.maxSqft,
            min_baths: action.minBaths,
            min_beds: action.minBeds,
            min_price: action.minPrice,
            query: action.query
          }
        }
      );
    case REMOVE_SEARCH:
      delete newState[action.id];
      return newState;
    case CREATE_SEARCH:
      debugger
      return Object.assign(
        {},
        newState,
        { [action.search.search_record.id]: action.search.search_record }
      );
    default:
      return state;
  }
};

export default SearchReducer;