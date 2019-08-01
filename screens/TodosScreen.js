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
import AddButton from "../components/AddButton";
import Item from "../components/Item";
import Title from "../components/Title";
import MenuButton from "../components/MenuButton";
import ShareButton from "../components/ShareButton";
import Service from "../service/Service";
import Colors from "../constants/Colors";

export default class TodosScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Title />,
    headerLeft: <MenuButton />,
    headerRight: <ShareButton />
  };

  constructor(props) {
    super(props);

    service = new Service(props.navigation);

    this.state = {
      user: "paulpunke@gmail.com",
      todos: []
    };
  }

  componentDidMount() {
    this.init();
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors(this.props.navigation).background
        }}
      >
        <StatusBar barStyle={Colors(this.props.navigation).statusBar} />
        <ScrollView>
          <FlatList
            data={this.state.todos
              .filter(el => el.State !== "delete")
              .sort(function(a, b) {
                if (a.Checked && !b.Checked) return 1;
                if (!a.Checked && b.Checked) return -1;
                if (a.ID < b.ID) return 1;
                if (a.ID > b.ID) return -1;
                return 0;
              })}
            keyExtractor={item => item.ID.toString()}
            renderItem={({ item: item }) => (
              <Item
                item={item}
                onSubmit={(previtem, item) => this.onSubmit(previtem, item)}
                onEndEditing={(previtem, item) => this.onSubmit(previtem, item)}
                onPress={item => this.onPress(item)}
              />
            )}
          />
        </ScrollView>
        <AddButton onPress={() => this.addItem()} />
      </View>
    );
  }

  addItem() {
    this.setState({
      todos: [
        {
          ID: Date.now(),
          User: "paulpunke@gmail.com",
          List: "nicelist",
          State: "create",
          Name: "",
          Checked: false,
          Version: 1
        }
      ].concat(this.state.todos)
    });
  }

  onPress(newitem) {
    this.setState(
      prevState => ({
        todos: prevState.todos.map(item => {
          if (item == newitem) {
            return {
              ...item,
              Checked: !item.Checked,
              State: item.State !== "" ? item.State : "update"
            };
          } else {
            return item;
          }
        })
      }),
      () => this.sync()
    );
  }

  sync() {
    service.sync(this.state.todos, items => this.onSync(items));
  }

  init() {
    service.sync(this.state.todos, items => this.onSync(items), true);
  }

  onSync(items) {
    this.setState(prevState => ({
      todos: items
    }));
  }

  onSubmit(previtem, item) {
    if (item.Name === "") {
      this.remove(previtem);
    } else if (previtem.Name !== item.Name) {
      this.update(previtem, item);
    }
  }

  remove(item) {
    this.setState(
      prevState => ({
        todos: this.state.todos
          .filter(i => !(i == item && i.State === "create"))
          .map(i => {
            if (i == item) {
              return { ...i, State: "delete" };
            } else {
              return i;
            }
          })
      }),
      () => this.sync()
    );
  }

  update(previtem, item) {
    this.setState(
      prevState => ({
        todos: this.state.todos.map(i => {
          if (i == previtem) {
            return {
              ...i,
              Name: item.Name,
              State: item.State !== "" ? item.State : "update"
            };
          } else {
            return i;
          }
        })
      }),
      () => this.sync()
    );
  }
}
