import { createDrawerNavigator, createAppContainer } from "react-navigation";
import StackNavigation from "./StackNavigation";
import SideMenu from "../screens/SideMenu";


const AppNavigator = createDrawerNavigator(
  {
    StackNavigation: {
      screen: StackNavigation
    }
  },
  {
    hideStatusBar:true,
    contentComponent: SideMenu
    // drawerLockMode: 'locked-closed'
  }
);

export default AppNavigator;
