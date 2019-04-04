import {
  GET_TODOS,
  UPDATE_TODO,
  CREATE_TODO,
  SHOW_ADD_POPUP,
  HIDE_ADD_POPUP,
  DELETE_TODO,
  resultOf
} from "../constants";

const initialState = {
  data: {},
  showTodoPopup: false,
  modifyTodoPopup: null
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case resultOf(GET_TODOS): {
      const tmpData = { ...state.data };

      for (let i = 0; i < action.data.length; i++) {
        tmpData[action.data[i].id] = action.data[i];
      }
      return {
        ...state,
        data: tmpData
      };
    }
    case resultOf(CREATE_TODO): {
      const tmpData = { ...state.data };

      tmpData[action.data.id] = action.data;
      return {
        ...state,
        data: tmpData
      };
    }
    case resultOf(UPDATE_TODO): {
      const tmpData = { ...state.data };

      tmpData[action.data.id] = {
        ...Object.assign(tmpData[action.data.id], action.data)
      };
      return {
        ...state,
        data: tmpData
      };
    }
    case resultOf(DELETE_TODO): {
      const tmpData = { ...state.data };

      delete tmpData[action.data];

      return {
        ...state,
        data: tmpData
      };
    }
    case SHOW_ADD_POPUP: {
      return {
        ...state,
        showTodoPopup: true
      };
    }
    case HIDE_ADD_POPUP: {
      return {
        ...state,
        showTodoPopup: false
      };
    }
    default:
      return state;
  }
};

export default todos;
