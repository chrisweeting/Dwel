import React from "react";
import ReactDOM from "react-dom";
import { postUser, postSession, deleteSession } from './util/session_api_util';
import { changeFilter } from './actions/filter_actions';
import { fetchLikes, removeLike } from './util/like_api_util';
import configureStore from './store/store';
import Root from "./components/root";
import { fetchListings, fetchListing } from './util/listing_api_util';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  window.getState = store.getState;
  // window.dispatch = store.dispatch;

  window.fetchListing = fetchListing;
  window.fetchListings = fetchListings;

  window.changeFilter = changeFilter;

  window.fetchLikes = fetchLikes;
  window.removeLike = removeLike;
  // window.signup = postUser
  // window.signin = postSession
  // window.logout = deleteSession
  

  ReactDOM.render(<Root store={store} />, root);
});