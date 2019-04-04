import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

const { height, width } = Dimensions.get("window");

export class Loader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="white" />
          <Text style={styles.text}>Chargement...</Text>
        </View>
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(Loader);

const styles = StyleSheet.create({
  container: {
    height,
    width,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    zIndex: 1000
  },
  loader: {
    height: 120,
    width: 140,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 10
  },
  text: {
      marginTop: 15,
      color: 'white',
      fontSize: 15,
      fontWeight: '600'
  }
});
