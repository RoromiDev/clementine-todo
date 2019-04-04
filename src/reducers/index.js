import { combineReducers } from "redux";
import navigation from './navigation';
import loading from './loading';
import todos from './todos';

const appReducer = combineReducers({
  nav: navigation,
  loading,
  todos
});

export default appReducer;