import { AppButton } from "@/components/AppButton";
import { ScreenHeader } from "@/components/ScreenHeader";
import { colors, displayText, textSizes } from "@/theme/theme";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function CartScreen() {
  const router = useRouter();

  return (
    <View style={styles.screen}>
      <ScreenHeader title="Cart" />

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
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  empty: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 32,
  },
  emptyTitle: { ...displayText, fontSize: 30, color: colors.green },
  emptyText: { fontSize: textSizes.body, color: "#5b5b5b", marginBottom: 14 },
});
