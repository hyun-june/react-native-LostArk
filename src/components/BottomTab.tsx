import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../pages/Main";
import Character from "../pages/Character";
import Header from "./Header";
import { useState } from "react";
import { Modal, Pressable, View } from "react-native";
import AddCharacter from "./AddCharacter";
import useSearchStore from "../store/useSearchStore";
import { useNavigation } from "@react-navigation/native";
import Homework from "./../pages/Homework";

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  const [showModal, setShowModal] = useState(false);
  const { myChar } = useSearchStore();
  const navigation = useNavigation();

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          header: ({ route }) => <Header />,
        }}
      >
        <Tab.Screen
          name="Main"
          component={Main}
          options={{ tabBarLabel: "홈" }}
        />
        <Tab.Screen
          name="Character"
          component={Character}
          options={{ tabBarLabel: "캐릭터" }}
          listeners={({ navigation }) => ({
            tabPress: (e) => {
              if (!myChar) {
                e.preventDefault();
                navigation.navigate("Main");
              }
            },
          })}
        />
        <Tab.Screen
          name="MyChar"
          component={Homework}
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
