import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navBarWrapper}>
      <Text style={styles.navBarText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarWrapper: {
    flexDirection: "row",
    height: "10%",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
    backgroundColor: "black",
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },

  navBarText: { color: "palevioletred", paddingBottom: 10, fontSize: 25 },
});
