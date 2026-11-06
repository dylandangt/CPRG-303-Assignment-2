import { AppButton } from "@/components/AppButton";
import { ScreenHeader } from "@/components/ScreenHeader";
import { colors, displayText, spacing } from "@/theme/theme";
import { notify } from "@/utils/notify";
import { StyleSheet, Text, View } from "react-native";

export default function RewardsScreen() {
  const logIn = () => notify("Log In", "Logging in isn't part of this demo.");
  const joinNow = () =>
    notify("Join Papa Rewards", "Creating an account isn't part of this demo.");

  return (
    <View style={styles.screen}>
      <ScreenHeader title="Rewards" />

      <View style={styles.hero}>
        <View style={styles.logoRow}>
          <Text style={styles.papa}>PAPA</Text>
          <View style={styles.rewardsBox}>
            <Text style={styles.rewards}>REWARDS</Text>
          </View>
        </View>

        <Text style={[styles.loveText, { transform: [{ rotate: "-6deg" }] }]}>
          LOVE
        </Text>
        <Text
          style={[
            styles.loveText,
            { transform: [{ rotate: "-6deg" }], marginLeft: 36 },
          ]}
        >
          PIZZA?
        </Text>

        <Text style={styles.tagline}>GET REWARDED FOR IT.</Text>
        <AppButton
          label="Join Now"
          variant="white"
          onPress={joinNow}
          style={styles.joinHero}
        />
      </View>

      <View style={styles.bottomBar}>
        <AppButton
          label="Log In"
          variant="outline"
          onPress={logIn}
          style={styles.barButton}
        />
        <AppButton
          label="Join Now"
          onPress={joinNow}
          style={styles.barButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  hero: {
    flex: 1,
    backgroundColor: colors.darkGreen,
    alignItems: "center",
    paddingTop: 36,
    paddingHorizontal: 20,
  },
  logoRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 26,
  },
  papa: {
    color: colors.red,
    fontSize: 46,
    fontWeight: "900",
    fontStyle: "italic",
    letterSpacing: -1,
  },
  rewardsBox: {
    backgroundColor: colors.white,
    paddingHorizontal: 5,
    marginTop: 4,
  },
  rewards: {
    color: colors.darkGreen,
    fontSize: 34,
    fontWeight: "900",
    letterSpacing: -0.5,
  },
  loveText: {
    fontSize: 84,
    lineHeight: 84,
    fontWeight: "900",
    fontStyle: "italic",
    color: "#2d6a2d",
    textShadowColor: colors.beige,
    textShadowRadius: 5,
    textShadowOffset: { width: 0, height: 0 },
  },
  tagline: {
    ...displayText,
    fontSize: 36,
    color: colors.beige,
    marginTop: 14,
    textAlign: "center",
  },
  joinHero: { marginTop: 26, minWidth: 190 },
  bottomBar: {
    flexDirection: "row",
    gap: 16,
    padding: spacing.lg,
    backgroundColor: colors.white,
  },
  barButton: { flex: 1, minHeight: 50 },
});
