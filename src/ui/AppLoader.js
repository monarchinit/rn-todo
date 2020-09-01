import React from "react";
import { StyleSheet, View, ActivityIndicator } from "react-native";

export const AppLoader = ({ size }) => (
  <View style={styles.container}>
    <ActivityIndicator size={size} />
  </View>
);

const styles = StyleSheet.create({
  container: {},
});
