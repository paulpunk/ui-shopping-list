import React from "react";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";

class ShareButton extends React.Component {
  render = () => {
    return (
      <Icon
        name="share"
        color="#000"
        hitSlop={{ top: 50, bottom: 10, left: 30, right: 30 }}
        containerStyle={{
          padding: 10
        }}
        onPress={() => this.props.navigation.push("ShareScreen")}
      />
    );
  };
}

export default withNavigation(ShareButton);
