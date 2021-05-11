import { postUser, postSession, deleteSession } from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const logoutCurrentUser = () => ({
  type: REMOVE_CURRENT_USER,

});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
})

export const signup = (user) => (dispatch) => (
  postUser(user).then(user => 
    dispatch(receiveCurrentUser(user))
  ).fail(err => (dispatch(receiveErrors(err.responseJSON))))
);

export const login = (user) => (dispatch) => (
  postSession(user).then(user => 
    dispatch(receiveCurrentUser(user))
  ).fail(err => (dispatch(receiveErrors(err.responseJSON))))
);

export const logout = () => (dispatch) => (
  deleteSession()
    .then(user => dispatch(logoutCurrentUser()))
);
