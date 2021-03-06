import { TextInput, Platform } from "react-native";
import React from "react";
import { withNavigation } from "react-navigation";
import Colors from "../constants/Colors";

class Input extends React.Component {
  render() {
    return (
      <TextInput
        {...this.props}
        autoFocus={this.props.value == ""}
        value={this.props.value}
        placeholder={"test"}
        spellCheck={false}
        keyboardAppearance={Colors(this.props.darkmode).keyboardAppearance}
        style={{ color: Colors(this.props.darkmode).primary }}
        selectionColor={Colors(this.props.darkmode).primary}
        minHeight={20}
        {...Platform.select({
          ios: {
            fontSize: 17
          },
          default: {
            fontSize: 16
          }
        })}
      />
    );
  }
}

export default withNavigation(Input);
