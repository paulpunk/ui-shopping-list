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
          _id: 1,
          name: "apfel",
          createdAt: 12,
          checked: true
        },
        {
          _id: 2,
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
            keyExtractor={item => item._id.toString()}
            renderItem={({ item: item }) => (
              <ShoppingListItem
                item={item}
                onSubmit={(previtem, item) => this.onSubmit(previtem, item)}
                onEndEditing={(previtem, item) => this.onSubmit(previtem, item)}
                onPress={item => this.onPress(item)}
              />
            )}
          />
        </ScrollView>
        <AddTodoButton onPress={() => this.addItem()} />
      </View>
    );
  }

  addItem() {
    this.setState({
      todos: this.state.todos.concat({
        _id: Math.max(...this.state.todos.map(o => o._id), 0) + 1,
        name: "",
        completed: undefined,
        createdAt: undefined
      })
    });
  }

  onPress(newitem) {
    this.setState(prevState => ({
      todos: prevState.todos.map(item => {
        if (item == newitem) {
          return { ...item, checked: !item.checked };
        } else {
          return item;
        }
      })
    }));
  }

  onSubmit(previtem, item) {
    if (item.name === "") {
      this.remove(previtem);
    } else if (previtem.name !== item.name) {
      this.update(previtem, item);
    }
  }

  remove(item) {
    this.setState(prevState => ({
      todos: prevState.todos.filter(el => el != item)
    }));
  }

  update(previtem, item) {
    this.setState(prevState => ({
      todos: this.state.todos.map(i => {
        if (i == previtem) {
          return { ...i, name: item.name };
        } else {
          return i;
        }
      })
    }));
  }
}
