import { SHOW_ADD_POPUP, HIDE_ADD_POPUP } from "../constants";

export const showAddPopup = () => dispatch => {
    dispatch({type: SHOW_ADD_POPUP});
};

export const hideAddPopup = () => dispatch => {
    dispatch({type: HIDE_ADD_POPUP});
};
