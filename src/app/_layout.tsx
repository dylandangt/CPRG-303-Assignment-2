import { CartProvider } from "@/context/CartContext";
import { colors, fonts, textSizes } from "@/theme/theme";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

/**
 * Root layout = the Stack navigator.
 * The tabs live inside it as one screen, and the deal details screen
 * is pushed on top of the tabs (tabs + stack navigation).
 */
export default function RootLayout() {
  return (
    <CartProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: colors.white },
          headerTintColor: colors.green,
          headerTitleStyle: {
            fontFamily: fonts.display,
            fontSize: textSizes.title,
            color: colors.text,
          },
          headerShadowVisible: false,
          headerBackButtonDisplayMode: "minimal",
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="deal/[id]" options={{ title: "Deal Details" }} />
      </Stack>
    </CartProvider>
  );
}
