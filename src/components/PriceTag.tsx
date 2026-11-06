import { colors, fonts } from "@/theme/theme";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  price: number;
  originalPrice?: number;
  size?: number;
  /** "onGreen" = red price with a white glow, "onLight" = green price. */
  tone?: "onGreen" | "onLight";
};

/** Italic price with a small dollar sign and an optional crossed-out old price. */
export function PriceTag({
  price,
  originalPrice,
  size = 28,
  tone = "onLight",
}: Props) {
  const onGreen = tone === "onGreen";
  const color = onGreen ? colors.red : colors.green;
  const glow = onGreen
    ? {
        textShadowColor: colors.white,
        textShadowRadius: 3,
        textShadowOffset: { width: 0, height: 0 },
      }
    : null;

  return (
    <View style={styles.row}>
      <Text style={[styles.dollar, { color, fontSize: size * 0.5 }, glow]}>
        $
      </Text>
      <Text style={[styles.amount, { color, fontSize: size }, glow]}>
        {price.toFixed(2)}
      </Text>
      {originalPrice !== undefined && (
        <Text
          style={[
            styles.original,
            {
              fontSize: size * 0.72,
              color: onGreen ? colors.white : colors.text,
            },
          ]}
        >
          ${originalPrice.toFixed(2)}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: "row", alignItems: "flex-end" },
  dollar: {
    fontFamily: fonts.display,
    fontStyle: "italic",
    alignSelf: "flex-start",
  },
  amount: { fontFamily: fonts.display, fontStyle: "italic", fontWeight: "900" },
  original: {
    marginLeft: 12,
    textDecorationLine: "line-through",
    fontFamily: fonts.display,
  },
});
