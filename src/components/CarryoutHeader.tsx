import { colors, displayText, textSizes } from "@/theme/theme";
import { notify } from "@/utils/notify";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function CarryoutHeader() {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.header, { paddingTop: insets.top }]}>
      <View style={styles.left}>
        <View style={styles.orderRow}>
          <Text style={styles.carryout}>CARRYOUT</Text>
          <View style={styles.asap}>
            <Text style={styles.asapText}>ASAP</Text>
          </View>
        </View>
        <Pressable
          style={styles.addressRow}
          onPress={() =>
            notify(
              "Store selection",
              "Choosing a different store isn't part of this demo.",
            )
          }
        >
          <Text style={styles.address}>18 Arbour Lake Way NW</Text>
          <Ionicons name="chevron-down" size={20} color={colors.text} />
        </Pressable>
      </View>

      <Pressable
        style={styles.login}
        onPress={() => notify("Log In", "Logging in isn't part of this demo.")}
      >
        <Text style={styles.loginText}>LOG IN</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    backgroundColor: colors.background,
    borderBottomLeftRadius: 26,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 5,
    elevation: 5,
  },
  left: { flex: 1, paddingVertical: 12, paddingLeft: 12, gap: 4 },
  orderRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  carryout: { ...displayText, fontSize: textSizes.large, color: colors.green },
  asap: {
    backgroundColor: colors.green,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 999,
  },
  asapText: {
    color: colors.white,
    fontSize: textSizes.small,
    fontWeight: "800",
  },
  addressRow: { flexDirection: "row", alignItems: "center", gap: 6 },
  address: { fontSize: textSizes.large, color: colors.text },
  login: {
    width: "31%",
    backgroundColor: colors.green,
    borderTopLeftRadius: 38,
    borderBottomLeftRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  loginText: { ...displayText, fontSize: 25, color: colors.lime },
});
