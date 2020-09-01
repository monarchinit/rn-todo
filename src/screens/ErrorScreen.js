import React from "react";
import { View, StyleSheet } from "react-native";
import { AppTextBold } from "../ui/AppTextBold";
import { AppButton } from "../ui/AppButton";
import { THEME } from "../constans";
import { useContext } from "react";
import { TodoContext } from "../context/todo/todoContext";
import { ScreenContext } from "../context/screen/screenContext";
import screenTypes from "../context/screen/screenTypes";

export const ErrorScreen = () => {
  const { error } = useContext(TodoContext);
  const { changeScreenState } = useContext(ScreenContext);
  return (
    <>
      <View style={styles.center}>
        <AppTextBold style={styles.error}>{error}</AppTextBold>
        <AppButton
          onPress={() => {
            changeScreenState({ type: screenTypes.MAIN_SCREEN });
          }}
        >
          Try again
        </AppButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: THEME.RED,
    marginBottom: 20,
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
    height: "90%",
  },
});
