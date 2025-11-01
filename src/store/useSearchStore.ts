import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

const useSearchStore = create((set) => ({
  myChar: "",
  updateChar: (value) => set({ myChar: value }),
  fetchChar: async () => {
    const value = await AsyncStorage.getItem("myChar");
    if (value) set({ myChar: value });
  },
}));

export default useSearchStore;
