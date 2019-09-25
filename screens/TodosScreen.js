import { inject, observer } from "mobx-react";
import React from "react";
import {
  FlatList,
  Keyboard,
  NetInfo,
  RefreshControl,
  ScrollView,
  StatusBar,
  View
} from "react-native";
import AddButton from "../components/AddButton";
import Item from "../components/Item";
import MenuButton from "../components/MenuButton";
import ShareButton from "../components/ShareButton";
import Title from "../components/Title";
import Colors from "../constants/Colors";

@inject("store")
@observer
export default class TodosScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <Title />,
    headerLeft: <MenuButton />,
    headerRight: <ShareButton />
  };

  constructor(props) {
    super(props);

    this.state = {
      user: "paulpunke@gmail.com",
      todos: [],
      refreshing: false,
      connected: false
    };
  }

  componentDidMount() {
    handleConnectivityChange = isConnected => {
      if (isConnected) {
        if (!this.state.connected) {
          this.init();
          this.state.connected = true;
        }
      } else {
        if (this.state.connected) {
          this.state.connected = false;
        }
      }
    };
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      handleConnectivityChange
    );
  }

  _onRefresh = () => {
    this.init();
    Keyboard.dismiss();
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors(this.props.store.darkmode).background
        }}
      >
        <StatusBar barStyle={Colors(this.props.store.darkmode).statusBar} />
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
        >
          <FlatList
            data={this.props.store.displayedItems}
            keyExtractor={item => item.ID.toString()}
            renderItem={({ item: item }) => (
              <Item
                item={item}
                onSubmit={(item, previtem) => this.onSubmit(item, previtem)}
              />
            )}
          />
        </ScrollView>
        <AddButton onPress={() => this.addItem()} />
      </View>
    );
  }

  addItem() {
    this.props.store.createItem();
  }

  sync() {
    service.sync(this.state.todos, items => this.onSync(items));
  }

  init() {
    this.props.store.init();
  }

  onSubmit(item, previtem) {
    this.props.store.submitItem(item, previtem);
  }

  mergeItems(items) {
    const changedItems = this.changedItems(items);
    const itemsFromServer = this.itemsFromServer(items, changedItems);

    return changedItems.concat(itemsFromServer);
  }

  itemsFromServer(items, changedItems) {
    return items.filter(i => !this.itemWasChanged(i, changedItems));
  }

  itemWasChanged(item, changedItems) {
    return (
      changedItems.filter(i => i.ID === item.ID && i.User === item.User)
        .length > 0
    );
  }

  changedItems(items) {
    const toBeCreated = this.state.todos
      .filter(i => i.State === "create")
      .filter(i => !this.itemOnServer(i, items));
    const toBeUpdated = this.state.todos
      .filter(i => i.State === "update")
      .filter(i => !this.itemOnServerWithHigherVersion(i, items));

    const toBeDelete = this.state.todos
      .filter(i => i.State === "delete")
      .filter(i => this.itemOnServer(i, items))
      .filter(i => !this.itemOnServerWithHigherVersion(i, items));

    return toBeCreated.concat(toBeUpdated).concat(toBeDelete);
  }

  itemOnServerWithHigherVersion(item, items) {
    return (
      items
        .filter(i => i.ID === item.ID && i.User === item.User)
        .filter(i => i.Version > item.Version).length > 0
    );
  }

  itemOnServer(item, items) {
    return (
      items.filter(i => i.ID === item.ID && i.User === item.User).length > 0
    );
  }
}
