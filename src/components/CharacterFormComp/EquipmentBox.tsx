import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { theme } from "../../theme/theme";

const EquipmentBox = ({ ...props }) => {
  const { data: item, qualityValue } = props;

  const selectColor =
    qualityValue === 100 ? "gold" : qualityValue >= 90 ? "purple" : "blue";

  return (
    <View style={styles.container}>
      <Image style={styles.equipmentBox} source={{ uri: item?.Icon }}></Image>
      {qualityValue >= 0 && (
        <View style={[styles.equipmentBoxBottom, styles[selectColor]]}>
          <Text style={{ color: "white", fontSize: 8 }}>{qualityValue}</Text>
        </View>
      )}
    </View>
  );
};

export default EquipmentBox;

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 40,
  },
  equipmentBox: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#757575",
    backgroundColor: "#c1b086",
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
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  blue: theme.box.blue,
  purple: theme.box.purple,
  gold: theme.box.gold,
});
