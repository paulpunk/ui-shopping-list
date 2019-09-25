import React from "react";
import { FlatList, View } from "react-native";
import { ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";
import List from "../components/List";
import Colors from "../constants/Colors";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class SideMenu extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors(this.props.store.darkmode).background
        }}
      >
        <FlatList
          data={this.props.store.displayedLists}
          keyExtractor={item => item.Name}
          renderItem={({ item: item }) => <List list={item} />}
        />
        <ListItem
          title="darkmode"
          underlayColor="transparent"
          containerStyle={{
            backgroundColor: "transparent",
            height: 50
          }}
          titleStyle={{
            color: Colors(this.props.store.darkmode).primary
          }}
          switch={{
            value: this.props.store.darkmode,
            onValueChange: value => {
              this.props.store.darkmode = value;
              this.props.navigation.setParams({
                darkmode: value
              });
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
