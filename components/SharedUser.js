import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Input from "../components/Input";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class SharedUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user: props.user };
  }

  render() {
    onPress = () => {};
    onEndEditing = () =>
      this.props.onEndEditing(this.props.user, this.state.user);
    onChangeText = Mail => {
      var newuser = { ...this.state.user };
      newuser.Mail = Mail;
      this.setState({ user: newuser });
    };

    return (
      <View>
        <ListItem
          underlayColor="transparent"
          onPress={onPress}
          containerStyle={{
            backgroundColor: "transparent",
            height: 50
          }}
          title={
            <Input
              value={this.state.user.Mail}
              onChangeText={onChangeText}
              onEndEditing={onEndEditing}
              darkmode={this.props.store.darkmode}
            />
          }
          bottomDivider={true}
        />
      </View>
    );
  }
}

export default withNavigation(SharedUser);
