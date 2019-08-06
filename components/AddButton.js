import { Fab } from "native-base";
import React from "react";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Colors from "../constants/Colors";

class AddButton extends React.Component {
  render() {
    onPress = () => this.props.onPress();
    return (
      <Fab
        direction="up"
        containerStyle={{}}
        style={{ backgroundColor: Colors(this.props.navigation).header }}
        position="bottomRight"
        onPress={onPress}
      >
        <Icon
          name="add"
          size={30}
          color={Colors(this.props.navigation).primary}
        />
      </Fab>
    );
  }
}

export default withNavigation(AddButton);
