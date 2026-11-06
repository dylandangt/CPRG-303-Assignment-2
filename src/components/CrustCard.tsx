import { Crust } from "@/data/menu";
import { colors, displayText } from "@/theme/theme";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Badge } from "./Badge";
import { PlusButton } from "./PlusButton";

type Props = { crust: Crust; onPress: () => void };

export function CrustCard({ crust, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View>
        <Image source={crust.image} style={styles.image} resizeMode="cover" />
        <View style={styles.plus}>
          <PlusButton onPress={onPress} size={24} />
        </View>
      </View>
      <View style={styles.body}>
        {crust.isNew && <Badge label="NEW" />}
        <Text style={styles.name}>{crust.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 130,
    minHeight: 170,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    overflow: "hidden",
  },
  image: { width: "100%", height: 85 },
  plus: { position: "absolute", right: 2, bottom: -10 },
  body: { padding: 8, paddingTop: 14, gap: 4 },
  name: { ...displayText, fontSize: 17, lineHeight: 20, color: colors.text },
});
