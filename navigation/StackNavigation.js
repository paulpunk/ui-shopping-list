import { createStackNavigator, createAppContainer } from "react-navigation";
import TodosScreen from "../screens/TodosScreen";
import React from "react";
import SideMenu from "../screens/SideMenu";

const Stack = createStackNavigator(
  {
    TodosScreen: {
      screen: TodosScreen
    },
    ShareScreen: {
      screen: SideMenu
    }
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        // shadowOpacity: 1
        backgroundColor: "#F9F9F9"
      }
    }
  }
);

export default Stack;
