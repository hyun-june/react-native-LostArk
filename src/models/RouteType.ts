import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Main: undefined;
  Char: { searchId: string };
};

export type HeaderRouteProp = RouteProp<
  RootStackParamList,
  keyof RootStackParamList
>;

export type CharRouteProp = RouteProp<RootStackParamList, "Char">;

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
