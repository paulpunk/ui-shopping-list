import * as Font from "expo-font";
import React from "react";
import { StatusBar, View, Text } from "react-native";
import { withNavigation } from "react-navigation";
import LottieView from "lottie-react-native";
import Colors from "../constants/Colors";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class ShareTitle extends React.Component {
  render = () => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          height: 40,
          marginTop: 10
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: Colors(this.props.navigation.getParam("darkmode", false)).primary
          }}
        >
          share
        </Text>
        {/* <LottieView
          style={{ width: 80, marginTop: -15, marginBottom: -15 }}
          source={require("../animation/loading.json")}
          loop={this.props.navigation.getParam("syncstate", "") === "syncing"}
          speed={1.5}
          ref={animation => {
            this.animation = animation;
          }}
          onAnimationFinish={this.onAnimationFinish}
        /> */}
        {/* <Text style={{ fontSize: 10, color: "#A9A9A9" }}>
          {this.props.navigation.getParam("syncstate", "defaultValue")}
        </Text> */}
      </View>
    );
  };
}

export default withNavigation(ShareTitle);
