import * as SearchApiUtil from '../util/search_api_util';

export const FETCH_SEARCHES = 'FETCH_SEARCHES';
export const FETCH_SEARCH = 'FETCH_SEARCH';
export const UPDATE_SEARCH = 'UPDATE_SEARCH';
export const CREATE_SEARCH = 'CREATE_SEARCH';
export const REMOVE_SEARCH = 'REMOVE_SEARCH';

const getSearches = (searches) => ({
  type: FETCH_SEARCHES,
  searches,
});

const getSearch = (search) => ({
  type: FETCH_SEARCH,
  search,
});

const editSearch = (search) => ({
  type: UPDATE_SEARCH,
  search,
});

const addSearch = (search) => ({
  type: CREATE_SEARCH,
  search,
});

const deleteSearch = (searchId) => ({
  type: REMOVE_SEARCH,
  searchId,
});

export const fetchSearches = () => (dispatch) => {
  return SearchApiUtil.fetchSearches().then((searches) => {
    return dispatch(getSearches(searches));
  });
};

export const fetchSearch = () => (dispatch) => {
  return SearchApiUtil.fetchSearch().then((search) => {
    return dispatch(getSearch(search));
  });
};

export const createSearch = (search) => dispatch => (
  SearchApiUtil.addSearch(search).then(search => (
    dispatch(addSearch(search))
  ))
);

export const updateSearch = (search) => dispatch => (
  SearchApiUtil.updateSearch(search).then(search => (
    dispatch(editSearch(search))
  ))
);

export const removeSearch = (searchId) => dispatch => (
  SearchApiUtil.removeSearch(searchId).then(search => (
    dispatch(deleteSearch(search))
  ))
);