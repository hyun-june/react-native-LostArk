import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { theme } from "../../theme/theme";

const EquipmentBox = ({ ...props }) => {
  const { data: item, qualityValue } = props;

  const chowol = 11;

  const selectColor =
    qualityValue === 100 ? "gold" : qualityValue >= 90 ? "purple" : "blue";

  return (
    <View>
      <ImageBackground
        style={styles.equipmentBox}
        source={{ uri: item?.Icon }}
        imageStyle={styles.equipMentImg}
      >
        {chowol && (
          <View style={styles.equipmentBoxTop}>
            <Image
              style={{
                width: 15,
                height: 15,
                position: "absolute",
                left: 3,
              }}
              source={{
                uri: "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/common/game/ico_tooltip_transcendence.png",
              }}
            />
            <Text style={{ color: "white", fontWeight: "bold" }}>21</Text>
          </View>
        )}
        {qualityValue >= 0 && (
          <View style={[styles.equipmentBoxBottom, styles[selectColor]]}>
            <Text style={{ color: "white", fontWeight: "bold" }}>
              {qualityValue}
            </Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default EquipmentBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  equipMentImg: {
    resizeMode: "contain",
    width: 50,
    height: 60,
    marginTop: 5,
    marginLeft: 2,
  },

  equipmentBox: {
    width: 60,
    height: 80,
    borderWidth: 2,
    borderColor: "#757575",
    backgroundColor: "#c1b086",
  },
  equipmentBoxTop: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#757575",
    alignItems: "center",
    backgroundColor: "black",
    justifyContent: "center",
    position: "relative",
  },
  equipmentBoxBottom: {
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#757575",
    backgroundColor: "#FFB639",
    justifyContent: "center",
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
  blue: theme.box.blue,
  purple: theme.box.purple,
  gold: theme.box.gold,
});
