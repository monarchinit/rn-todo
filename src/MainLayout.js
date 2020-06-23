import React, { useContext, useState } from "react";
import { StyleSheet, View, Alert, Keyboard } from "react-native";
import { TodoContext } from "./context/todo/todoContext";
import { TodoState } from "./context/todo/TodoState";
import { Navbar } from "./components/Navbar";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { ScreenState } from "./context/screen/ScreenState";
import { ScreenContext } from "./context/screen/screenContext";

export const MainLayout = () => {
  const { todos, addTodo, removeItem, changeSaveTodo } = useContext(
    TodoContext
  );
  const { screenState, changeScreenState } = useContext(ScreenContext);
  const [todoScreen, setTodoScreen] = useState(null);
  console.log(screenState, "screenState");

  //   const removeItem = (id) => {
  //     const activeTodo = todos.find((el) => el.id === id);
  //     Alert.alert(
  //       "Remove Item",
  //       `Are you sure you want to delete "${activeTodo.value}"`,
  //       [
  //         {
  //           text: "Cancel",
  //           style: "cancel",
  //         },
  //         {
  //           text: "OK",
  //           onPress: () => {
  //             setTodoScreen(null);
  //             setTodos((setTodos) => setTodos.filter((el) => el.id !== id));
  //           },
  //         },
  //       ],
  //       { cancelable: false }
  //     );
  //   };

  let contetn = (
    <MainScreen
      addTodo={addTodo}
      todos={todos}
      removeItem={removeItem}
      activeTodo={setTodoScreen}
    ></MainScreen>
  );

  if (!!todoScreen) {
    const activeTodo = todos.find((el) => el.id === todoScreen);
    contetn = (
      <TodoScreen
        goBack={() => setTodoScreen(null)}
        activeTodo={activeTodo}
        removeItem={(id) => {
          setTodoScreen(null);
          removeItem(id);
        }}
        onSave={changeSaveTodo}
      ></TodoScreen>
    );
  }

  return (
    <ScreenState>
      <TodoState>
        <View onTouchStart={Keyboard.dismiss} style={styles.container}>
          <Navbar title="My ToDo :)" />
          <View style={styles.wrapper}>{contetn}</View>
        </View>
      </TodoState>
    </ScreenState>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    padding: 15,
  },
});
