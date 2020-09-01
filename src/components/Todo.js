import React, { useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { THEME } from "../constans";
import { AppTextBold } from "../ui/AppTextBold";
import { ScreenContext } from "../context/screen/screenContext";
import screenTypes from "../context/screen/screenTypes";
import { ActiveTodoIdContext } from "../context/activeTodoId/activeTodoIdContext";
import { CHANGE_ACTIVE_TODO_ID } from "../context/activeTodoId/activeTodoIdTypes";

export const Todo = ({ todo, onRemove }) => {
  const { changeScreenState } = useContext(ScreenContext);
  const { changeActiveTodoId } = useContext(ActiveTodoIdContext);

  return (
    <TouchableOpacity
      onPress={() => {
        changeActiveTodoId({
          type: CHANGE_ACTIVE_TODO_ID,
          payload: { id: todo._id },
        });
        changeScreenState({ type: screenTypes.TODO_SCREEN });
      }}
      onLongPress={() => onRemove(todo._id)}
    >
      <View style={styles.wrapper}>
        <AppTextBold style={styles.text}>{todo.value}</AppTextBold>
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
