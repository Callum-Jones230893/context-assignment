import { ColourType, CombinationNamesType, NavCardTypes, UsersType } from "../types/types";

export const users: UsersType[] = [
  { 
    username: "callum", 
    password: "password",
    alignment: [],
    favouriteCardColour: "White",
    favouriteCards: [],
  },
  { 
    username: "billy", 
    password: "password",
    alignment: [],
    favouriteCardColour: "Red",
    favouriteCards: [],
  },
]

export const colours: ColourType[] = [
  {
    name: "White",
    code: ["W"],
    image: "/images/white.png",
  },
  {
    name: "Red",
    code: ["R"],
    image: "/images/red.png",
  },
  {
    name: "Black",
    code: ["B"],
    image: "/images/black.png",
  },
  {
    name: "Blue",
    code: ["U"],
    image: "/images/blue.png",
  },
  {
    name: "Green",
    code: ["G"],
    image: "/images/green.png",
  }
]


export const combinationNames: CombinationNamesType[] = [
  {
    name: "White",
    code: ["W"],
    colours: ["White"]
  },
  {
    name: "Black",
    code: ["B"],
    colours: ["Black"]
  },
  {
    name: "Red",
    code: ["R"],
    colours: ["Red"]
  },
  {
    name: "Green",
    code: ["G"],
    colours: ["Green"]
  },
  {
    name: "Blue",
    code: ["U"],
    colours: ["Blue"]
  },
  {
    name: "Azorius",
    code: ["W", "U"],
    colours: ["White", "Blue"]
  },
  {
    name: "Orzhov",
    code: ["W", "B"],
    colours: ["White", "Black"]
  },
  {
    name: "Boros",
    code: ["W", "R"],
    colours: ["White", "Red"]
  },
  {
    name: "Selesnya",
    code: ["W", "G"],
    colours: ["White", "Green"]
  },
  {
    name: "Dimir",
    code: ["U", "B"],
    colours: ["Blue", "Black"]
  },
  {
    name: "Izzet",
    code: ["U", "R"],
    colours: ["Blue", "Red"]
  },
  {
    name: "Simic",
    code: ["U", "G"],
    colours: ["Blue", "Green"]
  },
  {
    name: "Rakdos",
    code: ["B", "R"],
    colours: ["Black", "Red"]
  },
  {
    name: "Gruul",
    code: ["G", "R"],
    colours: ["Green", "Red"]
  },
  {
    name: "Golgari",
    code: ["B", "G"],
    colours: ["Black", "Green"]
  },
  {
    name: "Bant",
    code: ["U", "G", "W"],
    colours: ["Blue", "Green", "White"]
  },
  {
    name: "Esper",
    code: ["W", "B", "U"],
    colours: ["White", "Black", "Blue"]
  },
  {
    name: "Grixis",
    code: ["B", "U", "R"],
    colours: ["Wlack", "Blue", "Red"]
  },
  {
    name: "Jund",
    code: ["B", "G", "R"],
    colours: ["Black", "Green", "Red"]
  },
  {
    name: "Naya",
    code: ["G", "R", "W"],
    colours: ["Green", "Red", "White"]
  },
  {
    name: "Abzan",
    code: ["B", "G", "W"],
    colours: ["Black", "Green", "White"]
  },
  {
    name: "Jeskai",
    code: ["W", "B", "U"],
    colours: ["Blue", "Red", "White"]
  },
  {
    name: "Mardu",
    code: ["B", "R", "W"],
    colours: ["Black", "Red", "White"]
  },
  {
    name: "Sultai",
    code: ["B", "G", "U"],
    colours: ["Black", "Green", "Blue"]
  },
  {
    name: "Temur",
    code: ["U", "G", "R"],
    colours: ["Blue", "Green", "Red"]
  },
  {
    name: "Dune",
    code: ["B", "R", "W", "G"],
    colours: ["Black", "Red", "White", "Green"]
  },
  {
    name: "Glint",
    code: ["U", "R", "B", "G"],
    colours: ["Blue", "Red", "Black", "Green"]
  },
  {
    name: "Ink",
    code: ["U", "R", "W", "G"],
    colours: ["Blue", "Red", "White", "Green"]
  },
  {
    name: "Witch",
    code: ["W", "G", "U", "B"],
    colours: ["White", "Green", "Blue", "Black"]
  },
  {
    name: "Temur",
    code: ["U", "W", "R", "B"],
    colours: ["Blue", "White", "Red", "Black"]
  },
  {
    name: "Wubrg",
    code: ["W", "U", "B", "G", "R"],
    colours: ["White", "Blue", "Black", "Green", "Red"]
  }
]

export const cardTypes: NavCardTypes[] = [
  {
    name: "Artifact"
  },
  {
    name: "Creature"
  },
  {
    name: "Enchantment"
  },
  {
    name: "Instant"
  },
  {
    name: "Land"
  },
  {
    name: "Planeswalker"
  },
  {
    name: "Sorcery"
  },
]