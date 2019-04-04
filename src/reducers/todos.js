import { GET_TODOS, resultOf } from "../constants";

const initialState = {
  data: null
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case resultOf(GET_TODOS): {
      return {
        ...state,
        data: state.data === null ? action.data : data.concat(action.data)
      };
    }
    default:
      return state;
  }
};

export default todos;
