import { View, StyleSheet, Text } from "react-native";
import { theme } from "./../theme/theme";

const Main = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>Main</Text>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.background.black,
  },
});
