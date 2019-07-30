import { createStackNavigator } from "react-navigation";
import TodosScreen from "../screens/TodosScreen";
import React from "react";
import SideMenu from "../screens/SideMenu";
import Colors from "../constants/Colors";
import DrawerNavigation from "./DrawerNavigation";

const Stack = createStackNavigator(
  {
    DrawerNavigation
  },
  {
    headerMode: 'none',
  }
);

export default Stack;
