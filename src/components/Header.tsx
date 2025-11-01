import { useNavigation, useRoute } from "@react-navigation/native";
import { TouchableOpacity, View, StyleSheet } from "react-native";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";
import { HeaderRouteProp, NavigationProp } from "../models/routeType";

const Header = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<HeaderRouteProp>();
  const [text, setText] = useState<string>("");
  const [searchId, setSearchId] = useState<string>("");

  const onSearch = () => {
    if (!text.trim()) return;
    setSearchId(text);
    navigation.navigate("Character", { searchId: text });
  };

  const isMain = route.name === "Main";

  return (
    <View style={isMain ? styles.mainHeader : styles.subHeader}>
      <StatusBar style="light" />
      {route.name !== "Main" ? (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginVertical: 10 }}
        >
          <Ionicons name="chevron-back-sharp" size={24} color="white" />
        </TouchableOpacity>
      ) : null}
      <SearchBar text={text} setText={setText} onSearch={onSearch} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainHeader: {
    marginTop: 60,
    marginBottom: 10,
    paddingHorizontal: 16,
  },
  subHeader: {
    marginTop: 50,
    paddingHorizontal: 16,
  },
});
