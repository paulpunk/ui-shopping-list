import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";
import { withNavigation } from "react-navigation";

class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { playing: false };
  }

  shouldComponentUpdate(prevProps) {
    return this.props.Checked !== prevProps.Checked;
  }

  componentDidMount() {
    if (!this.props.Checked) {
      this.animation.play(24, 24);
    } else {
      this.animation.play(48, 48);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.state.playing) {
      this.animation.reset();
    }
    if (this.props.Checked && !prevProps.Checked) {
      this.animation.play(0, 48);
      this.state.playing = true;
    } else if (!this.props.Checked && prevProps.Checked) {
      this.animation.play(48, 24);
      this.state.playing = true;
    } else {
      this.componentDidMount();
    }
  }

  render() {
    onAnimationFinish = () => {
      if (this.state.playing) {
        this.props.onSubmit();
      }
      this.state.playing = false;
    };
    return (
      <View>
        <LottieView
          style={{ width: 30 }}
          source={Colors(this.props.navigation).checkMark}
          loop={false}
          ref={animation => {
            this.animation = animation;
          }}
          onAnimationFinish={onAnimationFinish}
        />
      </View>
    );
  }
}

export default withNavigation(Checkbox);
