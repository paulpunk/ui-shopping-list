import { inject, observer } from "mobx-react";
import { Fab } from "native-base";
import React from "react";
import { Icon } from "react-native-elements";
import Colors from "../constants/Colors";

@inject("store")
@observer
class AddButton extends React.Component {
  render() {
    onPress = () => this.props.onPress();
    return (
      <Fab
        direction="up"
        containerStyle={{}}
        style={{ backgroundColor: Colors(this.props.store.darkmode).header }}
        position="bottomRight"
        onPress={onPress}
      >
        <Icon
          name="add"
          size={30}
          color={Colors(this.props.store.darkmode).primary}
        />
      </Fab>
    );
  }
}

export default AddButton;
