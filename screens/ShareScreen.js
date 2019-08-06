import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { withNavigation } from "react-navigation";
import AddButton from "../components/AddButton";
import SharedUser from "../components/SharedUser";
import Colors from "../constants/Colors";

class ShareScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: this.props.navigation
        .getParam("lists", [])
        .filter(
          list =>
            list.name === this.props.navigation.getParam("list", "nicelist")
        )
        .flatMap(list => list.sharedwith)
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors(this.props.navigation).background
        }}
      >
        <ScrollView>
          <FlatList
            data={this.state.users}
            keyExtractor={user => user.id}
            renderItem={({ item }) => <SharedUser user={item} />}
          />
        </ScrollView>
        <AddButton onPress={() => this.addUser()} />
      </View>
    );
  }

  addUser() {
    this.setState({
      users: [
        {
          id: ""
        }
      ].concat(this.state.users)
    });
  }
}

export default withNavigation(ShareScreen);
