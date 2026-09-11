export type UserContextType = {
  user: UsersType | null
  setUser: (user: UsersType) => void
}

export type UsersType = {
  username: string
  password: string
  alignment: string[]
  favouriteCardColour: string
  favouriteCards: CardType[]
  savedDecks: CardType[]
}

export type CardType = {
  id: string
  name: string
  image_uris?: {
    normal?: string
    large?: string
  }
  mana_cost: string
  cmc: string
  type_line: string
  oracle_text: string
  color_identity: string[]
}

// export type FullRecipeType = CardType & {
//   strCategory: string
//   strArea: string
//   strCountry: string
//   strInstructions: string
//   strTags: string
//   ingredients: string[]
// }

export type ColourType = {
  name: string
  code: string[]
  image: string
}

export type CombinationNamesType = {
  name: string
  code: string[]
  colours: string[]
}