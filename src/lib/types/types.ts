export type UserContextType = {
  user: UsersType | null
  setUser: (user: UsersType | null) => void
}

export type UsersType = {
  username: string
  password: string
  alignment: string[]
  favouriteCardColour: string
  favouriteCards: CardType[]
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

export type ColourType = {
  name: string
  code: string[]
  image: string
}

export type AlignmentContextType = {
  alignment: ColourType[] | null
  setAlignment: (alignment: ColourType[] | null) => void
}

export type CombinationNamesType = {
  name: string
  code: string[]
  colours: string[]
}

export type NavCardTypes = {
  name: string
}