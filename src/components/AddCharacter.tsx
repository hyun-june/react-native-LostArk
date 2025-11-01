import { View, TextInput, Text } from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "../theme/theme";
import useSearchStore from "../store/useSearchStore";

interface AddCharacterProps {
  onClose: () => void;
}

const AddCharacter = ({ onClose }: AddCharacterProps) => {
  const [inputValue, setInputValue] = useState("");
  const { updateChar } = useSearchStore();

  const handleSubmit = async () => {
    if (inputValue === "") return;
    try {
      await AsyncStorage.setItem("myChar", inputValue.trim());
      updateChar(inputValue);
      onClose();
    } catch (error) {
      console.log("AsyncStorage save error:", error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="등록할 아이디를 입력해주세요."
        style={{
          color: theme.text.black,
          backgroundColor: "white",
          height: 50,
          width: 300,
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 20,
          fontSize: 20,
          lineHeight: 25,
        }}
        value={inputValue}
        onChangeText={setInputValue}
        returnKeyType="done"
        onSubmitEditing={() => handleSubmit()}
      />
    </View>
  );
};

export default AddCharacter;
