import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { THEME } from "../constans";
import { AppButton } from "../ui/AppButton";

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
        <AppButton
          color={THEME.ADD_BUTTON}
          onPress={handleSubmit}
          // style={styles.button}
        >
          <AntDesign name="addfile" size={24} color="black" />
        </AppButton>
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
    fontFamily: "Os-reg",
  },
  button: { fontSize: 25, width: 100, height: 30, color: "gray" },
  wrapperButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
