import React from "react";
import PropTypes from "prop-types";
import { Fab } from "native-base";
import { Icon } from "react-native-elements";
import Colors from "../constants/Colors";
import { withNavigation } from "react-navigation";

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
