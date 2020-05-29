import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { THEME } from "../constans";

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navBarWrapper}>
      <Text style={styles.navBarText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarWrapper: {
    height: 70,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: THEME.DARK,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },

  navBarText: { color: THEME.RED, paddingBottom: 10, fontSize: 25 },
});
