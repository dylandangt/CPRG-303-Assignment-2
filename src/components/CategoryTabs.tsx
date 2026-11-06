import { colors, displayText, textSizes } from "@/theme/theme";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";

type Props<T extends string> = {
  categories: readonly T[];
  selected: T;
  onSelect: (category: T) => void;
};

/** Horizontally scrolling text tabs with an underline on the selected one. */
export function CategoryTabs<T extends string>({
  categories,
  selected,
  onSelect,
}: Props<T>) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.bar}
      contentContainerStyle={styles.content}
    >
      {categories.map((category) => {
        const active = category === selected;
        return (
          <Pressable
            key={category}
            onPress={() => onSelect(category)}
            style={[styles.tab, active && styles.tabActive]}
          >
            <Text style={[styles.text, active && styles.textActive]}>
              {category}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexGrow: 0,
    backgroundColor: colors.white,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
  content: { paddingHorizontal: 16, gap: 24 },
  tab: {
    paddingTop: 14,
    paddingBottom: 10,
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  tabActive: { borderBottomColor: colors.green },
  text: { fontSize: textSizes.large, color: colors.text },
  textActive: {
    ...displayText,
    fontSize: textSizes.title,
    color: colors.green,
  },
});
