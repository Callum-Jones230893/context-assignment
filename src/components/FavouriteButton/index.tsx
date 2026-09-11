"use client"

import { useUserContext } from "@/context/UserContext"
import { CardType, UserContextType } from "@/lib/types/types"
import { GiSwapBag } from "react-icons/gi"

type FavouriteProps = {
  card: CardType
}

const FavouriteButton = ({ card }: FavouriteProps) => {
  const { user, setUser } = useUserContext() as UserContextType
  const stashed = user?.favouriteCards.find(c => c.id === card.id) ? true : false
  
  const handleFavourite = () => {
    if(user) {
      stashed === false 
      ? setUser({...user, favouriteCards: [...user.favouriteCards, card]})
      : setUser({...user, favouriteCards: [...user.favouriteCards.filter((fav) => fav.id !== card.id)]})
    }
  }

  return (
    <div className="flex justify-center pt-5 hover:">
      <button className="w-20" onClick={handleFavourite}>
        {stashed 
         ? <GiSwapBag title="Stash" color="#705510" size={40} className="hover:scale-120 cursor-pointer ease-in-out duration-50" />
         : <GiSwapBag title="Stash" color="gray" size={40} className="hover:scale-120 cursor-pointer ease-in-out duration-50" />
        }
        
      </button>
    </div>
  )
}

export default FavouriteButton