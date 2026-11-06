import { colors, textSizes } from "@/theme/theme";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  /** filled = green, outline = green border, white = white fill, link = text only */
  variant?: "filled" | "outline" | "white" | "link";
  style?: StyleProp<ViewStyle>;
};

export function AppButton({
  label,
  onPress,
  variant = "filled",
  style,
}: Props) {
  const isFilled = variant === "filled";
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.base,
        isFilled && styles.filled,
        variant === "outline" && styles.outline,
        variant === "white" && styles.white,
        variant === "link" && styles.link,
        style,
      ]}
    >
      <Text
        style={[styles.text, { color: isFilled ? colors.white : colors.green }]}
      >
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    minHeight: 52,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  filled: { backgroundColor: colors.green },
  outline: {
    borderWidth: 1.5,
    borderColor: colors.green,
    backgroundColor: colors.background,
  },
  white: {
    borderWidth: 1.5,
    borderColor: colors.green,
    backgroundColor: colors.white,
  },
  link: { minHeight: 36 },
  text: { fontSize: textSizes.large, fontWeight: "700" },
});
