import React, { Component } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
import { CheckBox, Input, ListItem } from "react-native-elements";

const HEIGTH = 20;

export default class ShoppingListItem extends Component {
  constructor(props) {
    super(props);

    this.state.name = typeof props.item !== "undefined" ? props.item.name : "";
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
        {typeof this.props.item === "undefined"
          ? this.newItem()
          : this.existingItem()}
      </View>
    );
  }

  newItem() {
    onChangeText = text => this.setState({ name: text });
    onSubmitEditing = () => this.props.onCreate(this.state.name);
    onEndEditing = () => this.props.onEndEditing();

    return (
      <ListItem
        leftElement={
          <CheckBox  containerStyle={{ margin: 0, padding: 0 }} disabled />
        }
        title={this.input({
          onChangeText: onChangeText,
          onSubmitEditing: onSubmitEditing,
          onEndEditing: onEndEditing,
          autoFocus: true
        })}
        bottomDivider={true}
      />
    );
  }

  existingItem() {
    return (
      <ListItem
        onPress={this.press}
        chevron={false}
        leftElement={
          <CheckBox
            disabled
            containerStyle={{ margin: 0, padding: 0 }}
            checked={this.state.checked}
          />
        }
        title={this.input()}
        bottomDivider={true}
      />
    );
  }

  input(input) {
    return (
      <Input
        {...input}
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
