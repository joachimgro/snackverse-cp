export type BoxSpec = {
  title: string;
  text: string;
  image: string;
};

export type PreviousBox = {
  country: string;
  date: string;
  description: string;
  boxImage: string;
  boxImageMobile: string;
  specs: [BoxSpec, BoxSpec, BoxSpec];
};

export const previousBoxes: PreviousBox[] = [
  {
    country: "Germany",
    date: "Mar'24",
    description: "Tropical flavors and huge adventures await in Ukraine! Let's try it.",
    boxImage: "https://staging.snackverse.com/wp-content/uploads/2024/02/Greece-2.png",
    boxImageMobile: "https://staging.snackverse.com/wp-content/uploads/2024/02/Greece-2.webp",
    specs: [
      {
        title: "2nd Best",
        text: "Fried Noodle Chips",
        image: "https://staging.snackverse.com/wp-content/uploads/2024/06/cookie.png",
      },
      {
        title: "Strangest",
        text: "Durian & Cheese",
        image: "",
      },
      {
        title: "",
        text: "",
        image: "",
      },
    ],
  },
  {
    country: "Malta",
    date: "Mar'24",
    description: "Tropical flavors and huge adventures await in Ukraine! Let's try it.",
    boxImage: "https://staging.snackverse.com/wp-content/uploads/2024/02/Greece-2.png",
    boxImageMobile: "https://staging.snackverse.com/wp-content/uploads/2024/02/Greece-2.webp",
    specs: [
      {
        title: "2nd Best",
        text: "Fried Noodle \nChips",
        image: "",
      },
      {
        title: "Strangest",
        text: "Durian & \nCheese",
        image: "",
      },
      {
        title: "",
        text: "",
        image: "",
      },
    ],
  },
];
