import { Badge } from "@/components/Badge";
import { PriceTag } from "@/components/PriceTag";
import { getDeal } from "@/data/deals";
import { colors, displayText, spacing, textSizes } from "@/theme/theme";
import { useLocalSearchParams } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

/** Stack screen. The deal `id` is passed in as a navigation parameter. */
export default function DealDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const deal = getDeal(id);

  if (!deal) {
    return (
      <View style={styles.missing}>
        <Text style={styles.title}>Deal not found</Text>
      </View>
    );
  }

  const image = deal.image ?? deal.homeImage;

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
});
