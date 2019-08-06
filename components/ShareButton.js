import React from "react";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Colors from "../constants/Colors";

class ShareButton extends React.Component {
  render = () => {
    return (
      <Icon
        underlayColor="transparent"
        name="share"
        color={Colors(this.props.navigation).primary}
        hitSlop={{ top: 50, bottom: 10, left: 30, right: 30 }}
        containerStyle={{
          padding: 10
        }}
        onPress={() =>
          this.props.navigation.navigate(
            "ShareScreen",
            this.props.navigation.state.params
          )
        }
      />
    );
  };
}

export default withNavigation(ShareButton);
