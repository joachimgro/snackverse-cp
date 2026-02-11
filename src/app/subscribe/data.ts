export interface BoxFeature {
  text: string;
  /** false = renders with class "cross" (e.g. "No drink") */
  included: boolean;
}

export interface SubscriptionBoxData {
  /** CSS class appended: box_1, box_2, box_3 */
  index: number;

  // --- product images ---
  boxImage: string;
  boxImageWebp: string;
  snackCountImage: string;
  snackCountImageWebp: string;
  /** minor tweak per box on the snacks <picture> */
  snacksTranslateClass: string;

  // --- sun decoration (desktop) ---
  sunDesktopImage: string;
  sunDesktopClass: string;

  // --- sun decoration (mobile – sits inside the card) ---
  sunMobileImage: string;
  sunMobileClass: string;

  // --- card border color ---
  borderClass: string;

  // --- optional badge (best seller / best value) ---
  badgeImage?: string;
  badgeClass?: string;

  // --- content ---
  title: string;
  description: string;
  features: BoxFeature[];
  price: string;
  url: string;
  sku: string;
}

const IMG =
  "https://staging.snackverse.com/wp-content/themes/shopkeeper/images";

export const boxes: SubscriptionBoxData[] = [
  // ─── Mini Box ────────────────────────────────────────────────
  {
    index: 1,
    boxImage: `${IMG}/box-mini-2024.png`,
    boxImageWebp: `${IMG}/box-mini-2024-600x0-c-default.webp`,
    snackCountImage: `${IMG}/5_snacks.png`,
    snackCountImageWebp: `${IMG}/5_snacks.webp`,
    snacksTranslateClass:
      "transform -translate-y-5 lg:-translate-y-2 xl:-translate-y-8 lg:group-hover:-translate-y-1 xl:group-hover:-translate-y-2 transition duration-500 ease-in-out snacks",

    sunDesktopImage: `${IMG}/sun--white.png`,
    sunDesktopClass:
      "hidden lg:block max-w-300 absolute right-5 top-0 transform -translate-y-20 translate-x-20 lg:scale-95 xl:scale-100",

    sunMobileImage: `${IMG}/sun_white_mobile.png`,
    sunMobileClass:
      "lg:hidden max-w-full w-full absolute right-0 left-0 -top-2 pointer-events-none z-10",

    borderClass: "border-white",

    title: "Mini Box",
    description: "A tiny taste of the world",
    features: [
      { text: "<strong>5+</strong> full size &amp; unique snacks", included: true },
      { text: "No drink included in this box", included: false },
      { text: "Try a new country every month", included: true },
      { text: "No duplicated snacks", included: true },
      { text: "Information guide included", included: true },
      { text: "Shipping is free for addresses in the United Kingdom", included: true },
    ],
    price: "7.99",
    url: "/product/the-mini-box/",
    sku: "mini-box-monthly",
  },

  // ─── Original Box ────────────────────────────────────────────
  {
    index: 2,
    boxImage: `${IMG}/box-original-2024.png`,
    boxImageWebp: `${IMG}/box-original-2024-600x0-c-default.webp`,
    snackCountImage: `${IMG}/10_snacks.png`,
    snackCountImageWebp: `${IMG}/10_snacks.webp`,
    snacksTranslateClass:
      "transform -translate-y-5 lg:-translate-y-2 xl:-translate-y-7 lg:group-hover:-translate-y-1 xl:group-hover:-translate-y-2 transition duration-500 ease-in-out snacks",

    sunDesktopImage: `${IMG}/sun--orange.png`,
    sunDesktopClass:
      "hidden lg:block max-w-480 absolute right-3 top-0 transform -translate-y-36 translate-x-28 lg:scale-95 xl:scale-100",

    sunMobileImage: `${IMG}/sun_orange_mobile.png`,
    sunMobileClass:
      "lg:hidden max-w-full w-full absolute right-0 left-0 -top-6 pointer-events-none z-10",

    borderClass: "border-darkorange",

    badgeImage: `${IMG}/best_seller.svg`,
    badgeClass:
      "max-w-150 absolute left-1/2 transform -translate-x-1/2 -translate-y-10 z-30 group-hover:-rotate-2 transition duration-500",

    title: "Original Box",
    description: "The perfect amount of snacks",
    features: [
      { text: "<strong>10+</strong> full size &amp; unique snacks", included: true },
      { text: "<strong>1 Drink</strong> included in every box", included: true },
      { text: "Try a new country every month", included: true },
      { text: "No duplicated snacks", included: true },
      { text: "Information guide included", included: true },
      { text: "Shipping is free for addresses in the United Kingdom", included: true },
    ],
    price: "13.99",
    url: "/product/the-original-box/",
    sku: "original-box-monthly",
  },

  // ─── Premium Box ─────────────────────────────────────────────
  {
    index: 3,
    boxImage: `${IMG}/box-premium-2024.png`,
    boxImageWebp: `${IMG}/box-premium-2024-600x0-c-default.webp`,
    snackCountImage: `${IMG}/20_snacks.png`,
    snackCountImageWebp: `${IMG}/20_snacks.webp`,
    snacksTranslateClass:
      "transform -translate-y-5 lg:-translate-y-2 xl:-translate-y-6 lg:group-hover:-translate-y-1 xl:group-hover:-translate-y-2 transition duration-500 ease-in-out snacks",

    sunDesktopImage: `${IMG}/sun--lightorange.png`,
    sunDesktopClass:
      "hidden lg:block max-w-600 absolute right-10 lg:right-14 xl:right-10 top-0 transform -translate-y-1/3 translate-x-1/3 lg:scale-95 xl:scale-125",

    sunMobileImage: `${IMG}/sun_darker_orange_mobile.png`,
    sunMobileClass:
      "lg:hidden max-w-full w-full absolute right-0 left-0 -top-6 pointer-events-none z-10",

    borderClass: "border-orange",

    badgeImage: `${IMG}/best_value.svg`,
    badgeClass:
      "max-w-150 absolute left-1/2 transform -translate-x-1/2 -translate-y-10 z-30 group-hover:rotate-2 transition duration-500",

    title: "Premium Box",
    description: "The ultimate snacking experience!",
    features: [
      { text: "<strong>20+</strong> full size &amp; unique snacks", included: true },
      { text: "<strong>1+ Drink</strong> included in every box", included: true },
      { text: "Try a new country every month", included: true },
      { text: "No duplicated snacks", included: true },
      { text: "Information guide included", included: true },
      { text: "Shipping is free for addresses in the United Kingdom", included: true },
    ],
    price: "23.99",
    url: "/product/the-premium-box/",
    sku: "premium-box-monthly",
  },
];
