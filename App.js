import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Navbar } from "./src/components/Navbar";
import { AddItem } from "./src/components/AddItem";
import { Todo } from "./src/components/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (value) => {
    const todo = { id: Date.now().toString(), value };
    setTodos((prevState) => {
      return [...prevState, todo];
    });
  };

  console.log(todos);
  return (
    <View style={styles.container}>
      <Navbar title="My ToDo :)" />
      <View style={styles.wrapper}>
        <AddItem addItem={addTodo} />
        <View style={styles.wrapperList}>
          {todos.map((el) => (
            <Todo key={el.id} todo={el} />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%",
    width: "100%",
    paddingHorizontal: 5,
  },
  wrapperList: {
    width: "100%",
  },
});
