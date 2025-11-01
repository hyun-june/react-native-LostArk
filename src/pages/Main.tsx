import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import { theme } from "./../theme/theme";
import AppLayout from "../components/Layout/AppLayout";
import CharEquipment from "../components/CharacterFormComp/CharEquipment";
import { useGetCharacter } from "../hooks/useGetCharacter";
import CharCard from "../components/CharacterFormComp/CharCard";
import useSearchStore from "../store/useSearchStore";
import { useEffect } from "react";

const Main = () => {
  const myChar = useSearchStore((state) => state.myChar);
  const fetchChar = useSearchStore((state) => state.fetchChar);
  useEffect(() => {
    fetchChar();
  }, []);
  return (
    <AppLayout>
      <Text style={{ color: "white" }}>Main</Text>
      <Text style={{ color: "white" }}>{myChar}</Text>
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
