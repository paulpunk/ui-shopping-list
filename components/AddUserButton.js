import React from "react";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Colors from "../constants/Colors";

class AddUserButton extends React.Component {
  render() {
    onPress = this.props.navigation.getParam("onAddUser", () => {});
    return (
      <Icon
        underlayColor="transparent"
        name="add"
        color={Colors(this.props.navigation).primary}
        hitSlop={{ top: 50, bottom: 10, left: 30, right: 30 }}
        containerStyle={{
          padding: 10
        }}
        onPress={onPress}
      />
    );
  }
}

export default withNavigation(AddUserButton);
