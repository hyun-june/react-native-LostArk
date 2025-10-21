import { View, StyleSheet, TextInput } from "react-native";
import { theme } from "../theme/theme";
import { searchProps } from "../models/components";

const SearchBar = ({ text, setText, onSearch }: searchProps) => {
  const onChangeText = (payload: string) => setText(payload);

  return (
    <View>
      <TextInput
        style={styles.searchInput}
        clearButtonMode="while-editing"
        returnKeyType="go"
        value={text}
        onChangeText={onChangeText}
        onSubmitEditing={onSearch}
        placeholder="아이디를 입력해주세요."
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  searchInput: {
    color: theme.text.black,
    backgroundColor: "white",
    height: 50,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    fontSize: 20,
    lineHeight: 25,
  },
});
