import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Entypo, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { AppCard } from "../ui/AppCard";
import { THEME } from "../constans";
import { EditModal } from "../components/EditModal";
import { AppTextBold } from "../ui/AppTextBold";
import { AppButton } from "../ui/AppButton";

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
        <AppButton onPress={goBack} color={THEME.DARK}>
          <Entypo name="back" size={24} color={THEME.RED} />
        </AppButton>
      </View>
      <AppCard>
        <AppTextBold>{activeTodo.value}</AppTextBold>
      </AppCard>
      <View style={styles.buttonContainer}>
        <AppButton onPress={() => removeItem(activeTodo.id)} color={THEME.RED}>
          <MaterialCommunityIcons
            name="delete-circle"
            size={24}
            color="black"
          />
        </AppButton>
        <AppButton onPress={() => setModal(true)} color={THEME.ADD_BUTTON}>
          <Feather name="edit-3" size={24} color="black" />
        </AppButton>
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
