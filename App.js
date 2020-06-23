import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { TodoState } from "./src/context/todo/TodoState";
import { MainLayout } from "./src/MainLayout";

async function loadApp() {
  await Font.loadAsync({
    "Os-reg": require("./assets/fonts/Oswald-Regular.ttf"),
    "Os-bold": require("./assets/fonts/Oswald-Bold.ttf"),
  });
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApp}
        onError={(e) => console.log(e)}
        onFinish={() => setIsReady(true)}
      ></AppLoading>
    );
  }

  return (
    <TodoState>
      <MainLayout></MainLayout>
    </TodoState>
  );
}
