import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "../pages/Main";
import Character from "../pages/Character";
import Header from "./Header";
import useSearchStore from "../store/useSearchStore";
import { useNavigation } from "@react-navigation/native";
import Homework from "./../pages/Homework";
import WeeklyReport from "../pages/WeeklyReport";
import useHomeworkStore from "../store/useHomeworkStore";
import { useEffect } from "react";
import { Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Octicons from "@expo/vector-icons/Octicons";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  const { myChar } = useSearchStore();
  const navigation = useNavigation();

  const { checkWeeklyReset, hasHydrated } = useHomeworkStore();

  useEffect(() => {
    if (hasHydrated) {
      checkWeeklyReset();
    }
  }, [hasHydrated]);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          header: ({ route }) => <Header />,
          tabBarLabelPosition: "below-icon",
          tabBarStyle: {
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Main"
          component={Main}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 2,
                  color: focused ? "white" : "gray",
                }}
              >
                홈
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="home"
                size={24}
                color={focused ? "white" : "gray"}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Character"
          component={Character}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 2,
                  color: focused ? "white" : "gray",
                }}
              >
                캐릭터
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <Octicons
                name="person"
                size={24}
                color={focused ? "white" : "gray"}
              />
            ),
          }}
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
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 2,
                  color: focused ? "white" : "gray",
                }}
              >
                숙제
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="schedule"
                size={24}
                color={focused ? "white" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="WeeklyReport"
          component={WeeklyReport}
          options={{
            tabBarLabel: ({ focused }) => (
              <Text
                style={{
                  fontSize: 12,
                  marginTop: 2,
                  color: focused ? "white" : "gray",
                }}
              >
                주간 레이드
              </Text>
            ),
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="receipt"
                size={24}
                color={focused ? "white" : "gray"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default BottomTab;
