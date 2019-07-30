import {
  createDrawerNavigator,
  withNavigation,
  createAppContainer
} from "react-navigation";
import SideMenu from "../screens/SideMenu";
import StackNavigation from "./StackNavigation";

const AppNavigator = createDrawerNavigator(
  {
    Stack: {
      screen: StackNavigation
    }
  },
  {
    hideStatusBar: true,
    contentComponent: SideMenu,
    initialRouteName: "Stack",
    // drawerLockMode: 'locked-closed'
  }
);

export default withNavigation(AppNavigator);
