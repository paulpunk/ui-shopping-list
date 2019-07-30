import React from "react";
import { Text, View, StyleSheet, Platform, TextInput } from "react-native";
import { Constants } from "expo";
import { Input, ListItem } from "react-native-elements";
import LottieView from "lottie-react-native";
import { Animated } from "react-native";
import Colors from "../constants/Colors";
import { withNavigation } from "react-navigation";

const HEIGTH = 20;

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
    onSubmitEditing = () =>
      this.props.onSubmit(this.props.item, this.state.item);
    onChangeText = Name => {
      var newitem = { ...this.state.item };
      newitem.Name = Name;
      this.setState({ item: newitem });
    };

    return (
      <View>
        <ListItem
          onPress={onPress}
          leftElement={this.checkBox()}
          containerStyle={{
            backgroundColor: "transparent",
            height: 50
          }}
          title={this.input({
            onChangeText: onChangeText,
            // onSubmitEditing: onSubmitEditing,
            onEndEditing: onEndEditing
          })}
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

  input(input) {
    return (
      <TextInput
        {...input}
        autoFocus={this.state.item.Name === ""}
        value={this.state.item.Name}
        placeholder={"test"}
        spellCheck={false}
        keyboardAppearance={Colors(this.props.navigation).keyboardAppearance}
        color={Colors(this.props.navigation).primary}
        minHeight={20}
        {...Platform.select({
          ios: {
            fontSize: 17
          },
          default: {
            fontSize: 16
          }
        })}
      />
    );
  }
}

export default withNavigation(Item);
