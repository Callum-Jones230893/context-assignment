"use client"

import CardDisplay from "@/components/CardDisplay"
import { useUserContext } from "@/context/UserContext"
import { combinationNames } from "@/lib/data/data"
import { redirect } from "next/navigation"
import { CardType, UserContextType } from "@/lib/types/types"
import { use, useEffect, useState } from "react"

type ColourPageType = {
  params: Promise<{ colour: string }>
}

const ColourPage = ({ params }: ColourPageType) => {
  const { colour } = use(params)
  const { user } = useUserContext() as UserContextType
  const [selectedColour, setSelectedColour] = useState<CardType[] | null>(null)
  const query = `color:${colour}`

  if (!user) {
    redirect("/")
  }

  useEffect(() => {
    const fetchAlignmentColours = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/cards/search?q=${encodeURIComponent(query)}`,
        )
        const data = await response.json()
        setSelectedColour(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchAlignmentColours()
  }, [colour])

  const filteredSearch = selectedColour?.filter((c) => {
    const pageColour = combinationNames.find((item) => item.name.toLowerCase() === colour.toLowerCase())?.code || []

    return pageColour.every(
      (i) =>
        c.color_identity.includes(i) &&
        pageColour.length === c.color_identity.length,
    )
  })

  return (
    <div className="flex flex-col">
      <h2 className="text-center pb-15 text-3xl md:text-4xl">{colour}</h2>
      <div className="flex flex-col lg:grid grid-cols-2 2xl:grid-cols-3 gap-10 lg:gap-20 xl:gap-40">
        {filteredSearch?.map((card) => (
          <div key={card.id} className="flex items-center justify-center">
            <CardDisplay key={card.id} card={card} landing={false} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColourPage
