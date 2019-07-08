import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Constants } from "expo";
import { CheckBox,Input } from "react-native-elements";
import ListItem from "./ListItem";

export default class ShoppingListItem extends Component {
  constructor(props) {
    super(props);
    const { title, completed, createdAt } = this.props.todo;
    this.state = {
      title,
      completed,
      createdAt
    };
  }

  state = {
    checked: false
  };
  press = () => {
    this.setState(state => ({
      checked: !state.checked
    }));
  };

  render() {
    return (
      <View>
        <ListItem
          leftElement={
            <CheckBox onPress={this.press} checked={this.state.checked} />
          }
          title={"test"}
          // input={{ placeholder: "test", inputStyle: { textAlign: "left" } }}
          bottomDivider={true}
        />
        <ListItem
          leftElement={
            <CheckBox onPress={this.press} checked={this.state.checked} />
          }
          input={{ placeholder: "test", inputStyle: { textAlign: "left" } }}
          bottomDivider={true}
        />
      </View>
    );
  }
}
