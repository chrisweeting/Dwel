import { combineReducers } from 'redux';

// import filters from './filters_reducer';
import ModalReducer from './modal_reducer';

const UiReducer = combineReducers({
  // filters,
  modal: ModalReducer
});

export default UiReducer;
