import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { useGetCharacter } from "../hooks/useGetCharacter";
import Tab from "../components/Tab";
import { CharRouteProp } from "../models/routeType";

const Character = () => {
  const route = useRoute<CharRouteProp>();
  const { searchId } = route.params || {};
  const { data } = useGetCharacter(searchId);

  return (
    <View>
      <Tab data={data} />
    </View>
  );
};

export default Character;
