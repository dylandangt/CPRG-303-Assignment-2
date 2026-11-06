import { Platform } from "react-native";

export const colors = {
  green: "#2d5d2a",
  darkGreen: "#1f3a1c",
  lime: "#d7f31d",
  red: "#e30613",
  white: "#ffffff",
  background: "#f9f9f9",
  beige: "#f5e9de",
  text: "#111111",
  border: "#d6d6d6",
  tabActive: "#d0eadf",
  tabInactive: "#2b2b2b",
  disabled: "#d0d0d0",
  disabledText: "#555555",
};
export const fonts = {
  display: Platform.select({
    ios: "AvenirNextCondensed-Heavy",
    android: "sans-serif-condensed",
    default: "Impact, 'Arial Narrow', sans-serif",
  }) as string,
};

export const textSizes = {
  small: 14,
  body: 16,
  large: 18,
  title: 22,
  header: 28,
  hero: 36,
};

export const spacing = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24 };

export const radius = { sm: 8, md: 14, lg: 22, pill: 999 };

export const displayText = {
  fontFamily: fonts.display,
  fontWeight: Platform.OS === "ios" ? undefined : ("700" as const),
  textTransform: "uppercase" as const,
};
