import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../pages/Main";
import Character from "../pages/Character";
import Header from "./Header";
import { useState } from "react";
import { Modal, Pressable, View } from "react-native";
import AddCharacter from "./AddCharacter";

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          header: ({ route }) => <Header />,
        }}
      >
        <Tab.Screen
          name="Home"
          component={Main}
          options={{ tabBarLabel: "홈" }}
        />
        <Tab.Screen
          name="Character"
          component={Character}
          options={{ tabBarLabel: "캐릭터" }}
        />
        <Tab.Screen
          name="MyChar"
          component={View}
          options={{ tabBarLabel: "숙제" }}
        />
        <Tab.Screen
          name="AddChar"
          component={View}
          options={{ tabBarLabel: "등록" }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
              setShowModal((prev) => !prev);
            },
          }}
        />
      </Tab.Navigator>
      <Modal visible={showModal} transparent animationType="slide">
        <Pressable
          style={{
            flex: 1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setShowModal(false)}
        >
          <AddCharacter onClose={() => setShowModal(false)} />
        </Pressable>
      </Modal>
    </>
  );
};

export default BottomTab;
