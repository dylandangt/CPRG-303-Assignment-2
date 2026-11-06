import { DealCard } from "@/components/DealCard";
import { ScreenHeader } from "@/components/ScreenHeader";
import { useCart } from "@/context/CartContext";
import { DEALS, Deal } from "@/data/deals";
import { colors, textSizes } from "@/theme/theme";
import { notify } from "@/utils/notify";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function DealsScreen() {
  const router = useRouter();
  const { addItem } = useCart();
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  // Mock promo code check, PAPA10 is the only valid code
  const applyCode = () => {
    if (code.trim().toUpperCase() === "PAPA10") {
      setMessage("PAPA10 applied: 10% off your order.");
    } else {
      setMessage("That promo code isn't valid.");
    }
  };

  const addDeal = (deal: Deal) => {
    addItem({
      id: `deal-${deal.id}`,
      title: deal.title,
      price: deal.price,
      image: deal.image,
    });
    notify("Added to cart", `${deal.title} was added to your cart.`);
  };

  const promoBox = (
    <View style={styles.promo}>
      <View style={styles.promoRow}>
        <TextInput
          value={code}
          onChangeText={setCode}
          placeholder="Promo Code"
          placeholderTextColor="#8a8a8a"
          autoCapitalize="characters"
          autoCorrect={false}
          style={styles.input}
        />
        <Pressable
          onPress={applyCode}
          style={[styles.apply, code.trim() !== "" && styles.applyActive]}
        >
          <Text
            style={[
              styles.applyText,
              code.trim() !== "" && { color: colors.white },
            ]}
          >
            Apply
          </Text>
        </Pressable>
      </View>
      {message !== "" && <Text style={styles.message}>{message}</Text>}
    </View>
  );

  return (
    <View style={styles.screen}>
      <ScreenHeader title="Deals" />
      <FlatList
        data={DEALS}
        keyExtractor={(deal) => deal.id}
        contentContainerStyle={styles.content}
        ItemSeparatorComponent={() => <View style={{ height: 14 }} />}
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={promoBox}
        renderItem={({ item }) => (
          <DealCard
            deal={item}
            onPress={() =>
              router.push({ pathname: "/deal/[id]", params: { id: item.id } })
            }
            onAdd={() => addDeal(item)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: 14, paddingBottom: 32 },
  promo: { marginBottom: 18 },
  promoRow: {
    flexDirection: "row",
    height: 52,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: colors.border,
    backgroundColor: colors.background,
    overflow: "hidden",
  },
  input: {
    flex: 1,
    paddingHorizontal: 18,
    fontSize: textSizes.large,
    color: colors.text,
  },
  apply: {
    width: 110,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.disabled,
  },
  applyActive: { backgroundColor: colors.green },
  applyText: {
    fontSize: textSizes.large,
    fontWeight: "700",
    color: colors.disabledText,
  },
  message: {
    marginTop: 8,
    fontSize: textSizes.small,
    fontWeight: "600",
    color: colors.green,
  },
});
