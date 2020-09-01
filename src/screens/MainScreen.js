import React, { useContext, useEffect, useCallback, useState } from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import { AddItem } from "../components/AddItem";
import { Todo } from "../components/Todo";
import { TodoContext } from "../context/todo/todoContext";
import { AppLoader } from "../ui/AppLoader";

export const MainScreen = () => {
  const [didMount, setDidMount] = useState(false);
  const { todos, addTodo, removeItem, getTodos, loading } = useContext(
    TodoContext
  );

  const loadTodos = useCallback(async () => await getTodos(), [getTodos]);
  useEffect(() => {
    setDidMount(true);
    async function fetchApi() {
      await loadTodos();
    }
    fetchApi();

    return () => setDidMount(false);
  }, [loadTodos]);
  const [refreshing, changeRefreshing] = useState(false);

  const handleRefresh = async () => {
    changeRefreshing(true);
    await loadTodos();
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

  if (!todos?.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image
          style={styles.img}
          source={require("../../assets/no-items.png")}
        />
      </View>
    );
  }
  if (!didMount) {
    return null;
  }
  return didMount ? (
    <>
      <AddItem addItem={addTodo} />
      <View style={styles.contentWrap}>
        {loading ? <AppLoader size="large" /> : content}
      </View>
    </>
  ) : null;
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
