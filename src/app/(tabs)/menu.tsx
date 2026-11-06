import { AppButton } from "@/components/AppButton";
import { Badge } from "@/components/Badge";
import { CategoryTabs } from "@/components/CategoryTabs";
import { CrustCard } from "@/components/CrustCard";
import { MenuItemRow } from "@/components/MenuItemRow";
import { PriceTag } from "@/components/PriceTag";
import { ScreenHeader } from "@/components/ScreenHeader";
import { useCart } from "@/context/CartContext";
import { getDeal } from "@/data/deals";
import {
  CRUSTS,
  MENU_CATEGORIES,
  MENU_ITEMS,
  MenuCategory,
  MenuItem,
} from "@/data/menu";
import { colors, displayText, spacing, textSizes } from "@/theme/theme";
import { notify } from "@/utils/notify";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const xlDeal = getDeal("xl-1-topping");

export default function MenuScreen() {
  const router = useRouter();
  const { addItem } = useCart();
  const [category, setCategory] = useState<MenuCategory>("Pizza");

  const addMenuItem = (item: MenuItem) => {
    addItem({ id: item.id, title: item.name, price: item.price });
    notify("Added to cart", `${item.name} was added to your cart.`);
  };

  return (
    <View style={styles.screen}>
      <ScreenHeader title="Menu" />
      <CategoryTabs
        categories={MENU_CATEGORIES}
        selected={category}
        onSelect={setCategory}
      />

      {category === "Pizza" ? (
        <ScrollView contentContainerStyle={styles.content}>
          <View style={styles.createCard}>
            <Text style={styles.createTitle}>Create your own pizza</Text>
            <Text style={styles.createSub}>
              Get started with one of our signature crusts
            </Text>
            <FlatList
              data={CRUSTS}
              horizontal
              keyExtractor={(crust) => crust.id}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
              renderItem={({ item }) => (
                <CrustCard
                  crust={item}
                  onPress={() => notify(item.name, item.description)}
                />
              )}
            />
          </View>

          {xlDeal && (
            <View style={styles.dealCard}>
              <Image
                source={xlDeal.menuImage}
                style={styles.dealImage}
                resizeMode="cover"
              />
              <View style={styles.dealInfo}>
                {xlDeal.badge && <Badge label={xlDeal.badge} />}
                <Text style={styles.dealTitle}>{xlDeal.title}</Text>
                <Text numberOfLines={2} style={styles.dealText}>
                  {xlDeal.description}
                </Text>
                <View style={{ marginTop: 10 }}>
                  <PriceTag
                    price={xlDeal.price}
                    originalPrice={xlDeal.originalPrice}
                    size={26}
                  />
                </View>
                <AppButton
                  label="Order Now"
                  onPress={() =>
                    router.push({
                      pathname: "/deal/[id]",
                      params: { id: xlDeal.id },
                    })
                  }
                  style={styles.orderNow}
                />
              </View>
            </View>
          )}
        </ScrollView>
      ) : (
        <FlatList
          data={MENU_ITEMS[category]}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.content}
          renderItem={({ item }) => (
            <MenuItemRow item={item} onAdd={() => addMenuItem(item)} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.md, paddingBottom: 32 },
  createCard: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.background,
    padding: 14,
    paddingBottom: 18,
  },
  createTitle: {
    ...displayText,
    fontSize: textSizes.hero,
    lineHeight: 38,
    color: colors.green,
  },
  createSub: {
    fontSize: textSizes.large,
    color: colors.text,
    marginTop: 4,
    marginBottom: 14,
  },
  dealCard: {
    flexDirection: "row",
    gap: 14,
    padding: spacing.md,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.green,
    backgroundColor: colors.beige,
  },
  dealImage: { width: 124, height: 163, borderRadius: 12 },
  dealInfo: { flex: 1 },
  dealTitle: {
    ...displayText,
    fontSize: 21,
    color: colors.green,
    marginTop: 4,
  },
  dealText: { fontSize: 15, lineHeight: 19, color: colors.text, marginTop: 2 },
  orderNow: { minHeight: 40, marginTop: 4, paddingHorizontal: spacing.md },
});
