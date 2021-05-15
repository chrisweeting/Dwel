import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ListingsReducer from "./listings_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  listings: ListingsReducer,
});

export default EntitiesReducer;