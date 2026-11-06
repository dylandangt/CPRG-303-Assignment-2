import { colors, displayText, textSizes } from "@/theme/theme";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

/** Centered screen title with a thin bottom border (Menu / Deals / Rewards). */
export function ScreenHeader({ title }: { title: string }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[styles.header, { paddingTop: insets.top + 14 }]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.white,
    alignItems: "center",
    paddingBottom: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  title: { ...displayText, fontSize: textSizes.header, color: colors.text },
});
