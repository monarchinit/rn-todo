import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";

export const AddItem = ({ addItem }) => {
  const [todoItemValue, setTodoItemValue] = useState("");

  const handleSubmit = () => {
    if (todoItemValue.trim()) {
      addItem(todoItemValue);
      setTodoItemValue("");
    } else {
      //   error
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        onChangeText={setTodoItemValue}
        value={todoItemValue}
        style={styles.input}
        placeholder="enter value"
      ></TextInput>
      <View style={styles.wrapperButton}>
        <Button
          color="#30eb61"
          onPress={handleSubmit}
          style={styles.button}
          title="Add"
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { width: "100%" },
  input: {
    height: "5%",
    borderColor: "palevioletred",
    borderBottomWidth: 1,
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    color: "#292929",
  },
  button: { fontSize: 25, width: 100, height: 30, color: "gray" },
  wrapperButton: {
    width: "100%",
    height: "8%",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
