import React from "react";
import { FlatList, ScrollView, View } from "react-native";
import { withNavigation } from "react-navigation";
import AddButton from "../components/AddButton";
import SharedUser from "../components/SharedUser";
import Colors from "../constants/Colors";
import BackButton from "../components/BackButton";
import ShareButton from "../components/ShareButton";
import Title from "../components/Title";
import AddUserButton from "../components/AddUserButton";
import ShareTitle from "../components/ShareTitle";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class ShareScreen extends React.Component {
  static navigationOptions = {
    headerTitle: <ShareTitle />,
    headerLeft: <BackButton />,
    headerRight: <AddUserButton />
  };
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.navigation.setParams({ onAddUser: () => this.addUser() });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors(this.props.store.darkmode).background
        }}
      >
        <ScrollView>
          <FlatList
            data={this.props.store.displayedUsers}
            keyExtractor={user => user.Mail}
            renderItem={({ item }) => (
              <SharedUser
                user={item}
                onEndEditing={(prevuser, user) => this.onSubmit(prevuser, user)}
              />
            )}
          />
        </ScrollView>
      </View>
    );
  }

  addUser() {
    this.setState({
      users: this.state.users.concat([
        {
          Mail: "",
          State: "create"
        }
      ])
    });
  }

  onSubmit(prevuser, user) {
    this.props.store.submitUser(user, prevuser);
  }

  remove(user) {
    this.setState(
      prevState => ({
        users: this.state.users
          .filter(u => !(u == user && u.State === "create"))
          .map(u => {
            if (u == user) {
              return { ...u, State: "delete" };
            } else {
              return u;
            }
          })
      }),
      () => this.setNavigation()
    );
  }

  update(prevuser, user) {
    this.setState(
      prevState => ({
        users: this.state.users.map(u => {
          if (u == prevuser) {
            return {
              ...u,
              Mail: user.Mail,
              State: user.State !== "" ? user.State : "update"
            };
          } else {
            return u;
          }
        })
      }),
      () => this.setNavigation()
    );
  }

  setNavigation() {
    this.props.navigation.setParams({
      lists: this.props.navigation.getParam("lists", []).map(l => {
        if (l.Name === this.props.navigation.getParam("list", "nicelist")) {
          return {
            ...l,
            sharedwith: this.state.users
          };
        } else {
          return l;
        }
      })
    });
  }
}

export default withNavigation(ShareScreen);
