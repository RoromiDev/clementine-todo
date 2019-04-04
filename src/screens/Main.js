import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions
} from "react-native";
import { Constants } from "expo";
import { connect } from "react-redux";
import { NavigationActions } from "react-navigation";
import * as actions from "../actions";
import { Header, Card, Loader, AddTodo } from "../components";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export const mapStateToProps = ({ todos, loading }) => ({
  todos,
  loading
});

export class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    const { getTodos, createTodo, deleteTodo, updateTodo } = this.props;

    getTodos();
  }

  showAddTodo() {
    const { showAddPopup } = this.props;

    showAddPopup();
  }

  render() {
    const { todos, loading } = this.props;
    const data = Object.values(todos.data).reverse();
    const isLoading = loading.updateTodo || loading.getTodos || loading.createTodo;

    console.log(isLoading);
    return (
      <SafeAreaView style={styles.safeContainer}>
        {isLoading && <Loader />}
        {todos.showTodoPopup && <AddTodo />}
        <Header
          rightIcon={<Ionicons name="md-add" size={28} color="black" />}
          rightPress={() => this.showAddTodo()}
        />
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {data.map(elem => (
            <Card key={elem.id} todo={elem} />
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(MainScreen);

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight
  },
  contentContainer: {}
});
