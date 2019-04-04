import {
  GET_TODOS,
  CREATE_TODO,
  UPDATE_TODO,
  resultOf,
  errorOf
} from "../constants";

const initialState = {
  getTodos: false,
  createTodo: false,
  updateTodo: false
};

const loading = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS: {
      return {
        ...state,
        getTodos: true
      };
    }
    case resultOf(GET_TODOS):
    case errorOf(GET_TODOS): {
      return {
        ...state,
        getTodos: false
      };
    }
    case CREATE_TODO: {
      return {
        ...state,
        createTodo: true
      };
    }
    case resultOf(CREATE_TODO):
    case errorOf(CREATE_TODO): {
      return {
        ...state,
        createTodo: false
      };
    }
    case UPDATE_TODO: {
      return {
        ...state,
        updateTodo: true
      };
    }
    case resultOf(UPDATE_TODO):
    case errorOf(UPDATE_TODO): {
      return {
        ...state,
        updateTodo: false
      };
    }
    default:
      return state;
  }
};

export default loading;
