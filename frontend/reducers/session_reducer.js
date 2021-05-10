import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/session_actions';

const _nullState = {id: null};

const SessionReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {id: action.currentUser.id};
    case REMOVE_CURRENT_USER:
      return _nullState;
    default:
      return state;
  }
};


export default SessionReducer;