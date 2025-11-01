import { useRoute } from "@react-navigation/native";
import { ActivityIndicator, View, Text } from "react-native";
import { useGetCharacter } from "../hooks/useGetCharacter";
import Tab from "../components/Tab";
import { CharRouteProp } from "../models/routeType";
import CharacterForm from "./../components/CharacterForm";
import AppLayout from "../components/Layout/AppLayout";
import CharEquipment from "../components/CharacterFormComp/CharEquipment";
import CharCard from "../components/CharacterFormComp/CharCard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import useSearchStore from "../store/useSearchStore";

const Character = () => {
  const { myChar, fetchChar } = useSearchStore();
  const route = useRoute<CharRouteProp>();
  const { searchId } = route.params || {};

  const characterId = searchId || myChar;
  // console.log("🚀 ~ Character ~ characterId:", characterId);

  const { data, isLoading, error } = useGetCharacter(characterId);
  // const { data, isLoading, error } = useGetCharacter("피엇음");
  // console.log("🚀 ~ Character ~ data:", data);

  if (error) {
    console.error("error", error);
  }

  if (isLoading)
    return (
      <ActivityIndicator
        style={{ top: 150, transform: [{ scale: 2 }] }}
        size="large"
        color="#fff"
      />
    );

  return (
    <AppLayout>
      {/* <CharacterForm charProfile={data?.ArmoryProfile} /> */}

      {data && (
        <CharCard
          charProfile={data?.ArmoryProfile}
          classEngraving={data?.ArkPassive?.Title}
        />
      )}

      <Tab data={data} />
    </AppLayout>
  );
};

export default Character;
