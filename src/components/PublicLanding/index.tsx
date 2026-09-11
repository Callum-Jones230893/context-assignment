import { CardType } from "@/lib/types/types"
import CardDisplay from "../CardDisplay"

type PublicLandingProps = {
  randomCard: CardType | null
}

const PublicLanding = ({ randomCard }: PublicLandingProps) => {
  return (
    <>
      {randomCard && 
        <CardDisplay card={randomCard} landing={true} />
      }
    </>
  )
}

export default PublicLanding
