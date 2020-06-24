import React, { useContext, useState } from "react";
import { StyleSheet, View, Alert, Keyboard } from "react-native";
import { Navbar } from "./components/Navbar";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { ScreenContext } from "./context/screen/screenContext";
import screenTypes from "./context/screen/screenTypes";
import { ActiveTodoIdContext } from "./context/activeTodoIdContext/ActiveTodoIdContext";

export const MainLayout = () => {
  const { screenState } = useContext(ScreenContext);
  const [activeTodoId, setActiveTodoId] = useState(null);

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

  let contetn;

  switch (true) {
    case screenState === screenTypes.AUTH_SCREEN:
      break;
    case screenState === screenTypes.MAIN_SCREEN:
      contetn = <MainScreen></MainScreen>;
      break;
    case screenState === screenTypes.TODO_SCREEN && !!activeTodoId:
      contetn = <TodoScreen></TodoScreen>;
      break;
    default:
      contetn = <MainScreen></MainScreen>;
  }

  return (
    <ActiveTodoIdContext.Provider value={{ activeTodoId, setActiveTodoId }}>
      <View onTouchStart={Keyboard.dismiss} style={styles.container}>
        <Navbar title="My ToDo :)" />
        <View style={styles.wrapper}>{contetn}</View>
      </View>
    </ActiveTodoIdContext.Provider>
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
