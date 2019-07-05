import React from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import RootComponent from "./navigation/RootComponent";

export default function App() {
  return (
    <View style={styles.container}>
      {Platform.OS === "ios" && <StatusBar barStyle="default" />}
      <RootComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
