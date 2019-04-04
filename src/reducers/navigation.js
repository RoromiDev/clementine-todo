import { createNavigationReducer } from "react-navigation-redux-helpers";
import AppNavigator from "../navigators/main";

const navigation = createNavigationReducer(AppNavigator);

export default navigation;
