import { ImageSourcePropType } from "react-native";

export type Deal = {
  id: string;
  title: string;
  /** Short tagline shown on the Home carousel. */
  subtitle?: string;
  /** Full text; cards truncate it with numberOfLines. */
  description: string;
  price: number;
  originalPrice?: number;
  badge?: "LIMITED TIME" | "FEATURED";
  variant: "green" | "beige";
  /** Photo used on the Deals list / detail screens. */
  image?: ImageSourcePropType;
  /** Photo used on the Menu screen's deal card. */
  menuImage?: ImageSourcePropType;
  /** Photo used on the Home carousel. */
  homeImage?: ImageSourcePropType;
  /** Used instead of a photo when there is no image (e.g. the Pan & Pepsi banner). */
  bannerText?: string;
};

export const DEALS: Deal[] = [
  {
    id: "xl-1-topping",
    title: "XL 1-Topping Pizza",
    subtitle: "XL Really Means XL",
    description:
      "Get a 16-inch XL 1-topping pizza for just $19.99. Because better can always be bigger.",
    price: 19.99,
    originalPrice: 23.75,
    badge: "LIMITED TIME",
    variant: "green",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsE57EbfkHZwscVGC3KV4-_LEuMBReRWsLXLb045-dlA&s=10",
    }, // Deals list + deal details
    homeImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsE57EbfkHZwscVGC3KV4-_LEuMBReRWsLXLb045-dlA&s=10",
    }, // Home carousel
    menuImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsE57EbfkHZwscVGC3KV4-_LEuMBReRWsLXLb045-dlA&s=10",
    }, // Menu screen deal card
  },
  {
    id: "overtime-pack",
    title: "Overtime Pack",
    subtitle: "Your Game Night Lineup",
    description:
      "Get a Large Specialty Pizza, Garlic Parmesan Breadsticks, and a 2L Pepsi product for one game-night price.",
    price: 25.99,
    badge: "LIMITED TIME",
    variant: "beige",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiLmp0ZB9BLN-kvFyN4ee5ahLuVg1Bt4_O0X__UvaA0ikKqT7O_tEhys&s=10",
    }, // Deals list + deal details
  },
  {
    id: "pan-pepsi-bundle",
    title: "Pan & Pepsi® Bundle",
    description:
      "Get a Medium 1-Topping Pan Pizza and a 2-Liter Pepsi product. The perfect pair for any night in.",
    price: 21.99,
    variant: "beige",
    bannerText: "Medium 1-Topping\nPan Pizza + 2L Pop", // no image, uses the text banner
  },
  {
    id: "choose-your-pizza",
    title: "Choose Your Pizza",
    subtitle: "Papa Pepperoni",
    description:
      "Choose your favourite Papa Johns pizza and share it with the whole crew.",
    price: 39.99,
    badge: "FEATURED",
    variant: "beige",
    homeImage: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNnyBIaos8lrpbXdVKysw-7oiaESFDTy_yg-ObZ_Fo3g&s",
    }, // Home carousel
    bannerText: "Choose Your\nPizza",
  },
];

/** Deals shown in the Home carousel, in order. */
export const FEATURED_DEAL_IDS = ["xl-1-topping", "choose-your-pizza"];

export function getDeal(id: string | undefined): Deal | undefined {
  return DEALS.find((deal) => deal.id === id);
}
