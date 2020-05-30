import React, { useState } from "react";
import { StyleSheet, Button, View } from "react-native";
import { AppCard } from "../ui/AppCard";
import { THEME } from "../constans";
import { EditModal } from "../components/EditModal";
import { AppTextBold } from "../ui/AppTextBold";

export const TodoScreen = ({ activeTodo, goBack, removeItem, onSave }) => {
  const [modal, setModal] = useState(false);

  const handleSave = (value) => {
    onSave(activeTodo.id, value);
    setModal(false);
  };

  return (
    <View style={styles.container}>
      <EditModal
        value={activeTodo.value}
        modalVisible={modal}
        onCancel={() => setModal(false)}
        onSave={handleSave}
      ></EditModal>
      <View style={styles.goBackContainer}>
        <Button onPress={goBack} title="Back" color={THEME.DARK} />
      </View>
      <AppCard>
        <AppTextBold>{activeTodo.value}</AppTextBold>
      </AppCard>
      <View style={styles.buttonContainer}>
        <Button
          onPress={() => removeItem(activeTodo.id)}
          title="Remove"
          color={THEME.DARK}
        />
        <Button
          onPress={() => setModal(true)}
          title="Edit"
          color={THEME.DARK}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goBackContainer: {
    flexDirection: "row",
    paddingVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
});
