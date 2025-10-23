import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Main from "./src/pages/Main";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import Character from "./src/pages/Character";
import { theme } from "./src/theme/theme";
import Header from "./src/components/Header";
import { SafeAreaProvider } from "react-native-safe-area-context";

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
          <Stack.Navigator
            initialRouteName="Main"
            screenOptions={{ header: ({ route }) => <Header /> }}
          >
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="Char" component={Character} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
