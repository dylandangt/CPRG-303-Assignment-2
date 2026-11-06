import { CarryoutHeader } from "@/components/CarryoutHeader";
import { FeaturedCard } from "@/components/FeaturedCard";
import { RewardsBanner } from "@/components/RewardsBanner";
import { DEALS, FEATURED_DEAL_IDS } from "@/data/deals";
import { colors } from "@/theme/theme";
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

const FEATURED = DEALS.filter((deal) => FEATURED_DEAL_IDS.includes(deal.id));
const GAP = 12;

export default function HomeScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  const cardWidth = Math.min(width * 0.71, 340);
  const [page, setPage] = useState(0);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / (cardWidth + GAP));
    setPage(Math.max(0, Math.min(FEATURED.length - 1, index)));
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
              imageHeight={height * 0.5}
              onPress={() =>
                router.push({ pathname: "/deal/[id]", params: { id: item.id } })
              }
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
