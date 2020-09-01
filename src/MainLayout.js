import React, { useContext } from "react";
import { StyleSheet, View, Keyboard } from "react-native";
import { Navbar } from "./components/Navbar";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { ScreenContext } from "./context/screen/screenContext";
import screenTypes from "./context/screen/screenTypes";
import { ActiveTodoIdState } from "./context/activeTodoId/ActiveTodoIdState";
import { ErrorScreen } from "./screens/ErrorScreen";
import { ActiveTodoIdContext } from "./context/activeTodoId/activeTodoIdContext";
import { AuthScreen } from "./screens/AuthScreen";

export const MainLayout = () => {
  const { screenState } = useContext(ScreenContext);
  const { activeTodoId } = useContext(ActiveTodoIdContext);

  let content;
  const token = 0;

  if (token) {
    switch (true) {
      case screenState === screenTypes.AUTH_SCREEN:
        break;
      case screenState === screenTypes.MAIN_SCREEN:
        content = <MainScreen></MainScreen>;
        break;
      case screenState === screenTypes.TODO_SCREEN && !!activeTodoId:
        content = <TodoScreen></TodoScreen>;
        break;
      case screenState === screenTypes.ERROR_SCREEN:
        content = <ErrorScreen></ErrorScreen>;
        break;
      default:
        content = <MainScreen></MainScreen>;
    }
  } else {
    switch (true) {
      case screenState === screenTypes.AUTH_SCREEN:
        content = <AuthScreen></AuthScreen>;
        break;
      default:
        content = <AuthScreen></AuthScreen>;
    }
  }

  return (
    <View onTouchStart={Keyboard.dismiss} style={styles.container}>
      <Navbar title="My ToDo :)" />
      <View style={styles.wrapper}>{content}</View>
    </View>
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
