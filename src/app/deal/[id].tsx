import { AppButton } from "@/components/AppButton";
import { Badge } from "@/components/Badge";
import { PriceTag } from "@/components/PriceTag";
import { useCart } from "@/context/CartContext";
import { getDeal } from "@/data/deals";
import { colors, displayText, spacing, textSizes } from "@/theme/theme";
import { notify } from "@/utils/notify";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

/** Stack screen. The deal `id` is passed in as a navigation parameter. */
export default function DealDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const deal = getDeal(id);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  if (!deal) {
    return (
      <View style={styles.missing}>
        <Text style={styles.title}>Deal not found</Text>
      </View>
    );
  }

  const image = deal.image ?? deal.homeImage;

  const addToCart = () => {
    addItem(
      { id: `deal-${deal.id}`, title: deal.title, price: deal.price, image },
      qty,
    );
    notify("Added to cart", `${qty} x ${deal.title} added to your cart.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.content}>
      {image ? (
        <Image source={image} style={styles.image} resizeMode="cover" />
      ) : (
        <View style={[styles.image, styles.banner]}>
          <Text style={styles.bannerText}>{deal.bannerText ?? deal.title}</Text>
        </View>
      )}

      {deal.badge && <Badge label={deal.badge} />}
      <Text style={styles.title}>{deal.title}</Text>
      <PriceTag
        price={deal.price}
        originalPrice={deal.originalPrice}
        size={34}
      />
      <Text style={styles.description}>{deal.description}</Text>

      <View style={styles.qtyRow}>
        <Text style={styles.qtyLabel}>Quantity</Text>
        <View style={styles.stepper}>
          <Pressable
            style={styles.stepButton}
            onPress={() => setQty(Math.max(1, qty - 1))}
          >
            <Text style={styles.stepText}>−</Text>
          </Pressable>
          <Text style={styles.qtyValue}>{qty}</Text>
          <Pressable style={styles.stepButton} onPress={() => setQty(qty + 1)}>
            <Text style={styles.stepText}>+</Text>
          </Pressable>
        </View>
      </View>

      <AppButton
        label={`Add to Cart · $${(deal.price * qty).toFixed(2)}`}
        onPress={() => addToCart()}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { padding: spacing.lg, gap: 14, paddingBottom: 40 },
  missing: { flex: 1, alignItems: "center", justifyContent: "center" },
  image: { width: "100%", height: 260, borderRadius: 20 },
  banner: {
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
  },
  bannerText: {
    ...displayText,
    color: colors.lime,
    fontSize: textSizes.header,
    textAlign: "center",
  },
  title: { ...displayText, fontSize: 32, color: colors.green },
  description: { fontSize: 17, lineHeight: 24, color: colors.text },
  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  qtyLabel: {
    fontSize: textSizes.large,
    fontWeight: "700",
    color: colors.text,
  },
  stepper: { flexDirection: "row", alignItems: "center", gap: 14 },
  stepButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
  },
  stepText: {
    color: colors.white,
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 28,
  },
  qtyValue: {
    fontSize: textSizes.title,
    fontWeight: "700",
    minWidth: 24,
    textAlign: "center",
    color: colors.text,
  },
});
