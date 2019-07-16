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
    if (!this.props.item.checked) {
      this.animation.play(24, 24);
    } else {
      this.animation.play(48, 48);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.item.checked && !prevProps.item.checked) {
      this.animation.reset();
      this.animation.play(0, 48);
    } else if (!this.props.item.checked && prevProps.item.checked) {
      this.animation.play(48, 24);
    }
  }

  render() {
    onPress = () => this.props.onPress(this.props.item);
    onEndEditing = () =>
      this.props.onEndEditing(this.props.item, this.state.item);
    onSubmitEditing = () =>
      this.props.onSubmit(this.props.item, this.state.item);
    onChangeText = name => {
      var newitem = { ...this.state.item };
      newitem.name = name;
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
            onSubmitEditing: onSubmitEditing,
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
        source={require("./animation.json")}
        // autoPlay
        loop={false}
        ref={animation => {
          this.animation = animation;
        }}
      />
    );
  }

  input(input) {
    return (
      <Input
        {...input}
        autoFocus={this.state.item.name === ""}
        value={this.state.item.name}
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
