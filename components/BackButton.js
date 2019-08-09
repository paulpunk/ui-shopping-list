import React from "react";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Colors from "../constants/Colors";

class BackButton extends React.Component {
  render = () => {
    onPress = () => this.props.onPress();
    return (
      <Icon
        underlayColor="transparent"
        name="chevron-left"
        color={Colors(this.props.navigation).primary}
        hitSlop={{ top: 50, bottom: 10, left: 30, right: 30 }}
        containerStyle={{
          padding: 10
        }}
        onPress={() =>
          this.props.navigation.navigate(
            "Main",
            this.props.navigation.state.params
          )
        }
      />
    );
  };
}

export default withNavigation(BackButton);
