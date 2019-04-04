import { NavigationActions } from "react-navigation";

export const changePage = (routeName, id) => dispatch => {
  dispatch(
    NavigationActions.navigate({
      routeName,
      params: {
        id
      }
    })
  );
};

export const goBack = () => dispatch => {
  dispatch(NavigationActions.back());
};
