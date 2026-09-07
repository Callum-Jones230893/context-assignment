import { CardType } from "@/lib/types/types"

type CardDisplayProps = {
  randomCard?: CardType | null
  alignedCards?: CardType | null
}

const CardDisplay = ({ randomCard, alignedCards }: CardDisplayProps) => {
  return (
    <>
      {randomCard && (
        <div className="flex flex-col">
          <h2>{randomCard.name}</h2>
          <img src={randomCard.image_uris.normal} alt={randomCard.name} />
        </div>
      )}
      {alignedCards && (
        <div className="flex flex-col">
          <h2>{alignedCards.name}</h2>
          <img src={alignedCards.image_uris.normal} alt={alignedCards.name} />
        </div>
      )}
    </>
  )
}

export default CardDisplay
