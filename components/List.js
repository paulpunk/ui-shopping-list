import React from "react";
import { Text, View, StyleSheet, Platform, TextInput } from "react-native";
import { Constants } from "expo";
import { Input, ListItem } from "react-native-elements";
import LottieView from "lottie-react-native";
import { Animated } from "react-native";
import Colors from "../constants/Colors";
import { withNavigation } from "react-navigation";

const HEIGTH = 20;

class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    onPress = () => {
      this.props.navigation.setParams({ list: this.props.list });
      this.props.navigation.navigate("Main", {
        list: this.props.list.name
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
          title={this.props.list.name}
          bottomDivider={true}
        />
      </View>
    );
  }
}

export default withNavigation(List);
