import { ColourType, UsersType } from "../types/types";

export const users: UsersType[] = [
  { 
    username: "callum", 
    password: "password",
    alignment: "",
    favouriteCardColour: ["white"], 
    savedDecks: []
  },
]

export const colours: ColourType[] = [
  {
    name: "white",
    image: "/images/white.png",
  },
  {
    name: "red",
    image: "/images/red.png",
  },
  {
    name: "black",
    image: "/images/black.png",
  },
  {
    name: "blue",
    image: "/images/blue.png",
  },
  {
    name: "green",
    image: "/images/green.png",
  }
]

// add a type
export const combinationNames = [
  {
    name: "White",
    colours: ["white"]
  },
  {
    name: "Black",
    colours: ["black"]
  },
  {
    name: "Red",
    colours: ["red"]
  },
  {
    name: "Green",
    colours: ["green"]
  },
  {
    name: "Blue",
    colours: ["blue"]
  },
  {
    name: "Azorius",
    colours: ["white", "blue"]
  },
  {
    name: "Orzhov",
    colours: ["white", "black"]
  },
  {
    name: "Boros",
    colours: ["white", "red"]
  },
  {
    name: "Selesnya",
    colours: ["white", "green"]
  },
  {
    name: "Dimir",
    colours: ["blue", "black"]
  },
  {
    name: "Izzet",
    colours: ["blue", "red"]
  },
  {
    name: "Simic",
    colours: ["blue", "green"]
  },
  {
    name: "Rakdos",
    colours: ["black", "red"]
  },
  {
    name: "Gruul",
    colours: ["green", "red"]
  },
  {
    name: "Golgari",
    colours: ["black", "green"]
  },
  {
    name: "Bant",
    colours: ["blue", "green", "white"]
  },
  {
    name: "Esper",
    colours: ["white", "black", "blue"]
  },
  {
    name: "Grixis",
    colours: ["black", "blue", "red"]
  },
  {
    name: "Jund",
    colours: ["black", "green", "red"]
  },
  {
    name: "Naya",
    colours: ["green", "red", "white"]
  },
  {
    name: "Abzan",
    colours: ["black", "green", "white"]
  },
  {
    name: "Jeskai",
    colours: ["blue", "red", "white"]
  },
  {
    name: "Mardu",
    colours: ["black", "red", "white"]
  },
  {
    name: "Sultai",
    colours: ["black", "green", "blue"]
  },
  {
    name: "Temur",
    colours: ["blue", "green", "red"]
  },
  {
    name: "Dune",
    colours: ["black", "red", "white", "green"]
  },
  {
    name: "Glint",
    colours: ["blue", "red", "black", "green"]
  },
  {
    name: "Ink",
    colours: ["blue", "red", "white", "green"]
  },
  {
    name: "Witch",
    colours: ["white", "green", "blue", "black"]
  },
  {
    name: "Temur",
    colours: ["blue", "white", "red", "black"]
  },
  {
    name: "Wubrg",
    colours: ["white", "blue", "black", "green", "red"]
  }
]