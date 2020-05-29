import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { MainScreen } from "./src/screens/MainScreen";
import { TodoScreen } from "./src/screens/TodoScreen";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todoScreen, setTodoScreen] = useState(null);

  const addTodo = (value) => {
    const todo = { id: Date.now().toString(), value };
    setTodos((prevState) => {
      return [...prevState, todo];
    });
  };

  const removeItem = (id) => {
    const activeTodo = todos.find((el) => el.id === id);
    Alert.alert(
      "Remove Item",
      `Are you sure you want to delete "${activeTodo.value}"`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            setTodoScreen(null);
            setTodos((setTodos) => setTodos.filter((el) => el.id !== id));
          },
        },
      ],
      { cancelable: false }
    );
  };

  let contetn = (
    <MainScreen
      addTodo={addTodo}
      todos={todos}
      removeItem={removeItem}
      activeTodo={setTodoScreen}
    ></MainScreen>
  );

  const changeSaveTodo = (id, value) => {
    setTodos((prevState) =>
      prevState.map((el) => {
        if (el.id === id) {
          el.value = value;
        }
        return el;
      })
    );
  };

  if (!!todoScreen) {
    const activeTodo = todos.find((el) => el.id === todoScreen);
    contetn = (
      <TodoScreen
        goBack={() => setTodoScreen(null)}
        activeTodo={activeTodo}
        removeItem={removeItem}
        onSave={changeSaveTodo}
      ></TodoScreen>
    );
  }

  return (
    <View style={styles.container}>
      <Navbar title="My ToDo :)" />
      <View style={styles.wrapper}>{contetn}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 15,
  },
});
