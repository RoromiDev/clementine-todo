import { createStackNavigator } from "react-navigation";
import MainScreen from "../screens/Main";

const AppRouteConfigs = {
  Main: {
    screen: MainScreen,
    navigationOptions: ({ navigation }) => ({
      header: null,
      title: "Home"
    })
  }
};

const AppNavigator = createStackNavigator(AppRouteConfigs);

export default AppNavigator;
