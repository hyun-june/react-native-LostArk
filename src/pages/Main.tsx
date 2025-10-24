import { View, StyleSheet, Text } from "react-native";
import { theme } from "./../theme/theme";
import AppLayout from "../components/Layout/AppLayout";

const Main = () => {
  return (
    <AppLayout>
      <Text style={{ color: "white" }}>Main</Text>
    </AppLayout>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.black,
  },
});
