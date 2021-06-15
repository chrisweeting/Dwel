import { UPDATE_FILTER, UPDATE_FILTERS, CLEAR_FILTERS } from '../actions/filter_actions';
import { FETCH_SEARCH } from '../actions/search_actions';

const defaultFilters = Object.freeze({
  // bounds: {},
  minBeds: 0,
  minBaths: 0,
  minSqft: 500,
  maxSqft: 7000,
  minPrice: 50000,
  maxPrice: 1000000000,
  query: '' ,
});

const FiltersReducer = (state = defaultFilters, action) => {
  Object.freeze(state);
  switch (action.type) {
    case CLEAR_FILTERS:
      return defaultFilters;
    case FETCH_SEARCH:
      return action.search;
    case UPDATE_FILTER:
      return Object.assign({}, state, { [action.filter]: action.value });
    case UPDATE_FILTERS:
      return Object.assign({}, state, { ...action.filters });
    default:
      return state;
  }
};

export default FiltersReducer;