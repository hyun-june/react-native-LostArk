import { CharInfoProps } from "../../models/charType";
import { View, Text, StyleSheet } from "react-native";
import { isWeb } from "../../utils/platform";

const CharInfo = ({ label, data }: CharInfoProps) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginRight: 20,
        gap: 3,
      }}
    >
      <View
        style={{
          width: 1,
          height: "80%",
          backgroundColor: "white",
        }}
      />

      <Text
        style={[
          styles.charInfoLabel,
          { fontSize: isWeb ? 16 : 12, width: isWeb ? 45 : 35 },
        ]}
      >
        {label}
      </Text>
      <Text
        style={{
          color: "white",
          fontSize: isWeb ? 16 : 14,
        }}
      >
        {data}
      </Text>
    </View>
  );
};

export default CharInfo;

const styles = StyleSheet.create({
  charInfoLabel: {
    color: "white",
    fontWeight: "bold",
    marginRight: 3,
  },
});
