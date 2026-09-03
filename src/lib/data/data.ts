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
    image: ""
  },
  {
    name: "red",
    image: ""
  },
  {
    name: "black",
    image: ""
  },
  {
    name: "blue",
    image: ""
  },
  {
    name: "green",
    image: ""
  }
]