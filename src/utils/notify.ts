import { Alert, Platform } from "react-native";

/** Alert.alert does nothing on web, so fall back to window.alert there. */
export function notify(title: string, message?: string) {
  if (Platform.OS === "web") {
    window.alert(message ? `${title}\n\n${message}` : title);
  } else {
    Alert.alert(title, message);
  }
}
