"use client"

import { useUserContext } from "@/context/UserContext"
import { CardType, UserContextType } from "@/lib/types/types"
import { useEffect, useState } from "react"
import PublicLanding from "../PublicLanding"
import UserLanding from "../UserLanding"

const InitialDisplay = () => {
  const { user } = useUserContext() as UserContextType
  const [displayedCard, setDisplayedCard] = useState<CardType | null>(null)

  useEffect(() => {
    if (user?.favouriteCardColour) {
      fetchFavouriteColour()
    } else {
      fetchRandomCard()
    }
  }, [])

  const selectedColours = `${user?.alignment.filter((colour) => colour)}`

  const fetchRandomCard = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}cards/random`,
      )
      const data = await response.json()

      data && setDisplayedCard(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  const fetchFavouriteColour = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}cards/search?q=c%3A${selectedColours}`,
      )
      const data = await response.json()
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <>
      {user 
        ? <UserLanding /> 
        : <PublicLanding randomCard={displayedCard} />
      }
    </>
  )
}

export default InitialDisplay
