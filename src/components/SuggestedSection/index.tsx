import { useUserContext } from "@/context/UserContext"
import { CardType, UserContextType } from "@/lib/types/types"
import { useEffect, useState } from "react"
import CardDisplay from "../CardDisplay"

const SuggestedSection = () => {
  const { user } = useUserContext() as UserContextType
  const [alignedSearch, setAlignedSearch] = useState<CardType[] | null>(null)
  const query = `color:${user?.alignment}`

  useEffect(() => {
    if (!user?.alignment) return

    const fetchAlignmentColours = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/cards/search?q=${encodeURIComponent(query)}`,
        )
        const data = await response.json()
        setAlignedSearch(data)
      } catch (error) {
        console.log(error)
      }
    }

    fetchAlignmentColours()
  }, [user?.alignment])

  return (
    <div>
      {user?.alignment &&
        alignedSearch?.map((card) => {
          return <CardDisplay alignedCards={card} />
        })}
    </div>
  )
}

export default SuggestedSection
