import { CarryoutHeader } from "@/components/CarryoutHeader";
import { FeaturedCard } from "@/components/FeaturedCard";
import { RewardsBanner } from "@/components/RewardsBanner";
import { useCart } from "@/context/CartContext";
import { Deal, DEALS, FEATURED_DEAL_IDS } from "@/data/deals";
import { colors } from "@/theme/theme";
import { notify } from "@/utils/notify";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from "react-native";

// Only the deals listed in FEATURED_DEAL_IDS show up in the Home carousel
const FEATURED = DEALS.filter((deal) => FEATURED_DEAL_IDS.includes(deal.id));
const GAP = 12;

export default function HomeScreen() {
  const router = useRouter();
  const { addItem } = useCart();
  const { width } = useWindowDimensions();
  const cardWidth = Math.min(width * 0.71, 340);
  const [page, setPage] = useState(0); // which card is showing, for the dots

  // Work out which card is centered while the user swipes
  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / (cardWidth + GAP));
    setPage(Math.max(0, Math.min(FEATURED.length - 1, index)));
  };

  const addDeal = (deal: Deal) => {
    addItem({
      id: `deal-${deal.id}`,
      title: deal.title,
      price: deal.price,
      image: deal.homeImage ?? deal.image,
    });
    notify("Added to cart", `${deal.title} was added to your cart.`);
  };

  return (
    <View style={styles.screen}>
      <CarryoutHeader />
      <ScrollView contentContainerStyle={styles.content}>
        <FlatList
          data={FEATURED}
          horizontal
          keyExtractor={(deal) => deal.id}
          showsHorizontalScrollIndicator={false}
          snapToInterval={cardWidth + GAP}
          decelerationRate="fast"
          onScroll={onScroll}
          scrollEventThrottle={16}
          contentContainerStyle={styles.carousel}
          ItemSeparatorComponent={() => <View style={{ width: GAP }} />}
          renderItem={({ item }) => (
            <FeaturedCard
              deal={item}
              width={cardWidth}
              onPress={() =>
                router.push({ pathname: "/deal/[id]", params: { id: item.id } })
              }
              onAdd={() => addDeal(item)}
            />
          )}
        />

        <View style={styles.dots}>
          {FEATURED.map((deal, index) => (
            <View
              key={deal.id}
              style={[styles.dot, index === page && styles.dotActive]}
            />
          ))}
        </View>

        <View style={styles.rewards}>
          <RewardsBanner onPress={() => router.navigate("/rewards")} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { paddingTop: 22, paddingBottom: 24 },
  carousel: { paddingHorizontal: 12 },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginTop: 18,
  },
  dot: { width: 8, height: 8, borderRadius: 4, backgroundColor: "#c4c4c4" },
  dotActive: { width: 80, backgroundColor: colors.green },
  rewards: { paddingHorizontal: 12, marginTop: 24 },
});
