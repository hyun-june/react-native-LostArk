import React from "react";
import { CharInfoProps } from "../../models/charType";
import { View, Text, StyleSheet } from "react-native";

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

export default CharInfo;

const style = StyleSheet.create({
  charInfoLabel: {
    backgroundColor: "#333",
    borderRadius: 50,
    color: "white",
    paddingVertical: 3,
    fontSize: 20,
    width: 80,
    textAlign: "center",
  },
});
