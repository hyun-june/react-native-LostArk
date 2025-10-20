import { View, Text, Image } from "react-native";

const CharacterForm = ({ data }) => {
  console.log("🚀 ~ CharacterForm ~ data:", data);

  return (
    <View>
      <Image
        source={{ uri: data?.CharacterImage }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={{ color: "white" }}>{data?.CharacterClassName}</Text>
    </View>
  );
};

export default CharacterForm;
