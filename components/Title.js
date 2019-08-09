import LottieView from "lottie-react-native";
import React from "react";
import { Text, View } from "react-native";
import { withNavigation } from "react-navigation";
import Colors from "../constants/Colors";

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.navigation.getParam("syncstate", "") === "offline") {
      this.state.playing = false;
      return;
    }
    if (!this.state.playing) {
      if (this.props.navigation.getParam("syncstate", "") === "syncing") {
        this.state.playing = true;
        this.animation.reset();
        this.animation.play();
      } else {
        this.animation.play(31, 31);
      }
    }
  }

  onAnimationFinish = () => {
    if (this.state.playing) {
      if (this.props.navigation.getParam("syncstate", "") === "syncing") {
        this.animation.reset();
        this.animation.play();
      } else {
        this.animation.reset();
        this.animation.play(0, 31);
        this.state.playing = false;
      }
    }
  };

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
            color: Colors(this.props.navigation).primary
          }}
        >
          nicelist
        </Text>
        {this.props.navigation.getParam("syncstate", "") === "offline" ? (
          <Text
            style={{
              fontSize: 10,
              color: Colors(this.props.navigation).subtitle,
              marginTop: -2
            }}
          >
            offline
          </Text>
        ) : (
          <LottieView
            style={{ width: 80, marginTop: -15, marginBottom: -15 }}
            source={Colors(this.props.navigation).loading}
            loop={false}
            speed={1.5}
            ref={animation => {
              this.animation = animation;
            }}
            onAnimationFinish={this.onAnimationFinish}
          />
        )}
        {/* <Text style={{ fontSize: 10, color: "#A9A9A9" }}>
          {this.props.navigation.getParam("syncstate", "defaultValue")}
        </Text> */}
      </View>
    );
  };
}

export default withNavigation(Title);
