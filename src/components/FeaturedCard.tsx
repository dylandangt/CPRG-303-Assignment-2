import { Deal } from "@/data/deals";
import { colors, displayText, spacing, textSizes } from "@/theme/theme";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Badge } from "./Badge";
import { PlusButton } from "./PlusButton";
import { PriceTag } from "./PriceTag";

type Props = {
  deal: Deal;
  width: number;
  onPress: () => void;
  onAdd: () => void;
};

const IMAGE_HEIGHT = 280;

/** Large photo card used by the Home carousel. */
export function FeaturedCard({ deal, width, onPress, onAdd }: Props) {
  return (
    <Pressable onPress={onPress} style={[styles.card, { width }]}>
      <Image
        source={deal.homeImage ?? deal.image}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.bar}>
        {deal.badge && <Badge label={deal.badge} />}
        <Text numberOfLines={1} style={styles.title}>
          {deal.title}
        </Text>
        <View style={styles.bottomRow}>
          <Text numberOfLines={2} style={styles.subtitle}>
            {deal.subtitle}
          </Text>
          <PriceTag price={deal.price} tone="onGreen" size={27} />
        </View>
      </View>
      <View style={styles.plus}>
        <PlusButton
          onPress={onAdd}
          size={54}
          tone="lime"
          ringColor={colors.green}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: { borderRadius: 22, backgroundColor: colors.green, overflow: "hidden" },
  image: { width: "100%", height: IMAGE_HEIGHT, backgroundColor: "#0b3d1d" },
  bar: {
    paddingHorizontal: 14,
    paddingTop: spacing.sm,
    paddingBottom: 14,
    gap: 2,
  },
  title: {
    ...displayText,
    fontSize: textSizes.title,
    color: colors.lime,
    marginTop: 2,
  },
  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtitle: {
    flex: 1,
    color: colors.white,
    fontSize: textSizes.body,
    fontWeight: "600",
    marginRight: spacing.sm,
  },
  plus: { position: "absolute", right: 2, top: IMAGE_HEIGHT - 27 },
});
