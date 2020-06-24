import React, { useContext, useEffect, useCallback, useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { AddItem } from "../components/AddItem";
import { Todo } from "../components/Todo";
import { TodoContext } from "../context/todo/todoContext";
import { AppLoader } from "../ui/AppLoader";

export const MainScreen = () => {
  const {
    todos,
    addTodo,
    removeItem,
    getTodos,
    showLoader,
    hideLoader,
    loading,
  } = useContext(TodoContext);
  const loadTodos = useCallback(async () => await getTodos(), [getTodos]);
  useEffect(async () => {
    showLoader();
    await loadTodos();
    hideLoader();
  }, []);
  const [refreshing, changeRefreshing] = useState(false);

  const handleRefresh = async () => {
    changeRefreshing(true);
    await getTodos();
    changeRefreshing(false);
  };

  let content = (
    <FlatList
      data={todos}
      renderItem={({ item }) => <Todo todo={item} onRemove={removeItem} />}
      keyExtractor={(item) => item._id}
      refreshing={refreshing}
      onRefresh={handleRefresh}
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
  console.log(loading, "loading");
  return (
    <>
      <AddItem addItem={addTodo} />
      <View style={styles.contentWrap}>
        {loading ? <AppLoader size="large" /> : content}
      </View>
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
  contentWrap: {
    paddingTop: 10,
  },
});
