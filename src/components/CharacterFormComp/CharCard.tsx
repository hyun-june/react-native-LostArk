import { View, Text, Image, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import CharInfo from "./CharInfo";
import { CharFormProps } from "../../models/charType";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const CharCard = ({ charProfile }: CharFormProps) => {
  return (
    <View>
      <View style={style.charHeader}>
        <Text style={style.charHeaderText}>
          #{charProfile?.CharacterClassName}
        </Text>
        <Text style={style.charHeaderText}>#빛의 기사</Text>
      </View>

      <View style={style.charWrapper}>
        <View>
          <View
            style={{
              flexDirection: "row",
              gap: 5,
              alignItems: "flex-end",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                gap: 10,
              }}
            >
              <FontAwesome6 name="user-large" size={24} color="white" />
              <Text
                style={{
                  ...style.charInfoText,
                  fontSize: 24,
                }}
              >
                {charProfile?.CharacterName}
              </Text>
            </View>

            <Text
              style={{
                ...style.charInfoText,
                fontSize: 20,
              }}
            >
              #{charProfile?.ServerName}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              marginVertical: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: charProfile?.CharacterImage }}
              style={style.charImg}
            />
            <View style={{ gap: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo
                  name="shield"
                  size={24}
                  color="white"
                  style={style.charIcon}
                />
                <Text
                  style={{
                    ...style.charInfoText,
                  }}
                >
                  {charProfile?.ItemAvgLevel}
                </Text>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons
                  name="sword-cross"
                  size={24}
                  color="white"
                  style={style.charIcon}
                />
                <Text
                  style={{
                    ...style.charInfoText,
                  }}
                >
                  {charProfile?.CombatPower}
                </Text>
              </View>
              <View>
                <CharInfo label="칭호" data={charProfile?.Title} />
                <CharInfo label="영지" data={charProfile?.TownName} />
                <CharInfo label="길드" data={charProfile?.GuildName} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CharCard;

const style = StyleSheet.create({
  charHeader: {
    flexDirection: "row",
    gap: 20,
    marginBottom: 10,
  },
  charHeaderText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  charWrapper: {
    width: "100%",
    height: 240,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#757575",
    justifyContent: "space-between",
    position: "relative",
  },
  charImg: {
    width: 150,
    height: 180,
    zIndex: 10,
  },

  charInfoText: {
    color: "white",
    fontSize: 24,
  },
  charIcon: {
    fontSize: 30,
    marginRight: 10,
  },
});
