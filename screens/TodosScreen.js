import React from "react";
import {
  ScrollView,
  StyleSheet,
  FlatList,
  StatusBar,
  Platform,
  View
} from "react-native";
import { Header, Icon } from "react-native-elements";

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
      newtodo: false,
      todos: [
        {
          _id: "1",
          name: "apfel",
          completed: false,
          createdAt: 12
        }
      ]
    };
  }

  render() {
    const isAndroid = Platform.OS === "android";
    return (
      <View style={{ flex: 1 }}>
        <Header
          centerComponent={{
            icon: "local-grocery-store" ,
            color: "#fff"
          }}
        />
        <ScrollView>
          <FlatList
            data={this.state.todos}
            keyExtractor={item => item.name}
            renderItem={({ item: item }) => <ShoppingListItem item={item} />}
          />
          {this.state.newtodo ? (
            <ShoppingListItem
              onCreate={name => this.create(name)}
              onEndEditing={() => this.endEditing()}
            />
          ) : null}
        </ScrollView>
        <AddTodoButton onPress={() => this.addItem()} />
      </View>
    );
  }

  addItem() {
    this.setState({ newtodo: true });
  }

  create(name) {
    newitem = {
      _id: undefined,
      name: name,
      completed: undefined,
      createdAt: undefined
    };
    this.setState({ todos: this.state.todos.concat(newitem), newtodo: false });
  }

  endEditing() {
    this.setState({ newtodo: false });
  }
}
