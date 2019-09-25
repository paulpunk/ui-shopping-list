import React from "react";
import { Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Colors from "../constants/Colors";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class BackButton extends React.Component {
  render = () => {
    onPress = () => this.props.onPress();
    return (
      <Icon
        underlayColor="transparent"
        name="chevron-left"
        color={Colors(this.props.store.darkmode).primary}
        hitSlop={{ top: 50, bottom: 10, left: 30, right: 30 }}
        containerStyle={{
          padding: 10
        }}
        onPress={() => this.props.navigation.navigate("Main")}
      />
    );
  };
}

export default withNavigation(BackButton);
