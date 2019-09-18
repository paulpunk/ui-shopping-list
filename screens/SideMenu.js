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
          backgroundColor: Colors(this.props.navigation).background
        }}
      >
        <FlatList
          data={this.props.store.lists}
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
            color: Colors(this.props.navigation).primary
          }}
          switch={{
            value: this.props.store.darkmode,
            onValueChange: value => {
              this.props.store.darkmode = value;
            }
          }}
        />
      </View>
    );
  }
}

export default withNavigation(SideMenu);
