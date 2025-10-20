import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "./src/theme/theme";
import SearchBar from "./src/components/SearchBar";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App() {
  const [text, setText] = useState<string>("");

  const onSearch = () => {
    console.log(text, "test");
  };

  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <SearchBar text={text} setText={setText} onSearch={onSearch} />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.black,
    paddingHorizontal: 20,
  },
});
