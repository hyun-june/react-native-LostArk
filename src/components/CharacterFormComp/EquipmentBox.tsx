import { View, Image, StyleSheet } from "react-native";
import { theme } from "../../theme/theme";
import { isWeb } from "../../utils/platform";

const EquipmentBox = ({ ...props }) => {
  const { data: item } = props;

  return (
    <View>
      <Image
        style={[
          styles.equipmentBox,
          { width: isWeb ? 50 : 40, height: isWeb ? 50 : 40 },
        ]}
        source={{ uri: item?.Icon }}
      ></Image>
    </View>
  );
};

export default EquipmentBox;

const styles = StyleSheet.create({
  equipmentBox: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#757575",
    backgroundColor: "#c1b086",
  },

  blue: theme.box.blue,
  purple: theme.box.purple,
  gold: theme.box.gold,
});
