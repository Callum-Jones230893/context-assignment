"use client"

import CardDisplay from "@/components/CardDisplay"
import { useUserContext } from "@/context/UserContext"
import { CardType, UserContextType } from "@/lib/types/types"
import { redirect } from "next/navigation"
import { use, useEffect, useState } from "react"

type CategoryPageType = {
  params: Promise<{ category: string }>
}

const CategoryPage = ({ params }: CategoryPageType) => {
  const { category } = use(params)
  const { user } = useUserContext() as UserContextType
  const [cardList, setCardList] = useState<CardType[] | null>(null)
  const query = `t:${category.toLowerCase()}`

  if (!user) {
    redirect('/login')
  }

  useEffect(() => {
    const fetchCatetgories = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}/cards/search?q=${encodeURIComponent(query)}`,
          {
            method: "GET",
            headers: {
              "User-Agent": "MyNextJSApp/1.0 (cj123@outlook.com)",
              Accept: "application/json",
            },
          },
        )
        const data = await response.json()
        setCardList(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCatetgories()
  }, [])

  return (
    <div className="flex flex-col">
      <h2 className="text-center pb-15 text-3xl md:text-4xl">
        {category}
      </h2>
      <div className="flex flex-col lg:grid grid-cols-2 2xl:grid-cols-3 gap-10 lg:gap-20 xl:gap-40">
        {cardList?.map((card) => (
          <div key={card.id} className="flex items-center justify-center">
            <CardDisplay key={card.id} card={card} landing={false} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CategoryPage
