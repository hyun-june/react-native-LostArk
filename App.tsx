import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./src/pages/Main";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { theme } from "./src/theme/theme";
import Header from "./src/components/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AddCharacter from "./src/components/AddCharacter";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./src/components/BottomTab";

const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: theme.background.black,
    card: "#000000",
    text: "#ffffff",
    primary: "#ffffff",
    border: "#000000",
    notification: "#ffffff",
  },
};

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <NavigationContainer theme={MyTheme}>
          <Stack.Navigator>
            <Stack.Screen
              name="Tabs"
              component={BottomTab}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AddCharacterModal"
              component={AddCharacter}
              options={{ presentation: "modal", headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
