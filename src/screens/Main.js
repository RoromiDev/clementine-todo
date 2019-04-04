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
import { NavigationActions } from 'react-navigation';
import * as actions from '../actions';

const { width } = Dimensions.get("window");

const mapDispatchToProps = dispatch => {
  return {
    goToMainScreen: () => {
      dispatch(
        NavigationActions.navigate({
          routeName: "Main"
        })
      );
    }
  };
};

export class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }

  componentDidMount() {
    const { getTodos, createTodo, deleteTodo, updateTodo } = this.props;

    getTodos();
    createTodo();
    deleteTodo();
    updateTodo();
  }

  render() {
    console.log(this.props);
    return (
      <SafeAreaView style={styles.safeContainer}>
        
      </SafeAreaView>
    );
  }
}

export default connect(
  null,
  actions
)(MainScreen);

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight
  }
});
