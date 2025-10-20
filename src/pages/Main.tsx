import { View } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import { useGetCharacter, useGetRoster } from "../hooks/useGetCharacter";
import Tab from "../components/Tab";

const Main = () => {
  const [text, setText] = useState<string>("");
  const [searchId, setSearchId] = useState<string>("");

  // const { data, isLoading, isError, error } = useGetRoster(searchId);
  // console.log("🚀 ~ Main ~ data:", data);

  const { data } = useGetCharacter(searchId);
  // console.log("🚀 ~ Main ~ data:", data);

  const onSearch = () => {
    if (!text.trim()) return;
    setSearchId(text);
  };

  return (
    <View>
      <SearchBar text={text} setText={setText} onSearch={onSearch} />
      <Tab data={data} />
    </View>
  );
};

export default Main;
