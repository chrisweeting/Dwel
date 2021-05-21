import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import ListingsReducer from "./listings_reducer";
import LikesReducer from "./likes_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  listings: ListingsReducer,
  likes: LikesReducer,
});

export default EntitiesReducer;