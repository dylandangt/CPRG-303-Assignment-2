import { colors } from "@/theme/theme";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
  size?: number;
  /** "lime" = lime circle with green plus, "green" = green circle with white plus. */
  tone?: "lime" | "green";
  /** Optional coloured ring around the circle (used on the Home card). */
  ringColor?: string;
};

/** The round "+" button used on cards. */
export function PlusButton({
  onPress,
  size = 34,
  tone = "green",
  ringColor,
}: Props) {
  const isLime = tone === "lime";
  return (
    <Pressable
      onPress={onPress}
      hitSlop={8}
      style={[
        styles.circle,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: isLime ? colors.lime : colors.green,
          borderColor: ringColor ?? "transparent",
          borderWidth: ringColor ? 4 : 0,
        },
      ]}
    >
      <Ionicons
        name="add"
        size={size * 0.8}
        color={isLime ? colors.green : colors.white}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  circle: { alignItems: "center", justifyContent: "center" },
});
