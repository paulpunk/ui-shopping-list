import React from "react";
import { View, Text } from "react-native";
import { Input, ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";

class SideMenu extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListItem
          title="Darkmode"
          switch={{
            value: this.props.navigation.getParam("darkmode", false),
            onValueChange: value => {
              this.props.navigation.setParams({ darkmode: value });
              this.props.navigation.navigate("Main", {
                darkmode: value
              });
            }
          }}
        />
      </View>
    );
  }
}

export default withNavigation(SideMenu);
