import React from "react";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";

class MenuButton extends React.Component {
  render = () => {
    return (
      <Icon
        type="ionicon"
        name="ios-options"
        color="#000"
        hitSlop={{top: 50, bottom: 10, left: 30, right: 30}}
        onPress={() => this.props.navigation.openDrawer()}
        containerStyle={{
            padding: 10,
          }}
      />
    );
  };
}

export default withNavigation(MenuButton);