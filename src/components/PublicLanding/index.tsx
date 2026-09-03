import { CardType } from "@/lib/types/types"

type PublicLandingProps = {
  randomCard: CardType | null
}

const PublicLanding = ({ randomCard }: PublicLandingProps) => {
  return (
    <>
      {randomCard && 
        <div className="flex flex-col">
          <h2>{randomCard.name}</h2>
          <img src={randomCard.image_uris.normal} alt={randomCard.name} />
        </div>
      }
    </>
  )
}

export default PublicLanding
