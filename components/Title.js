import * as Font from "expo-font";
import React from "react";
import { StatusBar, View, Text } from "react-native";
import { withNavigation } from "react-navigation";
import LottieView from "lottie-react-native";

class Title extends React.Component {
  componentDidUpdate(prevProps, prevState) {
    if (this.props.navigation.getParam("syncstate", "") === "syncing") {
      this.played = false;
      this.animation.reset();
      this.animation.play();
      this.onAnimationFinish = () => {
        if(!this.played){
          this.played = true;
          this.animation.play(0, 31);
        }
        
      };
    }
  }

  render = () => {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          height: 40,
          marginTop: 5
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
          nicelist
        </Text>
        <LottieView
          style={{ width: 80, marginTop: -15, marginBottom: -15 }}
          source={require("../animation/loading.json")}
          loop={this.props.navigation.getParam("syncstate", "") === "syncing"}
          ref={animation => {
            this.animation = animation;
          }}
          onAnimationFinish={this.onAnimationFinish}
        />
        {/* <Text style={{ fontSize: 10, color: "#A9A9A9" }}>
          {this.props.navigation.getParam("syncstate", "defaultValue")}
        </Text> */}
      </View>
    );
  };
}

export default withNavigation(Title);
