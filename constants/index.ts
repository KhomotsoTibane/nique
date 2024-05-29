import { NavbarLink, MenuItem, ClassEvent } from "@/types";

export const NavbarLinks: NavbarLink[] = [
  {
    imgURL: "/assets/icons/arrow-right.svg",
    route: "/",
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

export const breakfastMenu: MenuItem[] = [
  {
    name: "Avocado Toast",
    image: "https://example.com/images/avocado-toast.jpg",
    description: "A delicious toast topped with fresh avocado and cherry tomatoes.",
    isVegan: true,
    price: 8.99,
  },
  {
    name: "Omelette",
    image: "https://example.com/images/omelette.jpg",
    description: "A classic omelette with cheese, ham, and bell peppers.",
    isVegan: false,
    price: 9.99,
  },
  {
    name: "Fruit Salad",
    image: "https://example.com/images/fruit-salad.jpg",
    description: "A colorful mix of seasonal fruits served with a light honey dressing.",
    isVegan: true,
    price: 5.99,
  },
];

export const lunchMenu: MenuItem[] = [
  {
    name: "Sea Curry",
    image: "https://example.com/images/sea-curry.jpg",
    description: "A flavorful curry with shrimp, mussels, and squid in a rich coconut sauce.",
    isVegan: false,
    price: 15.99,
  },
  {
    name: "Vegan Burger",
    image: "https://example.com/images/vegan-burger.jpg",
    description: "A hearty vegan burger made with a chickpea patty, avocado, and vegan mayo.",
    isVegan: true,
    price: 10.99,
  },
  {
    name: "Noodle Bowl",
    image: "https://example.com/images/noodle-bowl.jpg",
    description:
      "A fresh and tasty noodle bowl with mixed vegetables, tofu, and a tangy soy sauce.",
    isVegan: true,
    price: 11.99,
  },
];

export const drinksMenu: MenuItem[] = [
  {
    name: "Mojito",
    image: "https://example.com/images/mojito.jpg",
    description: "A classic cocktail with rum, fresh mint, lime juice, sugar, and soda water.",
    isVegan: true,
    price: 7.99,
  },
  {
    name: "Margarita",
    image: "https://example.com/images/margarita.jpg",
    description:
      "A refreshing cocktail with tequila, lime juice, and triple sec, served with a salted rim.",
    isVegan: true,
    price: 8.99,
  },
  {
    name: "Old Fashioned",
    image: "https://example.com/images/old-fashioned.jpg",
    description:
      "A classic whiskey cocktail with bourbon, bitters, sugar, and a twist of citrus rind.",
    isVegan: true,
    price: 9.99,
  },

  {
    name: "Gin and Tonic",
    image: "https://example.com/images/gin-and-tonic.jpg",
    description: "A classic cocktail with gin, tonic water, and a slice of lime.",
    isVegan: true,
    price: 7.49,
  },
  {
    name: "Bloody Mary",
    image: "https://example.com/images/bloody-mary.jpg",
    description:
      "A savory cocktail made with vodka, tomato juice, and a mix of spices and flavorings.",
    isVegan: true,
    price: 9.49,
  },
  {
    name: "Martini",
    image: "https://example.com/images/martini.jpg",
    description:
      "A sophisticated cocktail made with gin and vermouth, garnished with an olive or a lemon twist.",
    isVegan: true,
    price: 10.99,
  },
];

export const startersMenu: MenuItem[] = [
  {
    name: "Bruschetta",
    image: "https://example.com/images/bruschetta.jpg",
    description: "Grilled bread topped with fresh tomatoes, garlic, basil, and olive oil.",
    isVegan: true,
    price: 5.99,
  },
  {
    name: "Stuffed Mushrooms",
    image: "https://example.com/images/stuffed-mushrooms.jpg",
    description: "Mushrooms stuffed with a delicious mixture of herbs, garlic, and breadcrumbs.",
    isVegan: true,
    price: 6.99,
  },
  {
    name: "Garlic Shrimp",
    image: "https://example.com/images/garlic-shrimp.jpg",
    description: "Succulent shrimp sautéed in garlic and butter, served with a lemon wedge.",
    isVegan: false,
    price: 8.99,
  },
  
];

export const classes: ClassEvent[] = [
  {
    category: "Asian",
    title: "Delicious breakfast",
    date: "June 16, 2024",
    image: "/assets/images/gallery-1.webp",
  },
  {
    category: "European",
    title: "Croissant and coffee",
    date: "July 28, 2024",
    image: "/assets/images/gallery-2.webp",
  },
  {
    category: "American",
    title: "Pancakes with maple syrup",
    date: "September 8, 2024",
    image: "/assets/images/gallery-3.webp",
  },
  {
    category: "African",
    title: "Ful medames",
    date: "October 20, 2024",
    image: "/assets/images/gallery-1.webp",
  },
];
