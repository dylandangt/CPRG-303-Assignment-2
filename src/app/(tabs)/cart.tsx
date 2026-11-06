import { AppButton } from "@/components/AppButton";
import { ScreenHeader } from "@/components/ScreenHeader";
import { CartItem, useCart } from "@/context/CartContext";
import { colors, displayText, spacing, textSizes } from "@/theme/theme";
import { notify } from "@/utils/notify";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function CartScreen() {
  const router = useRouter();
  const { items, count, changeQty, removeItem, clearCart } = useCart();

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  const checkout = () => {
    notify(
      "Order placed!",
      `Your ${count} item(s) will be ready for carryout soon. (Demo only, no payment taken.)`,
    );
    clearCart();
  };

  const renderItem = ({ item }: { item: CartItem }) => (
    <View style={styles.row}>
      {item.image ? (
        <Image source={item.image} style={styles.thumb} resizeMode="cover" />
      ) : (
        <View style={[styles.thumb, styles.thumbPlaceholder]}>
          <Ionicons name="pizza" size={26} color={colors.green} />
        </View>
      )}

      <View style={styles.info}>
        <Text numberOfLines={2} style={styles.itemTitle}>
          {item.title}
        </Text>
        <Text style={styles.itemPrice}>
          ${(item.price * item.qty).toFixed(2)}
        </Text>

        <View style={styles.controls}>
          <View style={styles.stepper}>
            <Pressable
              style={styles.stepButton}
              onPress={() => changeQty(item.id, -1)}
            >
              <Text style={styles.stepText}>−</Text>
            </Pressable>
            <Text style={styles.qty}>{item.qty}</Text>
            <Pressable
              style={styles.stepButton}
              onPress={() => changeQty(item.id, 1)}
            >
              <Text style={styles.stepText}>+</Text>
            </Pressable>
          </View>
          <Pressable onPress={() => removeItem(item.id)} hitSlop={10}>
            <Ionicons name="trash-outline" size={24} color={colors.red} />
          </Pressable>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.screen}>
      <ScreenHeader title="Cart" />

      {items.length === 0 ? (
        <View style={styles.empty}>
          <Ionicons name="cart-outline" size={72} color="#5b5b5b" />
          <Text style={styles.emptyTitle}>Your cart is empty</Text>
          <Text style={styles.emptyText}>
            Add a pizza or a deal to get started.
          </Text>
          <AppButton
            label="Browse Menu"
            onPress={() => router.navigate("/menu")}
            style={{ alignSelf: "stretch" }}
          />
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.content}
          ItemSeparatorComponent={() => <View style={{ height: spacing.md }} />}
          ListFooterComponent={
            <View style={styles.summary}>
              <SummaryLine label="Total" value={`$${total.toFixed(2)}`} bold />
              <AppButton
                label="Checkout"
                onPress={checkout}
                style={{ marginTop: 14 }}
              />
            </View>
          }
        />
      )}
    </View>
  );
}

function SummaryLine({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <View style={styles.line}>
      <Text style={[styles.lineText, bold && styles.lineBold]}>{label}</Text>
      <Text style={[styles.lineText, bold && styles.lineBold]}>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 14, paddingBottom: 32 },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 32,
  },
  emptyTitle: { ...displayText, fontSize: 30, color: colors.green },
  emptyText: { fontSize: textSizes.body, color: "#5b5b5b", marginBottom: 14 },
  row: {
    flexDirection: "row",
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
  },
  thumb: {
    width: 84,
    height: 84,
    borderRadius: spacing.md,
    backgroundColor: colors.tabActive,
  },
  thumbPlaceholder: { alignItems: "center", justifyContent: "center" },
  info: { flex: 1, gap: 2 },
  itemTitle: { ...displayText, fontSize: textSizes.large, color: colors.text },
  itemPrice: {
    fontSize: textSizes.body,
    fontWeight: "700",
    color: colors.green,
    marginTop: 2,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing.sm,
  },
  stepper: { flexDirection: "row", alignItems: "center", gap: spacing.md },
  stepButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
  },
  stepText: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "700",
    lineHeight: 26,
  },
  qty: {
    fontSize: textSizes.large,
    fontWeight: "700",
    minWidth: 20,
    textAlign: "center",
    color: colors.text,
  },
  summary: {
    marginTop: 18,
    padding: spacing.lg,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.white,
    gap: spacing.sm,
  },
  line: { flexDirection: "row", justifyContent: "space-between" },
  lineText: { fontSize: textSizes.body, color: colors.text },
  lineBold: { fontSize: 20, fontWeight: "800" },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.border,
    marginVertical: spacing.xs,
  },
});
