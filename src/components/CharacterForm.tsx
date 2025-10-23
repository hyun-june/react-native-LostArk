import { View, Text, Image, StyleSheet } from "react-native";
import { CharFormProps } from "./../models/charType";
import CharInfo from "./CharacterFormComp/CharInfo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CharacterForm = ({ Char }: CharFormProps) => {
  console.log("🚀 ~ CharacterForm ~ data:", Char);

  const charData = [
    { label: "직업", data: Char?.CharacterClassName },
    { label: "원정대", data: Char?.ExpeditionLevel },
    { label: "닉네임", data: Char?.CharacterName },
    { label: "길드", data: Char?.GuildName },
    { label: "전투력", data: Char?.CombatPower },
    { label: "아이템 레벨", data: Char?.ItemAvgLevel },
    { label: "서버", data: Char?.ServerName },
    { label: "칭호", data: Char?.Title },
    { label: "영지 이름", data: Char?.TownName },
  ];

  return (
    <View style={style.charCotainer}>
      <View style={style.charWrapper}>
        <Image source={{ uri: Char?.CharacterImage }} style={style.charImg} />
        <View style={style.charTextOverlay}>
          {charData.map(({ label, data }, index) => (
            <CharInfo key={index} label={label} data={data} />
          ))}
          <MaterialCommunityIcons name="sword-cross" size={24} color="white" />
        </View>
      </View>
    </View>
  );
};

export default CharacterForm;

const style = StyleSheet.create({
  charCotainer: { marginVertical: 20 },
  charWrapper: {
    width: "100%",
    height: 300,
    overflow: "hidden",
    position: "relative",
  },
  charImg: {
    width: "100%",
    height: 380,
    transform: [{ scale: 1.5 }, { translateY: 70 }, { translateX: 60 }],
    zIndex: 10,
  },
  charTextOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 99,
    height: "100%",
    padding: 10,
    gap: 10,
  },
});
