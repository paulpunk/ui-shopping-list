import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import { withNavigation } from "react-navigation";
import Input from "../components/Input";

class SharedUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = { user: props.user };
  }

  render() {
    onPress = () => {};
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
              value={this.state.user.id}
              // onChangeText={onChangeText}
              // onEndEditing={onEndEditing}
            />
          }
          bottomDivider={true}
        />
      </View>
    );
  }
}

export default withNavigation(SharedUser);
