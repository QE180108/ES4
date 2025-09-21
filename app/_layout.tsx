import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "../src/redux/store";
import { ThemeProvider } from "../src/context/ThemeContext";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="tasks" options={{ headerShown: false }} />
          <Stack.Screen name="modal" options={{ presentation: "modal" }} />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
