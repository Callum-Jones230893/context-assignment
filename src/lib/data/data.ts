import { ColourType, UsersType } from "../types/types";

export const users: UsersType[] = [
  { 
    username: "callum", 
    password: "password",
    alignment: [],
    favouriteCardColour: ["white"], 
    savedDecks: []
  },
  // {
  //   username: "caroline", 
  //   password: "password", 
  //   favouriteCategories: null, 
  //   favouriteRecipes: []
  // },
  // {
  //   username: "callumThree", 
  //   password: "callumThree", 
  //   favouriteCategories: null, 
  //   favouriteRecipes: []
  // },
  // {
  //   username: "callumFour", 
  //   password: "callumFour",
  //   favouriteCategories: null, 
  //   favouriteRecipes: []
  // },
]

export const colours: ColourType[] = [
  {
    name: "white",
    image: "/images/white.png"
  },
  {
    name: "red",
    image: "/images/red.png"
  },
  {
    name: "black",
    image: "/images/black.png"
  },
  {
    name: "blue",
    image: "/images/blue.png"
  },
  {
    name: "green",
    image: "/images/green.png"
  }
]