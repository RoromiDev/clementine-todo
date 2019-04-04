import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import CheckBox from "react-native-check-box";
import { Ionicons } from "@expo/vector-icons";
import { Constants } from "expo";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import * as actions from "../actions";

const { width } = Dimensions.get("window");

export class Card extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleCheckChange() {
    const { todo, updateTodo } = this.props;

    updateTodo({
        completed: !todo.completed
    }, todo.id);
  }

  goToTodoDetails() {
    const { changePage, todo } = this.props;

    changePage("Todo", todo.id);
  }

  render() {
    const { todo } = this.props;

    return (
      <View style={[styles.container, { ...this.props.style }]}>
        <TouchableOpacity style={styles.textContainer} onPress={() => this.goToTodoDetails()}>
            <Text style={styles.title}>{todo.title}</Text>
        </TouchableOpacity>
        <CheckBox
          style={styles.checkbox}
          onClick={() => this.handleCheckChange()}
          isChecked={todo.completed}
          checkBoxColor="rgb(69, 112, 221)"
        />
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(Card);

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderColor: "whitesmoke",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
  },
  title: {
      fontSize: 13
  },
  checkbox: {
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 15
  }
});
