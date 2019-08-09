import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Colors from "../constants/Colors";

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    onPress = () => {
      this.props.navigation.setParams({ list: this.props.list });
      this.props.navigation.navigate("Main", {
        list: this.props.list.Name
      });
      this.props.navigation.closeDrawer();
    };
    return (
      <View>
        <ListItem
          underlayColor="transparent"
          onPress={onPress}
          containerStyle={{
            backgroundColor: "transparent",
            height: 50
          }}
          titleStyle={{
            color: Colors(this.props.navigation).primary
          }}
          title={this.props.list.Name}
          bottomDivider={true}
        />
      </View>
    );
  }
}

export default withNavigation(List);
