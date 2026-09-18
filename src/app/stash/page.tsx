"use client"

import CardDisplay from "@/components/CardDisplay"
import { useUserContext } from "@/context/UserContext"
import { UserContextType } from "@/lib/types/types"

const StashPage = () => {
  const { user } = useUserContext() as UserContextType
  return (
    <div className="flex flex-col">
      {user && (
        <h2 className="text-center pb-15 text-3xl md:text-4xl">
          Stashed Cards
        </h2>
      )}
      <div className="flex flex-col lg:grid grid-cols-2 2xl:grid-cols-3 gap-10 lg:gap-20 xl:gap-40">
        {user?.favouriteCards.map((card) => (
            <div key={card.id} className="flex items-center justify-center">
              <CardDisplay card={card} landing={false} />
            </div>
          ))}
      </div>
    </div>
  )
}

export default StashPage