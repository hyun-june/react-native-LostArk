import { View, Image, StyleSheet } from "react-native";
import { theme } from "../../theme/theme";
import { useScreen } from "../../hooks/useScreen";

const EquipmentBox = ({ ...props }) => {
  const { data: item } = props;
  const { isDesktopWeb } = useScreen();

  return (
    <View>
      <Image
        style={[
          styles.equipmentBox,
          { width: isDesktopWeb ? 50 : 40, height: isDesktopWeb ? 50 : 40 },
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
