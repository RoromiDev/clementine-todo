import { createStackNavigator } from "react-navigation";
import MainScreen from "../screens/Main";
import TodoScreen from "../screens/Todo";

const AppRouteConfigs = {
  Main: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
      title: "Home"
    })
  },
  Todo: {
    screen: TodoScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
      title: "Home"
    })
  }
};

const AppNavigator = createStackNavigator(AppRouteConfigs);

export default AppNavigator;
