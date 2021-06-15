import { fetchListings } from './listing_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const UPDATE_FILTERS = 'UPDATE_FILTERS';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';


export const changeFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const changeFilters = (filters) => ({
  type: UPDATE_FILTERS,
  filters,
});

export const removeFilters = (filters) => ({
  type: CLEAR_FILTERS,
  filters,
});

export const updateFilter = (filter, value) => (dispatch, getState) => {

  dispatch(changeFilter(filter, value));
  return fetchListings(getState().ui.filters)(dispatch);
};

export const updateFilters = (filters) => (dispatch, getState) => {

  dispatch(changeFilters(filters));
  return fetchListings(getState().ui.filters)(dispatch);
};

export const clearFilters = (filters) => (dispatch, getState) => {

  dispatch(removeFilters(filters));
  return fetchListings(getState().ui.filters)(dispatch);
};