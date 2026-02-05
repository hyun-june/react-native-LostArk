import { Platform, useWindowDimensions } from "react-native";

export const useScreen = () => {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === "web";

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  const isDesktopWeb = isWeb && isDesktop;

  return {
    width,
    isWeb,
    isMobile,
    isTablet,
    isDesktop,
    isDesktopWeb,
  };
};
