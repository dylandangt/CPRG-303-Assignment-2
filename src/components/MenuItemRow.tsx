import { MenuItem } from "@/data/menu";
import { colors, displayText, spacing, textSizes } from "@/theme/theme";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <View style={styles.row}>
      <View style={styles.icon}>
        <Ionicons name={item.icon} size={26} color={colors.green} />
      </View>
      <View style={styles.info}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    padding: 14,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  icon: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.tabActive,
    alignItems: "center",
    justifyContent: "center",
  },
  info: { flex: 1, gap: 2 },
  name: { ...displayText, fontSize: 19, color: colors.text },
  description: { fontSize: textSizes.small, color: "#5b5b5b" },
  price: {
    fontSize: textSizes.body,
    fontWeight: "700",
    color: colors.green,
    marginTop: 2,
  },
});
