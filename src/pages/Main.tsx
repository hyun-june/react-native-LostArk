import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { theme } from "./../theme/theme";
import AppLayout from "../components/Layout/AppLayout";
import CharEquipment from "../components/CharacterFormComp/CharEquipment";
import { useGetCharacter } from "../hooks/useGetCharacter";

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
