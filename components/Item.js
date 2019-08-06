import LottieView from "lottie-react-native";
import React from "react";
import { Platform, TextInput, View } from "react-native";
import { ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Input from "../components/Input";
import Colors from "../constants/Colors";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = { item: props.item };
  }

  componentDidMount() {
    if (!this.props.item.Checked) {
      this.animation.play(24, 24);
    } else {
      this.animation.play(48, 48);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.item.Checked && !prevState.item.Checked) {
      this.animation.reset();
      this.animation.play(0, 48);
    } else if (!this.state.item.Checked && prevState.item.Checked) {
      this.animation.reset();
      this.animation.play(48, 24);
    } else {
      this.componentDidMount();
    }
  }

  render() {
    onPress = () => {
      var newitem = { ...this.state.item };
      newitem.Checked = !this.state.item.Checked;
      this.setState({ item: newitem });
    };
    onEndEditing = () =>
      this.props.onEndEditing(this.props.item, this.state.item);
    onChangeText = Name => {
      var newitem = { ...this.state.item };
      newitem.Name = Name;
      this.setState({ item: newitem });
    };

    return (
      <View>
        <ListItem
          underlayColor="transparent"
          onPress={onPress}
          leftElement={this.checkBox()}
          containerStyle={{
            backgroundColor: "transparent",
            height: 50
          }}
          title={
            <Input
              value={this.state.item.Name}
              onChangeText={onChangeText}
              onEndEditing={onEndEditing}
            />
          }
          bottomDivider={true}
        />
      </View>
    );
  }

  checkBox() {
    return (
      <LottieView
        style={{ width: 30 }}
        source={Colors(this.props.navigation).checkMark}
        // autoPlay
        loop={false}
        ref={animation => {
          this.animation = animation;
        }}
        onAnimationFinish={() => {
          if (this.state.item.Checked != this.props.item.Checked) {
            this.props.onPress(this.props.item);
          }
        }}
      />
    );
  }
}

export default withNavigation(Item);
