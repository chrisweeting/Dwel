import { combineReducers } from "redux";
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';
import UiReducer from './ui_reducer';

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  entities: EntitiesReducer,
  session: SessionReducer,
  ui: UiReducer,
});

export default RootReducer;