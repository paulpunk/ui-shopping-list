import { createStackNavigator, createAppContainer } from "react-navigation";
import RootComponent from "./RootComponent";
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
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     shadowOpacity: 1
    //   }
    // }
  }
);

export default Stack;
