import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { AddItem } from "../components/AddItem";
import { Todo } from "../components/Todo";

export const MainScreen = ({ addTodo, todos, removeItem, activeTodo }) => {
  let content = (
    <FlatList
      data={todos}
      renderItem={({ item }) => (
        <Todo todo={item} onRemove={removeItem} activeTodo={activeTodo} />
      )}
      keyExtractor={(item) => item.id}
    ></FlatList>
  );

  if (!todos.length) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          style={styles.img}
          source={require("../../assets/no-items.png")}
        />
      </View>
    );
  }
  return (
    <>
      <AddItem addItem={addTodo} />
      {content}
    </>
  );
};

const styles = StyleSheet.create({
  imgWrap: {
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});
