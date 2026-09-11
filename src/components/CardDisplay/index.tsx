import { CardType } from "@/lib/types/types"
import Link from "next/link"
import FavouriteButton from "../FavouriteButton"

type CardDisplayProps = {
  card: CardType | null
  landing?: boolean
}

const CardDisplay = ({ card, landing }: CardDisplayProps) => {
  return (
    <>
      {card && (
        <div
          className={`flex flex-col items-center border rounded-2xl shadow-black shadow-2xl p-10 mx-10 w-fit h-fit hover:scale-105 bg-gray/60 backdrop-blur-2xl ease-in-out duration-75 text-center`}
        >
          <div className="flex flex-start items-center justify-center w-full">
            {card && landing === false &&
              <Link
                title={`Read more on ${card.name}`}
                href={`/card/${card.id}`}
                className="flex items-center justify-center mb-10 border rounded-md text-white min-w-[70%] py-3 text-[16px]"
              >
                {card.name}
              </Link>
            }
            {landing === true &&
              <h2 className="flex items-center justify-center mb-10 border rounded-md text-white min-w-[70%] py-3 text-[16px] cursor-default">
                {card.name}
              </h2>
            }
          </div>
          <div className="w-[90%] h-auto flex-1">
            <img src={card.image_uris?.normal} alt={card.name} />
          </div>
          <div className="w-full">
            <FavouriteButton card={card} />
          </div>
        </div>
      )}
    </>
  )
}

export default CardDisplay
