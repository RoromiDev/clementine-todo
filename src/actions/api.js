import client from "../utils/Axios";
import { GET_TODOS, CREATE_TODO, resultOf, errorOf } from "../constants";

export const getTodos = () => (dispatch) => {
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

export const createTodo = (title = "coucou", body = "coucou", userId = 42) => (dispatch) => {
    const parameters = {
        title,
        body,
        userId
    }
  
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
