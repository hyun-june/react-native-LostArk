import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

interface ItemType {
  label: string;
  value: string;
}

const HomeworkDropdown = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string[]>([]);
  const [items, setItems] = useState<ItemType[]>([
    { label: "LV.1720 @발키리 피엇음", value: "@피엇음" },
    { label: "LV.1720 @아르카나 고양이랑츄르", value: "@고양이랑츄르" },
  ]);

  return (
    <View style={styles.box}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        multiple={true}
        mode="BADGE"
        placeholder="캐릭터를 선택해주세요."
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        textStyle={styles.textStyle}
        listItemContainerStyle={styles.listItemContainer}
        listItemLabelStyle={styles.listItemLabel}
        selectedItemLabelStyle={styles.selectedItemLabel}
        arrowColor="white"
        arrowIconStyle={{
          width: 20,
          height: 20,
          tintColor: "white",
        }}
        renderBadgeItem={(item) => (
          <View
            style={{
              backgroundColor: "gray",
              paddingHorizontal: 8,
              paddingVertical: 4,
              borderRadius: 12,
            }}
          >
            <Text style={{ color: "#fff" }}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HomeworkDropdown;

const styles = StyleSheet.create({
  box: {
    marginVertical: 30,
    flex: 1,
    padding: 10,
  },
  dropdown: {
    borderColor: "white",
    backgroundColor: "black",
  },
  placeholderStyle: {
    color: "white",
  },
  textStyle: {
    color: "black",
    fontSize: 16,
  },
  listItemContainer: {
    backgroundColor: "black",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  listItemLabel: {
    color: "white",
  },
  selectedItemLabel: {
    color: "#ffc107",
    fontWeight: "bold",
  },
});
