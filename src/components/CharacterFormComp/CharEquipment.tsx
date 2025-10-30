import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import EquipmentItem from "./EquipmentItem";
import AccessoryItem from "./AccessoryItem";
import {
  cleanText,
  getLastNumber,
  jsonFormatter,
} from "../../utils/formatJsonData";
import { theme } from "../../theme/theme";

const CharEquipment = ({ data }) => {
  // console.log("🚀 ~ CharEquipment ~ data:", data);
  const equipmentOrder = [1, 5, 2, 3, 4, 0];
  const equipMentData = [...data]?.slice(0, 6);
  // console.log("🚀 ~ CharEquipment ~ equipMentData:", equipMentData);
  const renderEquipment = equipmentOrder.map((i) => equipMentData[i]);
  // console.log("🚀 ~ CharEquipment ~ renderEquipment:", renderEquipment);

  const accessoryData = [...data].slice(6, 11);
  // console.log("🚀 ~ CharEquipment ~ accessoryData:", accessoryData);

  const totalTranscend = getLastNumber(
    cleanText(
      jsonFormatter(data[0]?.Tooltip).Element_010.value.Element_000.contentStr
        .Element_001.contentStr
    )
  );

  return (
    <View style={styles.container}>
      <View style={{ gap: 10 }}>
        {renderEquipment.map((item, i) => {
          return <EquipmentItem data={item} key={i} />;
        })}
        <ImageBackground
          source={{
            uri: "https://cdn-lostark.game.onstove.com/2018/obt/assets/images/pc/profile/bg_transcendence.png?2d5c0eb8e6586d9284b9",
          }}
          imageStyle={{ width: 150, height: 30 }}
        >
          <Text
            style={{
              marginLeft: 35,
              color: theme.text.yellow,
              justifyContent: "center",
              lineHeight: 30,
              fontWeight: "bold",
            }}
          >
            {totalTranscend}
          </Text>
        </ImageBackground>
      </View>
      <View style={{ gap: 10 }}>
        {accessoryData.map((item, i) => (
          <AccessoryItem data={item} key={i} />
        ))}
        <AccessoryItem data={data[11]} type="rock" />
        <AccessoryItem data={data[12]} />
      </View>
    </View>
  );
};

export default CharEquipment;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
});
