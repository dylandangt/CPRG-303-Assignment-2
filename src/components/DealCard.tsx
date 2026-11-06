import { Deal } from "@/data/deals";
import { colors, displayText, spacing, textSizes } from "@/theme/theme";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Badge } from "./Badge";
import { PlusButton } from "./PlusButton";
import { PriceTag } from "./PriceTag";

type Props = { deal: Deal; onPress: () => void; onAdd: () => void };

/** Reusable card for the Deals list. Green or beige depending on deal.variant. */
export function DealCard({ deal, onPress, onAdd }: Props) {
  const green = deal.variant === "green";

  return (
    <Pressable
      onPress={onPress}
      style={[styles.card, green ? styles.green : styles.beige]}
    >
      <View style={styles.textColumn}>
        <View>
          {deal.badge && <Badge label={deal.badge} />}
          <Text style={[styles.title, green && { color: colors.lime }]}>
            {deal.title}
          </Text>
          <Text
            numberOfLines={3}
            style={[styles.description, green && { color: colors.white }]}
          >
            {deal.description}
          </Text>
        </View>
        <PriceTag
          price={deal.price}
          originalPrice={deal.originalPrice}
          tone={green ? "onGreen" : "onLight"}
          size={29}
        />
      </View>

      <View style={styles.imageWrap}>
        {deal.image ? (
          <Image source={deal.image} style={styles.image} resizeMode="cover" />
        ) : (
          // No photo for this deal, so show the lime-on-green text banner instead
          <View style={[styles.image, styles.banner]}>
            <Text style={styles.bannerText}>
              {deal.bannerText ?? deal.title}
            </Text>
          </View>
        )}
        <View style={styles.plus}>
          <PlusButton
            onPress={onAdd}
            size={36}
            tone={green ? "lime" : "green"}
          />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    borderRadius: 22,
    padding: 14,
    gap: spacing.md,
  },
  green: { backgroundColor: colors.green },
  beige: {
    backgroundColor: colors.beige,
    borderWidth: 1,
    borderColor: colors.green,
  },
  textColumn: { flex: 1, justifyContent: "space-between", minHeight: 150 },
  title: {
    ...displayText,
    fontSize: textSizes.title,
    color: colors.green,
    marginTop: 4,
  },
  description: {
    fontSize: 15,
    lineHeight: 19,
    color: colors.text,
    marginTop: 2,
  },
  imageWrap: { width: 124 },
  image: { width: "100%", height: 136, borderRadius: 16 },
  banner: {
    backgroundColor: colors.green,
    alignItems: "center",
    justifyContent: "center",
    padding: spacing.sm,
  },
  bannerText: {
    ...displayText,
    color: colors.lime,
    fontSize: 19,
    lineHeight: 22,
    textAlign: "center",
  },
  plus: { position: "absolute", top: -6, right: -6 },
});
