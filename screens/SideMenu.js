import React from "react";
import { FlatList, View } from "react-native";
import { ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";
import List from "../components/List";
import Colors from "../constants/Colors";

class SideMenu extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors(this.props.navigation).background
        }}
      >
        <FlatList
          data={this.props.navigation.getParam("lists", [])}
          keyExtractor={list => list.Name}
          renderItem={({ item }) => <List list={item} />}
        />
        <ListItem
          title="darkmode"
          underlayColor="transparent"
          containerStyle={{
            backgroundColor: "transparent",
            height: 50
          }}
          titleStyle={{
            color: Colors(this.props.navigation).primary
          }}
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
