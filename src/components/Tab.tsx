import { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { theme } from "../theme/theme";
import CharacterForm from "./CharacterForm";

const Tab = ({ data }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);
  //   console.log("🚀 ~ Tab ~ data:", data);
  const headerList = [
    { label: "TAB1", des: <CharacterForm data={data?.ArmoryProfile} /> },
    { label: "Tab2", des: 22 },
  ];

  return (
    <View>
      <View style={{ flexDirection: "row" }}>
        {headerList.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => setCurrentTab(index)}>
            <Text
              style={[
                styles.tabHeader,
                currentTab === index ? styles.activeTab : styles.inactiveTab,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ paddingVertical: 20 }}>
        <Text style={styles.tabBody}>{headerList[currentTab].des}</Text>
      </View>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tabHeader: {
    marginTop: 20,
    fontSize: 25,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: "white",
  },
  activeTab: {
    color: "white",
    borderBottomWidth: 0,
  },
  inactiveTab: {
    color: theme.text.gray,
    borderBottomWidth: 2,
  },
  tabBody: {
    color: "white",
  },
});
