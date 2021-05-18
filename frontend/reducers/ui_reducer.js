import { combineReducers } from 'redux';

import FiltersReducer from './filter_reducer';
import ModalReducer from './modal_reducer';

const UiReducer = combineReducers({
  filters: FiltersReducer,
  modal: ModalReducer
});

export default UiReducer;
