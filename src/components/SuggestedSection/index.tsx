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
        setAlignedSearch(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAlignmentColours()
  }, [user?.alignment])

  const filteredSearch = alignedSearch?.filter((colour) =>
    user?.alignment.every(
      (c) =>
        colour.color_identity.includes(c) &&
        user.alignment.length === colour.color_identity.length,
    ),
  )

  return (
    <>
      {user?.alignment && alignedSearch && (
        <h2 className="pb-15 text-3xl md:text-4xl">
          {user.favouriteCardColour}
        </h2>
      )}
      <div className="flex flex-col lg:grid grid-cols-2 2xl:grid-cols-3 w-[75%] gap-10 lg:gap-20 xl:gap-40">
        {user?.alignment &&
          filteredSearch &&
          filteredSearch.map((card) => (
            <div key={card.id} className="flex items-center justify-center">
              <CardDisplay card={card} landing={false} />
            </div>
          ))}
      </div>
    </>
  )
}

export default SuggestedSection
