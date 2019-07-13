import React from "react";
import {
  ScrollView,
  StyleSheet,
  FlatList,
  StatusBar,
  Platform,
  View
} from "react-native";

import COLORS from "../constants/Colors";
import AddTodo from "../components/AddTodo";
import AddTodoButton from "../components/AddTodoButton";
import TodoItem from "../components/TodoItem";
import ShoppingListItem from "../components/ShoppingListItem";

const styles = StyleSheet.create({
  row: {
    top: 15,
    flex: 1,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: 0
  }
});

export default class TodosScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [
        {
          _id: "1",
          name: "apfel",
          createdAt: 12,
          checked: true
        },
        {
          _id: "2",
          name: "birne",
          createdAt: 12,
          checked: false
        }
      ]
    };
  }

  render() {
    const isAndroid = Platform.OS === "android";

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <FlatList
            data={this.state.todos}
            keyExtractor={item => item.name}
            renderItem={({ item: item }) => (
              <ShoppingListItem
                item={item}
                onCreate={name => this.create(name)}
                onEndEditing={item => this.endEditing(item)}
              />
            )}
          />
        </ScrollView>
        <AddTodoButton onPress={() => this.addItem()} />
      </View>
    );
  }

  addItem() {
    newitem = {
      _id: undefined,
      name: "",
      completed: undefined,
      createdAt: undefined
    };
    this.setState({ todos: this.state.todos.concat(newitem) });
  }

  create(name) {
    this.setState({ newitem: undefined });
  }

  endEditing(item) {
    if (item.name === "") {
      this.setState(prevState => ({
        todos: prevState.todos.filter(el => el != item),
      }));
    }
  }
}
