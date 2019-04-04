import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

const { width } = Dimensions.get("window");

export class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  goBack() {
    const { goBack } = this.props;

    goBack();
  }

  render() {
    return (
      <View style={[styles.container, { ...this.props.style }]}>
        <TouchableOpacity onPress={() => this.goBack()}>
          <View style={[styles.iconContainer, { marginLeft: 10 }]}>
            {this.props.leftIcon}
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Todos</Text>
        <TouchableOpacity onPress={this.props.rightPress}>
          <View style={[styles.iconContainer, { marginRight: 10 }]}>
            {this.props.rightIcon}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(Header);

const styles = StyleSheet.create({
  container: {
    height: 50,
    width,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    borderBottomWidth: 2,
    borderColor: "whitesmoke"
  },
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 50
  },
  title: {
    fontSize: 20,
    fontWeight: "600"
  }
});
