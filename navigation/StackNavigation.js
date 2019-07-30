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
        // shadowOpacity: 1
        backgroundColor: Colors(navigation).header
      }
    })
  }
);

export default Stack;
