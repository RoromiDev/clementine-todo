import client from "../utils/Axios";
import {
  GET_TODOS,
  CREATE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
  resultOf,
  errorOf
} from "../constants";

export const getTodos = () => dispatch => {
  dispatch({ type: GET_TODOS });
  client
    .get("/todos")
    .then(response => {
      dispatch({ type: resultOf(GET_TODOS), data: response.data });
    })
    .catch(error => {
      dispatch({ type: errorOf(GET_TODOS), data: error });
    });
};

export const createTodo = (title, userId = 42) => dispatch => {
  const parameters = {
    title,
    userId
  };

  dispatch({ type: CREATE_TODO });
  client
    .post("/todos", parameters)
    .then(response => {
      dispatch({ type: resultOf(CREATE_TODO), data: response.data });
    })
    .catch(error => {
      dispatch({ type: errorOf(CREATE_TODO), data: error });
    });
};

export const deleteTodo = (id) => dispatch => {
  dispatch({ type: DELETE_TODO });
  client
    .delete(`/todos/${id}`)
    .then(response => {
      dispatch({ type: resultOf(DELETE_TODO), data: id });
    })
    .catch(error => {
      dispatch({ type: errorOf(DELETE_TODO), data: error });
    });
};

export const updateTodo = (newParameters, id) => dispatch => {
  dispatch({ type: UPDATE_TODO });
  client
    .put(`/todos/${id}`, { ...newParameters })
    .then(response => {
      dispatch({ type: resultOf(UPDATE_TODO), data: response.data });
    })
    .catch(error => {
      dispatch({ type: errorOf(UPDATE_TODO), data: error });
    });
};
