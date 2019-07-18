import * as Font from "expo-font";
import React from "react";
import { StatusBar, View, Text } from "react-native";
import { withNavigation } from "react-navigation";

class Title extends React.Component {
  render = () => {
    return (
      <View style={{ alignItems:"center" }} >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
          nicelist
        </Text>
        <Text style={{fontSize: 11, color: "#A9A9A9" }}>Login to synch</Text>
      </View>
    );
  };
}

export default withNavigation(Title);
