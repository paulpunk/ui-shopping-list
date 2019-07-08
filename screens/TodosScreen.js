import React from "react";
import {
  ScrollView,
  StyleSheet,
  FlatList,
  StatusBar,
  Platform
} from "react-native";
import { View } from "native-base";

import COLORS from "../constants/Colors";
import Header from "../components/Header";
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

export default class TodosContainer extends React.Component {
  state = {
    newtodo: false
  };

  onAllData = (todos, streamData) => {
    return (
      <FlatList
        style={{ width: "100%", top: 15 }}
        data={filteredData}
        keyExtractor={item => item._id}
        renderItem={({ item: todo }) => <TodoItem todo={todo} />}
      />
    );
  };

  render() {
    const isAndroid = Platform.OS === "android";

    let todo = {
      _id: "1",
      title: "apfel",
      completed: false,
      createdAt: 12
    };

    this.state.todos = [todo];

    let emptytodo = {
      _id: undefined,
      title: "",
      completed: undefined,
      createdAt: undefined
    };

    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <FlatList
            data={this.state.todos}
            keyExtractor={item => item._id}
            renderItem={({ item: todo }) => <ShoppingListItem todo={todo} />}
          />
          {this.state.newtodo ? <ShoppingListItem todo={emptytodo} /> : null}
        </ScrollView>
        <AddTodoButton onPress={() => this.setState({ newtodo: true })} />
      </View>
    );
  }
}
