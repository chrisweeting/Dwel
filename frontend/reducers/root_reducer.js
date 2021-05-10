import { combineReducers } from "redux";
import ErrorsReducer from './errors_reducer';
import EntitiesReducer from './entities_reducer';
import SessionReducer from './session_reducer';

const RootReducer = combineReducers({
  errors: ErrorsReducer,
  entities: EntitiesReducer,
  session: SessionReducer,
});

export default RootReducer;