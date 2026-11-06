import { colors, textSizes } from "@/theme/theme";
import { Pressable, StyleSheet, Text, View } from "react-native";

export function RewardsBanner({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.banner}>
      <View style={styles.logoRow}>
        <Text style={styles.papa}>PAPA</Text>
        <View style={styles.rewardsBox}>
          <Text style={styles.rewards}>REWARDS</Text>
        </View>
      </View>

      <Text style={styles.text}>
        Start earning Papa Dough® to redeem toward any menu item.
      </Text>

      <Pressable onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Join Now</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: colors.green,
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 28,
    alignItems: "center",
    gap: 14,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  papa: {
    color: colors.white,
    fontSize: 44,
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: -1,
  },
  rewardsBox: {
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    marginTop: 6,
  },
  rewards: {
    color: colors.green,
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: -0.5,
  },
  text: {
    color: colors.white,
    fontSize: textSizes.large,
    fontWeight: "600",
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    alignSelf: "stretch",
    marginHorizontal: 10,
    marginTop: 6,
    minHeight: 54,
    borderRadius: 999,
    backgroundColor: colors.lime,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.green,
    fontSize: textSizes.large,
    fontWeight: "700",
  },
});
