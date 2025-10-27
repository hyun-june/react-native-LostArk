import { useRoute } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import { useGetCharacter } from "../hooks/useGetCharacter";
import Tab from "../components/Tab";
import { CharRouteProp } from "../models/routeType";
import CharacterForm from "./../components/CharacterForm";
import AppLayout from "../components/Layout/AppLayout";
import CharEquipment from "../components/CharacterFormComp/CharEquipment";

const Character = () => {
  const route = useRoute<CharRouteProp>();
  const { searchId } = route.params || {};
  // const { data, isLoading, error } = useGetCharacter(searchId);
  const { data, isLoading, error } = useGetCharacter("피엇음");
  // console.log("🚀 ~ Character ~ data:", data);

  if (error) {
    console.error("error", error);
  }

  // const test = data?.ArmoryEquipment;
  // const testTool = test[0]?.Tooltip;
  // const jsonData = JSON.parse(testTool);
  // console.log("🚀 ~ Character ~ jsonData:", jsonData);
  // const rawValue = jsonData.Element_005?.value || "";
  // const cleanText = rawValue.replace(/<[^>]*>/g, "");
  // console.log("🚀 ~ Character ~ cleanText:", cleanText.match(/\d+/)[0]);

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
      {/* <Tab data={data} /> */}
      {/* <CharacterForm charProfile={data?.ArmoryProfile} /> */}
      <CharEquipment
        data={data?.ArmoryEquipment}
        img={data?.ArmoryProfile.CharacterImage}
      />
    </AppLayout>
  );
};

export default Character;
