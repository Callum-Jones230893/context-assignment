import { ColourType, UsersType } from "../types/types";

export const users: UsersType[] = [
  { 
    username: "callum", 
    password: "password",
    alignment: [],
    favouriteCardColour: "White",
    favouriteCards: [],
    savedDecks: []
  },
]

export const colours: ColourType[] = [
  {
    name: "white",
    code: ["W"],
    image: "/images/white.png",
  },
  {
    name: "red",
    code: ["R"],
    image: "/images/red.png",
  },
  {
    name: "black",
    code: ["B"],
    image: "/images/black.png",
  },
  {
    name: "blue",
    code: ["U"],
    image: "/images/blue.png",
  },
  {
    name: "green",
    code: ["G"],
    image: "/images/green.png",
  }
]

// add a type
export const combinationNames = [
  {
    name: "White",
    code: ["W"],
    colours: ["white"]
  },
  {
    name: "Black",
    code: ["B"],
    colours: ["black"]
  },
  {
    name: "Red",
    code: ["R"],
    colours: ["red"]
  },
  {
    name: "Green",
    code: ["G"],
    colours: ["green"]
  },
  {
    name: "Blue",
    code: ["U"],
    colours: ["blue"]
  },
  {
    name: "Azorius",
    code: ["W", "U"],
    colours: ["white", "blue"]
  },
  {
    name: "Orzhov",
    code: ["W", "B"],
    colours: ["white", "black"]
  },
  {
    name: "Boros",
    code: ["W", "R"],
    colours: ["white", "red"]
  },
  {
    name: "Selesnya",
    code: ["W", "G"],
    colours: ["white", "green"]
  },
  {
    name: "Dimir",
    code: ["U", "B"],
    colours: ["blue", "black"]
  },
  {
    name: "Izzet",
    code: ["U", "R"],
    colours: ["blue", "red"]
  },
  {
    name: "Simic",
    code: ["U", "G"],
    colours: ["blue", "green"]
  },
  {
    name: "Rakdos",
    code: ["B", "R"],
    colours: ["black", "red"]
  },
  {
    name: "Gruul",
    code: ["G", "R"],
    colours: ["green", "red"]
  },
  {
    name: "Golgari",
    code: ["B", "G"],
    colours: ["black", "green"]
  },
  {
    name: "Bant",
    code: ["U", "G", "W"],
    colours: ["blue", "green", "white"]
  },
  {
    name: "Esper",
    code: ["W", "B", "U"],
    colours: ["white", "black", "blue"]
  },
  {
    name: "Grixis",
    code: ["B", "U", "R"],
    colours: ["black", "blue", "red"]
  },
  {
    name: "Jund",
    code: ["B", "G", "R"],
    colours: ["black", "green", "red"]
  },
  {
    name: "Naya",
    code: ["G", "R", "W"],
    colours: ["green", "red", "white"]
  },
  {
    name: "Abzan",
    code: ["B", "G", "W"],
    colours: ["black", "green", "white"]
  },
  {
    name: "Jeskai",
    code: ["W", "B", "U"],
    colours: ["blue", "red", "white"]
  },
  {
    name: "Mardu",
    code: ["B", "R", "W"],
    colours: ["black", "red", "white"]
  },
  {
    name: "Sultai",
    code: ["B", "G", "U"],
    colours: ["black", "green", "blue"]
  },
  {
    name: "Temur",
    code: ["U", "G", "R"],
    colours: ["blue", "green", "red"]
  },
  {
    name: "Dune",
    code: ["B", "R", "W", "G"],
    colours: ["black", "red", "white", "green"]
  },
  {
    name: "Glint",
    code: ["U", "R", "B", "G"],
    colours: ["blue", "red", "black", "green"]
  },
  {
    name: "Ink",
    code: ["U", "R", "W", "G"],
    colours: ["blue", "red", "white", "green"]
  },
  {
    name: "Witch",
    code: ["W", "G", "U", "B"],
    colours: ["white", "green", "blue", "black"]
  },
  {
    name: "Temur",
    code: ["U", "W", "R", "B"],
    colours: ["blue", "white", "red", "black"]
  },
  {
    name: "Wubrg",
    code: ["W", "U", "B", "G", "R"],
    colours: ["white", "blue", "black", "green", "red"]
  }
]