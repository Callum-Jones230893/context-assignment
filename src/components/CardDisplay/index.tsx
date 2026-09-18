"use client"

import { CardType, UserContextType } from "@/lib/types/types"
import Link from "next/link"
import FavouriteButton from "../FavouriteButton"
import { useUserContext } from "@/context/UserContext"

type CardDisplayProps = {
  card: CardType | null
  landing?: boolean
}

const CardDisplay = ({ card, landing }: CardDisplayProps) => {
  const { user } = useUserContext() as UserContextType

  return (
    <>
      {card && (
        <div
          className={`flex flex-col items-center border rounded-2xl shadow-black shadow-2xl p-10 mx-10 w-fit h-fit hover:scale-105 bg-gray/60 backdrop-blur-2xl ease-in-out duration-75 text-center font-(family-name:--font-planeswalker)`}
        >
          <div className="flex flex-start items-center justify-center w-full">
            {card && landing === false &&
              <Link
                title={`Read more on ${card.name}`}
                href={`/card/${card.id}`}
                className="flex items-center justify-center mb-10 border rounded-md text-white min-w-[70%] bg-black/30 py-3 text-[18px]"
              >
                {card.name}
              </Link>
            }
            {landing === true &&
              <h2 className="flex items-center justify-center mb-10 border rounded-md text-white min-w-[70%] bg-black/30 py-3 text-[18px] cursor-default font-bold">
                {card.name}
              </h2>
            }
          </div>
          <div className="w-[90%] h-auto flex-1">
            {card.image_uris?.normal 
              ? <img className="w-full h-150 aspect-63/88 object-contain rounded-lg" src={card.image_uris?.normal} alt={card.name} loading="lazy" />
              : <img className="w-full h-150 aspect-63/88 object-contain rounded-lg" src="/images/cardback.webp" alt={card.name} loading="lazy" />
            }
          </div>
            {user && <FavouriteButton card={card} />}
        </div>
      )}
    </>
  )
}

export default CardDisplay
