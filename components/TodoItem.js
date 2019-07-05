import React, { Component } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { View, CheckBox, Body } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import todo from "../types/todo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 8
  },

  row: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16
  }
});

const propTypes = {
  todo: todo.isRequired
};

class TodoItem extends Component {
  constructor(props) {
    super(props);
    const { title, completed, createdAt } = this.props.todo;
    this.state = {
      title,
      completed,
      createdAt
    };
  }

  onTodoItemToggle = (todo, propAction) => {
    propAction({
      ...todo,
      completed: !todo.completed
    });
  };

  onSubmit = () => {
    if (this.state.title.length > 0) this.props.onAdd(this.state);
    return null;
  };

  render() {
    const { onBlur } = this.props;

    return (
      <View style={styles.row}>
        <View
          style={{
            flex: 1,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
            paddingRight: 10,
            paddingVertical: 5
          }}
        >
          <TouchableOpacity
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row"
            }}
          >
            <CheckBox checked={this.props.todo.completed} />
            <Body
              style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "flex-start",
                paddingLeft: 25
              }}
            >
              {this.props.todo.title === "" ? (
                <TextInput
                  style={{ width: "90%" }}
                  placeholder="What needs to be done?"
                  autoFocus
                  underLineColorAndroid="transparent"
                  underlineColor="transparent"
                  blurOnSubmit
                  onSubmitEditing={this.onSubmit}
                  onChangeText={changedTitle =>
                    this.setState("todo.title", changedTitle)
                  }
                  value={this.props.todo.title}
                  autoCorrect={false}
                  autoCapitalize="none"
                  onBlur={onBlur}
                />
              ) : (
                <Text
                  style={{
                    color: this.props.todo.completed ? "grey" : "black",
                    textDecorationLine: this.props.todo.completed ? "line-through" : "none"
                  }}
                >
                  {this.props.todo.title}
                </Text>
              )}
            </Body>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingLeft: 25, paddingRight: 15 }}>
            <Ionicons
              name="ios-trash"
              color={`${this.props.todo.title.length > 0 ? "black" : "grey"}`}
              size={23}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

TodoItem.propTypes = propTypes;

export default TodoItem;
