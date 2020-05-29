import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../constans";

export const AppCard = ({ children, style }) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: THEME.INPUT_BACK,
    elevation: 8,
    shadowColor: THEME.DARK,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 3,
    shadowOpacity: 0.3,
    borderRadius: 10,
    padding: 10,
    height: 50,
    justifyContent: "center",
  },
});
