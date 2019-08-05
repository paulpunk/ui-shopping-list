import React from "react";
import { View, Text, FlatList } from "react-native";
import { Input, ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";
import List from "../components/List";

class SideMenu extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.navigation.getParam("lists", [])}
          keyExtractor={list => list.name}
          renderItem={({ item }) => <List list={item} />}
        />
        <ListItem
          title="Darkmode"
          switch={{
            value: this.props.navigation.getParam("darkmode", false),
            onValueChange: value => {
              this.props.navigation.setParams({ darkmode: value });
              this.props.navigation.navigate("Main", {
                darkmode: value
              });
            }
          }}
        />
      </View>
    );
  }
}

export default withNavigation(SideMenu);
