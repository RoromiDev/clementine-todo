import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  TouchableOpacity,
  TextInput,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Constants } from "expo";
import { connect } from "react-redux";
import * as actions from "../actions";

const { height, width } = Dimensions.get("window");

export const mapStateToProps = ({ todos }) => ({
  todos
});

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opacityValue: new Animated.Value(0),
      topValue: new Animated.Value(0),
      task: ""
    };

    this.unmountAnimation = this.unmountAnimation.bind(this);
  }

  componentDidMount() {
    this.mountAnimation();
  }

  mountAnimation() {
    Animated.parallel([
      Animated.timing(this.state.opacityValue, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease
      }),
      Animated.timing(this.state.topValue, {
        toValue: 1,
        duration: 300,
        easing: Easing.ease
      })
    ]).start();
  }

  unmountAnimation() {
    const { hideAddPopup } = this.props;

    Animated.parallel([
      Animated.timing(this.state.opacityValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease
      }),
      Animated.timing(this.state.topValue, {
        toValue: 0,
        duration: 300,
        easing: Easing.ease
      })
    ]).start(() => hideAddPopup());
  }

  createTask() {
    const { createTodo } = this.props;

    createTodo(this.state.task);
    this.unmountAnimation();
  }

  render() {
    const opacity = this.state.opacityValue.interpolate({
      inputRange: [0, 1],
      outputRange: ["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.8)"]
    });
    const top = this.state.topValue.interpolate({
      inputRange: [0, 1],
      outputRange: [-height, 0]
    });

    return (
      <Animated.View style={[styles.container, { backgroundColor: opacity }]}>
        <Animated.View style={[styles.popup, { bottom: top }]}>
          <TouchableOpacity
            style={styles.close}
            onPress={this.unmountAnimation}
          >
            <Ionicons name="md-close" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Nouveau Todo</Text>
          <View>
            <Text>Tache: </Text>
            <TextInput
              style={styles.input}
              onChangeText={text => this.setState({ task: text })}
              value={this.state.task}
              placeholder={"Rentrez votre tache.."}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.createTask()}
          >
            <Text style={styles.buttonText}>Valider</Text>
          </TouchableOpacity>
        </Animated.View>
      </Animated.View>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(AddTodo);

const styles = StyleSheet.create({
  container: {
    height: height + Constants.statusBarHeight,
    width,
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 100,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  popup: {
    padding: width < 400 ? 10 : 15,
    paddingTop: 25,
    borderRadius: 5,
    backgroundColor: "white",
    width: width < 400 ? 300 : 350
  },
  title: {
    fontSize: 16,
    textAlign: "center",
    lineHeight: 18,
    fontWeight: "600"
  },
  input: {
    height: 40,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: "whitesmoke",
    marginTop: 10
  },
  close: {
    position: "absolute",
    right: 10,
    top: 5
  },
  button: {
    height: 36,
    borderRadius: 18,
    width: 150,
    backgroundColor: "rgb(69, 112, 221)",
    marginTop: 20,
    alignSelf: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 15,
    color: "white",
    fontWeight: "600"
  }
});
