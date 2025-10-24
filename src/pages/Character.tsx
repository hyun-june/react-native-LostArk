import { useRoute } from "@react-navigation/native";
import { ActivityIndicator, View } from "react-native";
import { useGetCharacter } from "../hooks/useGetCharacter";
import Tab from "../components/Tab";
import { CharRouteProp } from "../models/routeType";
import CharacterForm from "./../components/CharacterForm";

const Character = () => {
  const route = useRoute<CharRouteProp>();
  const { searchId } = route.params || {};
  const { data, isLoading } = useGetCharacter(searchId);

  if (isLoading)
    return (
      <ActivityIndicator
        style={{ top: 150, transform: [{ scale: 2 }] }}
        size="large"
        color="#fff"
      />
    );

  return (
    <View>
      {/* <Tab data={data} /> */}
      <CharacterForm charProfile={data?.ArmoryProfile} />
    </View>
  );
};

export default Character;
