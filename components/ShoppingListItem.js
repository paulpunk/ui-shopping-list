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

    this.state.name = props.item.name;
    this.state.checked = props.item.checked;
  }

  state = {
    checked: false
  };
  press = () => {
    this.setState(state => ({
      checked: !state.checked
    }));
  };

  componentDidMount() {
    if (!this.state.checked) {
      this.animation.play(16, 16);
    } else {
      this.animation.play(40, 40);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.checked && !prevState.checked) {
      this.animation.play(0, 40);
    } else if (!this.state.checked && prevState.checked) {
      this.animation.play(40, 16);
    }
  }

  render() {
    onChangeText = name => this.setState({ name: text });
    onSubmitEditing = () => this.props.onCreate(this.state.name);
    onEndEditing = () => this.props.onEndEditing(this.props.item);

    return (
      <View>
        <ListItem
          onPress={this.press}
          leftElement={this.checkBox()}
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
        autoFocus={this.state.name === ""}
        value={this.state.name}
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
