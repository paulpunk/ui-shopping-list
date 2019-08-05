import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { Input, ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";
import SharedUser from "../components/SharedUser";

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <FlatList
            data={this.props.navigation.getParam("users", [])}
            keyExtractor={user => user.id}
            renderItem={({ item }) => <SharedUser user={item} />}
          />
        </ScrollView>
      </View>
    );
  }
}

export default withNavigation(SideMenu);
