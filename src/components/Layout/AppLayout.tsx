import { View } from "react-native";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return <View style={{ padding: 16, flex: 1 }}>{children}</View>;
};

export default AppLayout;
