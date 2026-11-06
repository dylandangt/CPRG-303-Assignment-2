import { ImageSourcePropType } from "react-native";

export const MENU_CATEGORIES = [
  "Pizza",
  "Papadias",
  "Papa Bites",
  "Wings",
  "Sides",
  "Papa Bowls",
] as const;

export type MenuCategory = (typeof MENU_CATEGORIES)[number];

export type Crust = {
  id: string;
  name: string;
  description: string;
  isNew?: boolean;
  image: ImageSourcePropType;
};

export const CRUSTS: Crust[] = [
  {
    id: "original",
    name: "Original Crust",
    description:
      "Our signature hand-tossed style crust, brushed with garlic seasoning.",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThwOL2qCDLi09JhaTOdK2v8UuDg4rwIJV_-1KExx6lZA&s=10",
    },
  },
  {
    id: "pan",
    name: "Pan Crust",
    description:
      "Thick, golden and crispy on the edges with a soft, fluffy centre.",
    isNew: true,
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNnyBIaos8lrpbXdVKysw-7oiaESFDTy_yg-ObZ_Fo3g&s",
    },
  },
  {
    id: "epic-stuffed",
    name: "Epic Stuffed Crust",
    description: "Pull-apart cheese baked right into the crust. Epic indeed.",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-bCPhAb8f-9r2pHBaQYZJEfBJ45q2yujt80frq6cIFQ&s=10",
    },
  },
];

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  icon: "restaurant" | "fast-food" | "flame" | "nutrition" | "cafe";
};

/** Placeholder items for the non-pizza menu tabs. */
export const MENU_ITEMS: Record<Exclude<MenuCategory, "Pizza">, MenuItem[]> = {
  Papadias: [
    {
      id: "pd-pepperoni",
      name: "Pepperoni Papadia",
      description: "Folded flatbread with pepperoni and melted cheese.",
      price: 8.99,
      icon: "restaurant",
    },
    {
      id: "pd-six-cheese",
      name: "Six Cheese Papadia",
      description: "A blend of six cheeses on warm flatbread.",
      price: 8.99,
      icon: "restaurant",
    },
    {
      id: "pd-chicken",
      name: "Chicken Bacon Papadia",
      description: "Grilled chicken, bacon and cheese.",
      price: 9.99,
      icon: "restaurant",
    },
  ],
  "Papa Bites": [
    {
      id: "pb-original",
      name: "Papa Bites",
      description: "Bite-size pizza pieces with dipping sauce.",
      price: 7.99,
      icon: "fast-food",
    },
    {
      id: "pb-pepperoni",
      name: "Pepperoni Papa Bites",
      description: "Loaded with pepperoni and cheese.",
      price: 8.99,
      icon: "fast-food",
    },
  ],
  Wings: [
    {
      id: "wg-bbq",
      name: "BBQ Wings (8 pc)",
      description: "Crispy wings tossed in sweet BBQ.",
      price: 11.99,
      icon: "flame",
    },
    {
      id: "wg-buffalo",
      name: "Buffalo Wings (8 pc)",
      description: "Classic hot buffalo sauce.",
      price: 11.99,
      icon: "flame",
    },
    {
      id: "wg-plain",
      name: "Plain Wings (8 pc)",
      description: "Crispy and unsauced, with a dip.",
      price: 10.99,
      icon: "flame",
    },
  ],
  Sides: [
    {
      id: "sd-garlic",
      name: "Garlic Parmesan Breadsticks",
      description: "Warm breadsticks with garlic and parmesan.",
      price: 6.99,
      icon: "nutrition",
    },
    {
      id: "sd-cheese",
      name: "Cheesesticks",
      description: "Melted cheese in a golden crust.",
      price: 7.99,
      icon: "nutrition",
    },
    {
      id: "sd-pepsi",
      name: "Pepsi 2L",
      description: "Ice-cold 2-litre bottle.",
      price: 3.99,
      icon: "cafe",
    },
  ],
  "Papa Bowls": [
    {
      id: "bw-alfredo",
      name: "Chicken Alfredo Papa Bowl",
      description: "Pasta, grilled chicken and creamy alfredo.",
      price: 10.99,
      icon: "restaurant",
    },
    {
      id: "bw-sausage",
      name: "Italian Sausage Papa Bowl",
      description: "Pasta with sausage and marinara.",
      price: 10.99,
      icon: "restaurant",
    },
  ],
};
