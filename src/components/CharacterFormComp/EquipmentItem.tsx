import { View, Text, StyleSheet } from "react-native";
import EquipmentBox from "./EquipmentBox";
import {
  cleanText,
  getFirstNumber,
  getLastNumber,
  jsonFormatter,
} from "../../utils/formatJsonData";

const EquipmentItem = ({ ...props }) => {
  const { data } = props;

  const formatData = jsonFormatter(data?.Tooltip);
  // console.log("🚀 ~ EquipmentItem ~ formatData:", formatData);

  // 품질
  const qualityValue = formatData.Element_001.value.qualityValue;

  // 상급재련
  const advancedLevel = getFirstNumber(cleanText(formatData.Element_005.value));

  // 초월
  const transcend = getLastNumber(
    cleanText(formatData.Element_010.value.Element_000.topStr)
  );

  return (
    <View style={{ flexDirection: "row", gap: 5 }}>
      <EquipmentBox
        {...props}
        data={data}
        qualityValue={qualityValue}
        transcend={transcend}
      />
      <View style={{ gap: 10 }}>
        <View>
          <Text style={styles.textBox}>
            {data?.Name} x{advancedLevel}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Text style={styles.textBox}>공격력 LV5</Text>
          <Text style={styles.textBox}>무기 공격력 LV5</Text>
        </View>
      </View>
    </View>
  );
};

export default EquipmentItem;

const styles = StyleSheet.create({
  textBox: {
    borderWidth: 2,
    borderColor: "#757575",
    color: "white",
    paddingHorizontal: 5,
    textAlign: "center",
    fontSize: 10,
    backgroundColor: "black",
  },
});
