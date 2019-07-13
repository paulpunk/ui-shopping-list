import * as Font from "expo-font";
import React from "react";
import { StatusBar, View } from "react-native";
import { Container, Spinner } from "native-base";
import { Header, Icon } from "react-native-elements";

import COLORS from "../constants/Colors";
import TodosScreen from "../screens/TodosScreen";

export default class RootComponent extends React.Component {
  state = {
    isReady: false
  };

  componentWillMount = async () => {
    await Font.loadAsync({
      Roboto: require("../assets/Roboto.ttf"),
      Roboto_medium: require("../assets/Roboto_medium.ttf"),
      Ionicons: require("../assets/Ionicons.ttf")
    });
    this.setState({ isReady: true });
  };

  renderStatusBar = () => <StatusBar barStyle="dark-content" />;

  render = () => {
    if (!this.state.isReady) {
      return (
        <View>
          {this.renderStatusBar()}
          <Spinner color={COLORS.primary} />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        {this.renderStatusBar()}
        <Header
          centerComponent={{
            icon: "credit-card" ,
            color: "#000"
          }}
          containerStyle={{
            backgroundColor: '#fff',
            justifyContent: 'space-around',
          }}
        />
        <TodosScreen />
      </View>
    );
  };
}
