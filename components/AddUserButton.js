import React from "react";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Colors from "../constants/Colors";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class AddUserButton extends React.Component {
  render() {
    onPress = () => this.props.store.createUser();
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
