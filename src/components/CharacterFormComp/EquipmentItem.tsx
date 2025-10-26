import { View, Text, StyleSheet } from "react-native";
import EquipmentBox from "./EquipmentBox";

const EquipmentItem = ({ ...props }) => {
  const { data: item } = props;

  return (
    <View style={{ flexDirection: "row", gap: 5 }}>
      <EquipmentBox {...props} data={item} />
      <View style={{ gap: 10 }}>
        <View>
          <Text style={styles.textBox}>{item?.Name}x30</Text>
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
