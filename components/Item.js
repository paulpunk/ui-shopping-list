import { inject, observer } from "mobx-react";
import React from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import Checkbox from "./Checkbox";
import Input from "./Input";

@inject("store")
@observer
class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = { item: props.item };
  }

  render() {
    onPress = () => {
      var newitem = { ...this.state.item };
      newitem.Checked = !this.state.item.Checked;
      this.setState({ item: newitem });
    };
    onSubmit = () => this.props.onSubmit(this.state.item, this.props.item);
    onChangeText = Name => {
      var newitem = { ...this.state.item };
      newitem.Name = Name;
      this.setState({ item: newitem });
    };

    return (
      <View>
        <ListItem
          underlayColor="transparent"
          onPress={onPress}
          leftElement={
            <Checkbox
              Checked={this.state.item.Checked}
              darkmode={this.props.store.darkmode}
              onSubmit={onSubmit}
            />
          }
          containerStyle={{
            backgroundColor: "transparent",
            height: 50
          }}
          title={
            <Input
              value={this.state.item.Name}
              onChangeText={onChangeText}
              darkmode={this.props.store.darkmode}
              onBlur={onSubmit}
            />
          }
          bottomDivider={true}
        />
      </View>
    );
  }
}

export default Item;
