import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput, Alert } from "react-native";
import { THEME } from "../constans";

export const AddItem = ({ addItem }) => {
  const [todoItemValue, setTodoItemValue] = useState("");

  const handleSubmit = () => {
    if (todoItemValue.trim()) {
      addItem(todoItemValue);
      setTodoItemValue("");
    } else {
      Alert.alert("value is empty");
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        onChangeText={setTodoItemValue}
        value={todoItemValue}
        style={styles.input}
        placeholder="enter value"
        autoCorrect={false}
      ></TextInput>
      <View style={styles.wrapperButton}>
        <Button
          color={THEME.ADD_BUTTON}
          onPress={handleSubmit}
          style={styles.button}
          title="Add"
        ></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: { width: "100%", height: 110 },
  input: {
    height: 40,
    borderColor: THEME.RED,
    borderBottomWidth: 1,
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    color: THEME.DARK,
  },
  button: { fontSize: 25, width: 100, height: 30, color: "gray" },
  wrapperButton: {
    width: "100%",
    height: 30,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
