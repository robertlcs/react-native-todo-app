import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator
} from "react-native";

import { noTodosYetText } from "../constants/messages";
import { TODO_MODAL } from "../constants/navigation";

import Todos from "./Todos";
import WarningText from "./WarningText";
import ButtonWithHandler from "./ButtonWithHandler";

const Home = ({ todos, deleteTodo, editTodo, showLoader, navigation }) => (
  <View style={styles.container}>
    <View style={styles.addTodoWrapper}>
      <ButtonWithHandler
        onPress={() => navigation.navigate(TODO_MODAL)}
        text="Add new todo"
      />

      {showLoader && <ActivityIndicator animating size="large" />}
    </View>

    {todos.length ? (
      <Todos todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    ) : (
      <WarningText text={noTodosYetText} />
    )}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20
  },

  addTodoWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: 20
  }
});

export default Home;
