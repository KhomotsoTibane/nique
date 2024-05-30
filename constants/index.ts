import { NavbarLink, MenuItem, ClassEvent } from "@/types";

export const NavbarLinks: NavbarLink[] = [
  {
    imgURL: "/assets/icons/arrow-right.svg",
    route: "/menu",
    label: "Menu",
  },
  {
    imgURL: "/assets/icons/arrow-right.svg",
    route: "/resturant",
    label: "Resturant",
  },
  {
    imgURL: "/assets/icons/arrow-right.svg",
    route: "/classes",
    label: "Classes",
  },
  {
    imgURL: "/assets/icons/arrow-right.svg",
    route: "/contact",
    label: "Contact",
  },
  // {
  //   imgURL: "/assets/icons/arrow-right.svg",
  //   route: "/shop",
  //   label: "Shop",
  // },
  // {
  //   imgURL: "/assets/icons/arrow-right.svg",
  //   route: "/blog",
  //   label: "Blog",
  // },
];

export const startersMenu: MenuItem[] = [
  {
    name: "Tomato Toast",
    image: "/assets/images/tomatoetoast.webp",
    description: "A delicious toast topped with fresh avocado and cherry tomatoes.",
    isVegan: true,
    price: 170,
  },
  {
    name: "Noodle Soup",
    image: "/assets/images/noodlesoup.webp",
    description:
      "A fragrant and flavorful soup featuring tender rice noodles, fresh herbs, and a savory broth infused with lemongrass",
    isVegan: false,
    price: 189,
  },
  {
    name: "Pumpkin Soup",
    image: "/assets/images/pumpkinsoup.webp",
    description:
      "Creamy roasted pumpkin soup with aromatic spices, coconut milk, olive oil drizzle, and toasted pumpkin seeds",
    isVegan: true,
    price: 113,
  },
];

export const lunchMenu: MenuItem[] = [
  {
    name: "Italian Pizza",
    image: "/assets/images/pizza.webp",
    description:
      "Classic Italian pizza with fresh mozzarella, tomatoes, and basil on a crispy crust.",
    isVegan: false,
    price: 246,
  },
  {
    name: "Sea Curry",
    image: "/assets/images/seacurry.webp",
    description: "A flavorful curry with shrimp, mussels, and squid in a rich coconut sauce.",
    isVegan: false,
    price: 303,
  },
  {
    name: "Vegan Burger",
    image: "/assets/images/veganburger.webp",
    description: "A hearty vegan burger made with a chickpea patty, avocado, and vegan mayo.",
    isVegan: true,
    price: 208,
  },
  {
    name: "Noodle Bowl",
    image: "/assets/images/noodlebowl.webp",
    description:
      "A fresh and tasty noodle bowl with mixed vegetables, tofu, and a tangy soy sauce.",
    isVegan: true,
    price: 227,
  },
];

export const drinksMenu: MenuItem[] = [
  {
    name: "Panthouse Tonic",
    image: "/assets/images/tonic.webp",
    description: "A refreshing mix of premium gin, tonic water, and a hint of elderflower.",
    isVegan: true,
    price: 170,
  },
  {
    name: "Apple Breeze",
    image: "/assets/images/applebreeze.webp",
    description: "A light and fruity cocktail with apple juice, vodka, and a splash of soda.",
    isVegan: true,
    price: 151,
  },
  {
    name: "Frenchman Blitz",
    image: "/assets/images/blitz.webp",
    description: "A sophisticated blend of cognac, lemon juice, and sparkling wine.",
    isVegan: true,
    price: 208,
  },
];

export const breakfastMenu: MenuItem[] = [
  {
    name: "Delicious Pancakes",
    image: "/assets/images/pancakes.webp",
    description: "Fluffy pancakes served with maple syrup and fresh berries.",
    isVegan: true,
    price: 151,
  },
  {
    name: "Sweet Heaven",
    image: "/assets/images/sweetheaven.webp",
    description: "Decadent dessert featuring layers of chocolate, cream, and caramel.",
    isVegan: false,
    price: 132,
  },
  {
    name: "Oatmeal Spirit",
    image: "/assets/images/oatmeal.webp",
    description: "Warm oatmeal topped with fruits, nuts, and a drizzle of honey.",
    isVegan: true,
    price: 113,
  },
  {
    name: "Avocado Smash",
    image: "/assets/images/avosmash.webp",
    description:
      "Creamy avocado on toasted bread, garnished with cherry tomatoes and a sprinkle of sea salt.",
    isVegan: true,
    price: 132,
  },
];

export const classes: ClassEvent[] = [
  {
    id: 1,
    category: "Asian",
    title: "Delicious breakfast",
    date: "June 16, 2024",
    image: "/assets/images/gallery-1.webp",
  },
  {
    id: 2,
    category: "European",
    title: "Croissant and coffee",
    date: "July 28, 2024",
    image: "/assets/images/gallery-2.webp",
  },
  {
    id: 3,
    category: "American",
    title: "Pancakes with maple syrup",
    date: "September 8, 2024",
    image: "/assets/images/gallery-3.webp",
  },
  {
    id: 4,
    category: "African",
    title: "Ful medames",
    date: "October 20, 2024",
    image: "/assets/images/gallery-1.webp",
  },
];
