import LottieView from "lottie-react-native";
import React from "react";
import { Text, View } from "react-native";
import { withNavigation } from "react-navigation";
import Colors from "../constants/Colors";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class SyncStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playing: false
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.syncstate === "offline") {
      this.state.playing = false;
      return;
    }
    if (!this.state.playing) {
      if (this.props.syncstate === "syncing") {
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
      if (this.props.syncstate === "syncing") {
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
      <View>
        {this.props.syncstate === "offline" ? (
          <Text
            style={{
              fontSize: 10,
              color: Colors(this.props.navigation.getParam("darkmode", false)).subtitle,
              marginTop: -2
            }}
          >
            offline
          </Text>
        ) : (
          <LottieView
            style={{ width: 80, marginTop: -15, marginBottom: -15 }}
            source={Colors(this.props.navigation.getParam("darkmode", false)).loading}
            loop={false}
            speed={1.5}
            ref={animation => {
              this.animation = animation;
            }}
            onAnimationFinish={this.onAnimationFinish}
          />
        )}
      </View>
    );
  };
}
export default withNavigation(SyncStatus);
