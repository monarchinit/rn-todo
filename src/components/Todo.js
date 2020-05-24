import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Todo = ({ todo }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{todo.value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "5%",
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: "1%",
    backgroundColor: "#c1d2dc80",
    borderRadius: 10,
  },
  text: {
    // color: "white",
  },
});
