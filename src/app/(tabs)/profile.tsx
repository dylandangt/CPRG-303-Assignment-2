import { AppButton } from "@/components/AppButton";
import { colors, displayText, textSizes } from "@/theme/theme";
import { notify } from "@/utils/notify";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const APP_VERSION = "v5.43.0 (26101512)";

export default function ProfileScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.screen}>
      <View style={[styles.top, { paddingTop: insets.top + 36 }]}>
        <Text style={styles.logo}>
          PAPA JOHNS<Text style={styles.reg}>®</Text>
        </Text>
        <AppButton
          label="Log In"
          onPress={() =>
            notify("Log In", "Logging in isn't part of this demo.")
          }
          style={styles.login}
        />
        <AppButton
          label="Create Account"
          variant="link"
          onPress={() =>
            notify(
              "Create Account",
              "Creating an account isn't part of this demo.",
            )
          }
        />
      </View>

      <Pressable
        style={styles.row}
        onPress={() =>
          notify("General", "App settings aren't part of this demo.")
        }
      >
        <Text style={styles.rowText}>General</Text>
        <Ionicons name="chevron-forward" size={20} color={colors.text} />
      </Pressable>

      <Text style={styles.version}>{APP_VERSION}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#f4f4f4" },
  top: {
    alignItems: "center",
    paddingBottom: 18,
    paddingHorizontal: 32,
    gap: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  logo: {
    ...displayText,
    fontSize: 56,
    lineHeight: 60,
    color: colors.red,
    letterSpacing: -1,
  },
  reg: { fontSize: textSizes.small },
  login: { alignSelf: "stretch", marginTop: 18 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  rowText: { fontSize: textSizes.large, color: colors.text },
  version: {
    ...displayText,
    alignSelf: "flex-end",
    marginRight: 16,
    marginTop: 14,
    fontSize: 17,
    color: colors.text,
  },
});
