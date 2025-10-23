import { View, Text, Image, StyleSheet } from "react-native";
import { CharInfoProps } from "../models/charType";
import { CharFormProps } from "./../models/charType";

const CharacterForm = ({ Char }: CharFormProps) => {
  console.log("🚀 ~ CharacterForm ~ data:", Char);

  const charData = [
    { label: "직업", data: Char?.CharacterClassName },
    { label: "원정대", data: Char?.ExpeditionLevel },
    { label: "닉네임", data: Char?.CharacterName },
    { label: "길드", data: Char?.GuildName },
    { label: "전투력", data: Char?.CombatPower },
  ];

  const CharInfo = ({ label, data }: CharInfoProps) => {
    return (
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        }}
      >
        <Text style={style.charInfoLabel}>{label}</Text>
        <Text style={{ color: "white", fontSize: 20 }}>{data}</Text>
      </View>
    );
  };

  return (
    <View style={style.charCotainer}>
      <View style={style.charWrapper}>
        <Image source={{ uri: Char?.CharacterImage }} style={style.charImg} />
        <View style={style.charTextOverlay}>
          {charData.map(({ label, data }, index) => (
            <CharInfo key={index} label={label} data={data} />
          ))}
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
    height: 400,
    transform: [{ scale: 1.6 }, { translateY: 70 }, { translateX: 60 }],
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
  charInfoLabel: {
    backgroundColor: "#333",
    borderRadius: 50,
    color: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 20,
    width: 100,
    textAlign: "center",
  },
});
