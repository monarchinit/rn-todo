import React from "react";
import { View, StyleSheet } from "react-native";
import { THEME } from "../constans";
import { AppTextBold } from "../ui/AppTextBold";

export const Navbar = ({ title }) => {
  return (
    <View style={styles.navBarWrapper}>
      <AppTextBold style={styles.navBarText}>{title}</AppTextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  navBarWrapper: {
    height: 75,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: THEME.DARK,
    borderBottomLeftRadius: 7,
    borderBottomRightRadius: 7,
  },

  navBarText: { color: THEME.RED, paddingBottom: 10, fontSize: 25 },
});
