import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Constants, Permissions, Camera } from "expo";
import { Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import * as actions from "../actions";
import { Header, Loader } from "../components";

const { width, height } = Dimensions.get("window");

export const mapStateToProps = ({ todos, loading }) => ({
  todos,
  loading
});

export class TodoScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      task: props.todos.data[props.navigation.state.params.id].title,
      image: null,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      showCamera: false
    };
  }

  askPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === "granted",
      showCamera: true
    });
  };

  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.setState({
        image: photo,
        showCamera: false
      });
    }
  };

  modifyTodo() {
    const { updateTodo, goBack } = this.props;

    updateTodo({title: this.state.task}, this.props.navigation.state.params.id);
    goBack();
  }

  deleteTodo() {
    const { deleteTodo, goBack } = this.props;

    deleteTodo(this.props.navigation.state.params.id);
    goBack();
  }

  render() {
    const { todos, loading } = this.props;
    const isLoading = loading.updateTodo;

    return (
      <SafeAreaView style={styles.safeContainer}>
        {isLoading && <Loader />}
        <Header
          leftIcon={
            <Ionicons name="md-arrow-round-back" size={28} color="black" />
          }
          rightIcon={<Ionicons name="md-trash" size={28} color="red" />}
          rightPress={() => this.deleteTodo()}
        />
        {this.state.hasCameraPermission && this.state.showCamera && (
          <View
            style={{
              height: height + Constants.statusBarHeight,
              width,
              position: "absolute",
              zIndex: 2000,
              backgroundColor: "black"
            }}
          >
            <Camera
              style={styles.camera}
              type={this.state.type}
              ref={ref => {
                this.camera = ref;
              }}
            />
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                borderRadius: 25,
                backgroundColor: "whitesmoke",
                position: "absolute",
                top: height - 80,
                left: width / 2 - 25
              }}
              onPress={() => {
                this.snap();
              }}
            />
          </View>
        )}
        <View style={styles.container}>
          <Text style={styles.task}>Tache: </Text>
          <TextInput
            style={styles.input}
            onChangeText={text => this.setState({ task: text })}
            value={this.state.task}
            placeholder={"Rentrez votre tache.."}
          />
        </View>
        {!this.state.image ? (
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.askPermission()}
          >
            <Text style={styles.buttonText}>Ajouter une photo</Text>
          </TouchableOpacity>
        ) : (
          <Image source={this.state.image} style={{ width, height: width, marginTop: 20 }} resizeMethod="resize" />
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.modifyTodo()}
        >
          <Text style={styles.buttonText}>Valider</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

export default connect(
  mapStateToProps,
  actions
)(TodoScreen);

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight
  },
  container: {
    paddingHorizontal: 10
  },
  camera: {
    height: width,
    width,
    position: "absolute",
    zIndex: 2000
  },
  task: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: "600"
  },
  input: {
    height: 40,
    paddingLeft: 10,
    borderRadius: 5,
    backgroundColor: "whitesmoke",
    marginTop: 10,
    width: width - 20
  },
  button: {
    height: 36,
    borderRadius: 18,
    width: width - 20,
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
