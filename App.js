import React from "react";
import { Platform, StatusBar, StyleSheet, Text, View } from "react-native";
import RootComponent from "./navigation/RootComponent";
import Root from "./navigation/Root";

export default function App() {
  return <Root />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
