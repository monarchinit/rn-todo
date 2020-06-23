import React from "react";
import { StyleSheet, View, TouchableOpacity, Platform } from "react-native";
import { AppTextBold } from "./AppTextBold";
import { THEME } from "../constans";

export const AppButton = ({ children, onPress, color = THEME.ADD_BUTTON }) => {
  const Wrapper =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Wrapper onPress={onPress}>
      <View style={{ ...styles.button, backgroundColor: color }}>
        <AppTextBold>{children}</AppTextBold>
      </View>
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8,
    shadowColor: THEME.DARK,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.3,
  },
});
