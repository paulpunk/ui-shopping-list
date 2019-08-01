import { createStackNavigator } from "react-navigation";
import TodosScreen from "../screens/TodosScreen";
import React from "react";
import SideMenu from "../screens/SideMenu";
import Colors from "../constants/Colors";

const Stack = createStackNavigator(
  {
    Main: {
      screen: TodosScreen
    },
    ShareScreen: {
      screen: SideMenu
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        // elevation: 4,
        shadowOffset: { width: 0, height: 1},
        shadowOpacity: 0.2,
        backgroundColor: Colors(navigation).header,
      }
    })
  }
);

export default Stack;
