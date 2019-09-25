import { inject, observer } from "mobx-react";
import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import Input from "./Input";

@inject("store")
@observer
class User extends React.Component {
  render() {
    onChangeText = user => {
      this.props.store.user = user;
    };
    onSubmit = () => this.props.store.init();

    return (
      <View>
        <ListItem
          underlayColor="transparent"
          containerStyle={{
            backgroundColor: "transparent",
            height: 50
          }}
          title={
            <Input
              value={this.props.store.user}
              darkmode={this.props.store.darkmode}
              onChangeText={onChangeText}
              onBlur={onSubmit}
            />
          }
          bottomDivider={true}
        />
      </View>
    );
  }
}

export default User;
