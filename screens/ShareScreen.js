import React from "react";
import { View, Text } from "react-native";
import { Input, ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";

class SideMenu extends React.Component {

  constructor(props) {
    super(props);
    
  }


  state = {
    darkmode: false
  };
  render() {
    alert(this.props.navigation.getParam("darkmode", false));
    return (
      <View style={{ flex: 1 }}>
        <ListItem title="Darkmode" switch={{ value: this.state.darkmode }} />
      </View>
    );
  }
}

export default withNavigation(SideMenu);
