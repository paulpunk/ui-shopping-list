import React from "react";
import { Text, View, StyleSheet, Platform, TextInput } from "react-native";
import { Constants } from "expo";
import { Input, ListItem } from "react-native-elements";
import LottieView from "lottie-react-native";
import { Animated } from "react-native";
import Colors from "../constants/Colors";
import { withNavigation } from "react-navigation";

const HEIGTH = 20;

class SharedUser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    onPress = () => {};
    return (
      <View>
        <ListItem
          underlayColor="transparent"
          onPress={onPress}
          containerStyle={{
            backgroundColor: "transparent",
            height: 50
          }}
          title={this.props.user.id}
          bottomDivider={true}
        />
      </View>
    );
  }
}

export default withNavigation(SharedUser);
