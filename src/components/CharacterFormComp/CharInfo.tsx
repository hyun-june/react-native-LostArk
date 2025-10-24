import React from "react";
import { CharInfoProps } from "../../models/charType";
import { View, Text, StyleSheet } from "react-native";

const CharInfo = ({ label, data }: CharInfoProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20,
        gap: 10,
      }}
    >
      <Text style={style.charInfoLabel}>{label}</Text>
      <Text style={{ color: "white", fontSize: 18 }}>{data}</Text>
    </View>
  );
};

export default CharInfo;

const style = StyleSheet.create({
  charInfoLabel: {
    borderRadius: 50,
    color: "black",
    paddingVertical: 3,
    fontSize: 20,
    fontWeight: "bold",
  },
});
