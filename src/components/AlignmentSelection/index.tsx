"use client"

import { useUserContext } from "@/lib/context/UserContext"
import { colours } from "@/lib/data/data"
import { UserContextType } from "@/lib/types/types"
import { useState } from "react"

const AlignmentSelection = () => {
  const { user, setUser } = useUserContext() as UserContextType
  const [alignment, setAlignment] = useState<string[] | null>(null)

  const handleAlignment = (colour: string) => {
    alignment ? setAlignment([...alignment, colour]) : setAlignment([colour])
  }
  // adjust to allow only one instance of each colour so it cannot be ["red", "red"] etc
  
  const handlePledge = () => {
    setUser({ ...user!, alignment: alignment! })
  }

  return (
    <div className="flex flex-col gap-15 items-center">
      <div className="flex flex-col md:flex-row pt-10 md:pt-0 gap-20">
      {colours.map((colour, index) => (
        <div
          key={index}
          onClick={() => handleAlignment(colour.name)}
          className="cursor-pointer w-50 h-auto hover:scale-110"
        >
          <img src={colour.image} alt={colour.name} />
        </div>
      ))}
      </div>
      <div onClick={handlePledge} className="cursor-pointer">Pledge</div>
    </div>
  )
}

export default AlignmentSelection
