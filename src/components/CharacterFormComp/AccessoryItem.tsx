import { StyleSheet, View, Text } from "react-native";
import EquipmentBox from "./EquipmentBox";
import { cleanText, jsonFormatter } from "../../utils/formatJsonData";
import { theme } from "../../theme/theme";

const AccessoryItem = ({ ...props }) => {
  const { data, type } = props;
  // console.log("🚀 ~ AccessoryItem ~ data:", data.Tooltip);

  const formatData = jsonFormatter(data?.Tooltip);

  let rockOptions = [];

  if (type === "rock") {
    const base = formatData?.Element_006?.value?.Element_000?.contentStr;
    rockOptions = [
      cleanText(base?.Element_000?.contentStr ?? "").replace(/[\[\]]/g, ""),
      cleanText(base?.Element_001?.contentStr ?? "").replace(/[\[\]]/g, ""),
    ];
  }

  const qualityValue = formatData.Element_001.value.qualityValue;

  const selectColor =
    qualityValue === 100 ? "gold" : qualityValue >= 90 ? "purple" : "blue";

  return (
    <View style={{ flexDirection: "row", gap: 10 }}>
      {qualityValue && (
        <View style={{ justifyContent: "space-between", paddingVertical: 5 }}>
          <View style={[styles.diamond, styles[selectColor]]} />
          <View style={[styles.diamond, styles.purple]} />
          <View style={[styles.diamond, styles.gold]} />
        </View>
      )}
      {/* {type === "rock" ? (
        <View>
          <Text style={{ color: "white" }}>{rockOptions}</Text>
        </View>
      ) : null} */}
      <View style={{ marginLeft: "auto" }}>
        <EquipmentBox {...props} qualityValue={qualityValue} />
      </View>
    </View>
  );
};

export default AccessoryItem;

const styles = StyleSheet.create({
  diamond: {
    width: 15,
    height: 15,
    transform: [{ rotate: "45deg" }],
    borderWidth: 2,
  },
  blue: theme.box.blue,
  purple: theme.box.purple,
  gold: theme.box.gold,
});
