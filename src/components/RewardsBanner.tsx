import { colors } from "@/theme/theme";
import { Pressable, StyleSheet, Text, View } from "react-native";

/** Green "PAPA REWARDS" logo banner at the bottom of the Home screen. */
export function RewardsBanner({ onPress }: { onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={styles.banner}>
      <Text style={styles.papa}>PAPA</Text>
      <View style={styles.rewardsBox}>
        <Text style={styles.rewards}>REWARDS</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  banner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.green,
    borderRadius: 18,
    paddingVertical: 22,
    gap: 4,
  },
  papa: {
    color: colors.white,
    fontSize: 40,
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: -1,
  },
  rewardsBox: {
    backgroundColor: colors.white,
    paddingHorizontal: 4,
    marginTop: 6,
  },
  rewards: {
    color: colors.green,
    fontSize: 32,
    fontWeight: "900",
    letterSpacing: -0.5,
  },
});
