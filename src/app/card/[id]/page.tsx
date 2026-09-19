"use client"

import CardDisplay from "@/components/CardDisplay"
import { useUserContext } from "@/context/UserContext"
import { CardType, UserContextType } from "@/lib/types/types"
import { redirect } from "next/navigation"
import { use, useEffect, useState } from "react"

type CardPageType = {
  params: Promise<{ id: string }>
}

const CardPage = ({ params }: CardPageType) => {
  const { id } = use(params)
  const { user } = useUserContext() as UserContextType
  const [card, setCard] = useState< CardType | null>(null)

  if (!user) {
    redirect("/login")
  }

  useEffect(() => {
    const fetchCard = async () => { 
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_ENDPOINT}cards/${id}`,
          {
            method: "GET",
            headers: {
              "User-Agent": "MyNextJSApp/1.0 (cj123@outlook.com)",
              Accept: "application/json",
            },
          },
        )
        const data = await response.json()
        setCard(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchCard()
  }, [])

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <CardDisplay card={card} landing={true} />
    </div>
  )
}

export default CardPage
