import { StyleSheet, View, Text } from "react-native";
import EquipmentBox from "./EquipmentBox";
import { cleanText, jsonFormatter } from "../../utils/formatJsonData";
import { theme } from "../../theme/theme";

const AccessoryItem = ({ ...props }) => {
  const { data, type } = props;
  // console.log("🚀 ~ AccessoryItem ~ data:", data.Tooltip);

  const boxStyles = {
    gold: theme.box.gold,
    purple: theme.box.purple,
    blue: theme.box.blue,
  };

  const textStyles = {
    gold: theme.text.yellow,
    purple: theme.text.purple,
    blue: theme.text.blue,
  };

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
    <View style={{ flexDirection: "row", gap: 5 }}>
      <View style={{ marginLeft: "auto" }}>
        <EquipmentBox {...props} qualityValue={qualityValue} />
      </View>
      {qualityValue && (
        <View style={{ justifyContent: "space-around" }}>
          <View style={styles.diamondText}>
            <View style={[styles.diamond, boxStyles[selectColor]]} />
            <Text style={{ color: textStyles[selectColor], fontSize: 8 }}>
              낙인력 +8%
            </Text>
          </View>

          <View style={styles.diamondText}>
            <View style={[styles.diamond, boxStyles[selectColor]]} />
            <Text
              style={{
                color: textStyles[selectColor],
                fontSize: 8,
                width: 100,
              }}
            >
              세레나데, 신앙, 조화 게이지 획득량 +6.00%
            </Text>
          </View>
          <View style={styles.diamondText}>
            <View style={[styles.diamond, boxStyles[selectColor]]} />
            <Text style={{ color: textStyles[selectColor], fontSize: 8 }}>
              아군 공격력 강화 효과 +5.00%
            </Text>
          </View>
        </View>
      )}
      {/* {type === "rock" ? (
        <View>
          <Text style={{ color: "white" }}>{rockOptions}</Text>
        </View>
      ) : null} */}
    </View>
  );
};

export default AccessoryItem;

const styles = StyleSheet.create({
  diamond: {
    width: 8,
    height: 8,
    transform: [{ rotate: "45deg" }],
    borderWidth: 2,
  },
  diamondText: {
    flexDirection: "row",
    gap: 5,
  },
});
