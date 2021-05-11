import React from "react";
import ReactDOM from "react-dom";
import { postUser, postSession, deleteSession } from './util/session_api_util';
import configureStore from './store/store';
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // let preloadedState = undefined;
  // if (window.currentUser) {
  //   preloadedState = {
  //     session: {
  //       currentUser: window.currentUser
  //     }
  //   };
  // }
  // const store = configureStore(preloadedState);



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

  // window.getState = store.getState;
  // window.dispatch = store.dispatch;

  // window.signup = postUser
  // window.signin = postSession
  // window.logout = deleteSession

  ReactDOM.render(<Root store={store} />, root);
  // ReactDOM.render(<h1>hello</h1>, root);

});