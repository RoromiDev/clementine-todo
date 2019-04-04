import { createStore, applyMiddleware } from "redux";
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from "react-navigation-redux-helpers";
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import AppNavigator from "../navigators/main";
import appReducer from "../reducers";

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
);
const Root = reduxifyNavigator(AppNavigator, "root");

const store = createStore(appReducer, applyMiddleware(thunk, middleware, logger));

export { store, Root };
