import { Platform } from "react-native";

/**
 * Papa Johns design tokens.
 * Colours, fonts, text sizes, spacing and radii live here so every screen
 * and component looks the same and can be changed in one place.
 */
export const colors = {
  green: "#2d5d2a", // main brand green
  darkGreen: "#1f3a1c", // rewards hero background
  lime: "#d7f31d", // accent used on green cards
  red: "#e30613", // prices and badges
  white: "#ffffff",
  background: "#f9f9f9",
  beige: "#f5e9de", // deal card background
  text: "#111111",
  border: "#d6d6d6",
  tabActive: "#d0eadf", // light green pill behind the active tab
  tabInactive: "#2b2b2b",
  disabled: "#d0d0d0",
  disabledText: "#555555",
};

/** Condensed heavy font similar to the Papa Johns headings. */
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

/** Spread this into any text style that should use the heading look. */
export const displayText = {
  fontFamily: fonts.display,
  fontWeight: Platform.OS === "ios" ? undefined : ("700" as const),
  textTransform: "uppercase" as const,
};
