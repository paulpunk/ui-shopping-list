import * as Font from "expo-font";
import React from "react";
import { StatusBar, View, Text } from "react-native";
import { Header, Icon } from "react-native-elements";
import { withNavigation } from "react-navigation";
import { getStatusBarHeight } from "react-native-status-bar-height";

class Listheader extends React.Component {
  render = () => {
    return (
      <View
        style={{
          flex: 1,
          shadowOpacity: 1,
          backgroundColor: "#fff",
          alignItems: "center"
        }}
      >
        <View
          style={{
            height:getStatusBarHeight()
          }}
        >
          <StatusBar barStyle="dark-content"  />
        </View>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            flex: 1,
            justifyContent: "space-between"
          }}
        >
          <Icon
            type="ionicon"
            name="ios-options"
            color="#000"
            onPress={() => this.props.navigation.openDrawer()}
          />

          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#000" }}>
            nicelist
          </Text>
          <Icon
            name="share"
            color="#000"
            onPress={() => this.props.navigation.openDrawer()}
          />
        </View>
        <Text>{this.props.navigation.getParam("syncstate", "defaultValue")}</Text>
      </View>
    );
  };
}

export default withNavigation(Listheader);
