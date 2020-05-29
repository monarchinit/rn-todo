import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { THEME } from "../constans";

export const Todo = ({ todo, onRemove, activeTodo }) => {
  return (
    <TouchableOpacity
      onPress={() => activeTodo(todo.id)}
      onLongPress={() => onRemove(todo.id)}
    >
      <View style={styles.wrapper}>
        <Text style={styles.text}>{todo.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "97%",
    height: 50,
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 5,
    marginHorizontal: 5,
    backgroundColor: THEME.INPUT_BACK,
    borderRadius: 10,
    elevation: 8,
    shadowColor: THEME.DARK,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
  text: {
    paddingHorizontal: 10,
  },
});
