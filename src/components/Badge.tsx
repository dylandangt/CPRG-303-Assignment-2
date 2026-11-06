import { colors, fonts } from "@/theme/theme";
import { StyleSheet, Text, View } from "react-native";

export function Badge({ label }: { label: string }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{label.toUpperCase()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    alignSelf: "flex-start",
    backgroundColor: colors.red,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
  },
  text: { color: colors.white, fontSize: 13, fontFamily: fonts.display },
});
