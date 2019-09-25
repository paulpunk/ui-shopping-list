import LottieView from "lottie-react-native";
import React from "react";
import { Text, View } from "react-native";
import { withNavigation } from "react-navigation";
import Colors from "../constants/Colors";
import SyncStatus from "./SyncStatus";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
class Title extends React.Component {
  render() {
    return (
      <View
        style={{
          alignItems: "center",
          justifyContent: "flex-start",
          height: 40,
          marginTop: 10
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: Colors(this.props.navigation.getParam("darkmode", false)).primary
          }}
        >
          {this.props.store.app}
        </Text>
        <SyncStatus syncstate={this.props.store.syncstate} />
      </View>
    );
  }
}

export default withNavigation(Title);
