import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import EquipmentItem from "./EquipmentItem";
import AccessoryItem from "./AccessoryItem";

const CharEquipment = ({ data, img }) => {
  const equipmentOrder = [1, 5, 2, 3, 4, 0];
  const equipMentData = [...data]?.slice(0, 6);
  const renderEquipment = equipmentOrder.map((i) => equipMentData[i]);
  // console.log("🚀 ~ CharEquipment ~ renderEquipment:", renderEquipment);

  const accessoryData = [...data].slice(6, 11);
  // console.log("🚀 ~ CharEquipment ~ accessoryData:", accessoryData);

  return (
    <View style={styles.container}>
      <View
        style={{
          height: "100%",
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flex: 1,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            style={{
              height: "100%",
              // transform: [{ translateY: -50 }],
            }}
            source={{
              uri: img,
            }}
          />
          <View style={{ position: "absolute", gap: 10, top: 10, left: 5 }}>
            {renderEquipment.map((item, i) => {
              return <EquipmentItem data={item} key={i} />;
            })}
          </View>
          <View style={{ position: "absolute", gap: 10, top: 10, right: 5 }}>
            {accessoryData.map((item, i) => (
              <AccessoryItem data={item} key={i} />
            ))}
            <AccessoryItem data={data[11]} type="rock" />
            <AccessoryItem data={data[12]} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CharEquipment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  textBox: {
    borderWidth: 2,
    borderColor: "#757575",
    color: "white",

    paddingHorizontal: 5,
    textAlign: "center",
    fontSize: 10,
  },
});
