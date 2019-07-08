import React, { Component } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import { Constants } from "expo";
import { CheckBox, Input, ListItem } from "react-native-elements";

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
        {typeof this.props.item === "undefined" ? (
          <ListItem
            leftElement={
              <CheckBox onPress={this.press} checked={this.state.checked} />
            }
            title={
              <Input
                value={this.state.name}
                onChangeText={text => this.setState({ name: text })}
                onSubmitEditing={() => this.props.onCreate(this.state.name)}
                autoFocus
                placeholder={"test"}
                containerStyle={{
                  paddingHorizontal: null,
                }}
                inputContainerStyle={{
                  borderBottomWidth: 0
                }}
                inputStyle={{
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
            }
            bottomDivider={true}
          />
        ) : (
          <ListItem
            leftElement={
              <CheckBox onPress={this.press} checked={this.state.checked} />
            }
            title={this.state.name}
            bottomDivider={true}
          />
        )}
      </View>
    );
  }
}
