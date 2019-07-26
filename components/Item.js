import React, { Component } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
import { Input, ListItem } from "react-native-elements";
import LottieView from "lottie-react-native";
import { Animated } from "react-native";

const HEIGTH = 20;

export default class ShoppingListItem extends Component {
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
            backgroundColor: "#fff"
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
        source={require("../animation/animation.json")}
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
      <Input
        {...input}
        autoFocus={this.state.item.Name === ""}
        value={this.state.item.Name}
        placeholder={"test"}
        containerStyle={{
          paddingHorizontal: null
        }}
        inputContainerStyle={{
          borderBottomWidth: 0
        }}
        inputStyle={{
          minHeight: 20,
          ...Platform.select({
            ios: {
              fontSize: 17
            },
            default: {
              fontSize: 16
            }
          })
        }}
      />
    );
  }
}
