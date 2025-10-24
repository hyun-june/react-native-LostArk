import { View, StyleSheet } from "react-native";
import { CharFormProps } from "./../models/charType";
import CharCard from "./CharacterFormComp/CharCard";

const CharacterForm = ({ charProfile }: CharFormProps) => {
  // console.log("🚀 ~ CharacterForm ~ data:", charProfile);

  return (
    <View style={style.charCotainer}>
      <CharCard charProfile={charProfile} />
    </View>
  );
};

export default CharacterForm;

const style = StyleSheet.create({
  charCotainer: {},
});
