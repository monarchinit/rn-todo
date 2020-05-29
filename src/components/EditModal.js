import React, { useState } from "react";
import {
  View,
  Modal,
  StyleSheet,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { THEME } from "../constans";

export const EditModal = ({ modalVisible, value, onSave, onCancel }) => {
  const [title, setTitle] = useState(value);

  saveHandler = () => {
    if (title.trim().length < 3) {
      Alert.alert(
        "Error",
        `Minimum length 3 characters. Now ${title.trim().length} characters`
      );
    } else {
      onSave(title);
    }
  };

  return (
    <Modal animationType="slide" transparent={false} visible={modalVisible}>
      <View style={styles.wrapper}>
        <TextInput
          value={title}
          onChangeText={setTitle}
          autoCorrect={false}
          placeholder="Enter value"
          autoCapitalize="none"
          style={styles.input}
          maxLength={34}
        ></TextInput>
        <View style={styles.buttoWrapper}>
          <Button
            onPress={() => {
              onCancel();
              setTitle(value);
            }}
            title="Cancel"
            color={THEME.RED}
          ></Button>
          <Button
            onPress={saveHandler}
            title="Save"
            color={THEME.ADD_BUTTON}
          ></Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  buttoWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  input: {
    height: 40,
    borderColor: THEME.RED,
    borderBottomWidth: 1,
    textAlign: "center",
    fontSize: 20,
    margin: 10,
    color: THEME.DARK,
    width: "90%",
  },
});
