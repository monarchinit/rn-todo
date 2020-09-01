import { StyleSheet, View, TextInput, Text } from "react-native";
import React, { useState } from "react";
import { AppButton } from "../ui/AppButton";
import { THEME, inputStyle } from "../constans";

export const AuthScreen = () => {
  const [regFlag, setRegFlag] = useState(false);

  return (
    <>
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={() => {}}
          //   value={}
          style={styles.input}
          placeholder="enter your password"
          autoCorrect={false}
        >
          Hello
        </TextInput>
        <TextInput
          onChangeText={() => {}}
          //   value={}
          style={styles.input}
          placeholder="enter your email"
          autoCorrect={false}
        ></TextInput>
        <TextInput
          onChangeText={() => {}}
          //   value={}
          style={{ ...styles.input, display: regFlag ? "none" : "flex" }}
          placeholder="enter your name"
          autoCorrect={false}
        ></TextInput>
      </View>
      <View style={styles.buttonWordsContainer}>
        <Text
          style={{
            ...styles.buttonWord,
            color: regFlag ? THEME.INPUT_BACK : THEME.DARK,
          }}
          onPress={() => setRegFlag(0)}
        >
          Login
        </Text>
        <Text style={{ ...styles.buttonWord, color: THEME.RED }}>/</Text>
        <Text
          style={{
            ...styles.buttonWord,
            color: !regFlag ? THEME.INPUT_BACK : THEME.DARK,
          }}
          onPress={() => setRegFlag(1)}
        >
          Registration
        </Text>
      </View>
      <View style={styles.buttoEnterContainer}>
        <AppButton>Enter</AppButton>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    marginBottom: 10,
    marginTop: 80,
    justifyContent: "center",
    height: 150,
  },
  buttoEnterContainer: {},
  buttonWord: {
    fontFamily: "Os-reg",
    lineHeight: 40,
    fontSize: 25,
    marginHorizontal: 10,
  },
  buttonWordsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  input: inputStyle,
});
