"use client"

import { useUserContext } from "@/context/UserContext"
import { colours, combinationNames } from "@/lib/data/data"
import { ColourType, UserContextType } from "@/lib/types/types"
import { useState } from "react"

const AlignmentSelection = () => {
  const { user, setUser } = useUserContext() as UserContextType
  const [alignment, setAlignment] = useState<ColourType[] | null>(null)

  // const handleSelectedColour = (selectedColour: ColourType) => {
  //   if (selectedColour.selected === false) {
  //     [{...selectedColour, selected: true}]
  //   } else {
  //     [{...selectedColour, selected: false}]
  //   }
  // }

  const handleAlignment = (colour: ColourType) => {
    if (alignment) {
      setAlignment([...alignment, colour])
      alignment.includes(colour) &&
        setAlignment(alignment.filter((c) => c.name !== colour.name))
    } else {
      setAlignment([colour])
    }
  }

  const alignmentColours = combinationNames.filter((item) =>
    alignment?.every(
      (colour) =>
        item.colours.includes(colour.name) &&
        item.colours.length === alignment?.length,
    ),
  )

  const handlePledge = () => {
    if (user && alignment) {
      setUser({ ...user, alignment: alignmentColours[0].name })
    }
  }

  return (
    <div className="flex flex-col items-center justify-center grow">
      <div className="flex-start mb-5 font-bold text-3xl">
        {alignment && alignment.length > 1 ? (
          <h2 className="h-10">{alignmentColours[0].name}</h2>
        ) : alignment ? (
          <h2 className="h-10">{alignment[0]?.name}</h2>
        ) : (
          <h2 className="h-10"></h2>
        )}
      </div>
      <div className="flex flex-col gap-15 items-center justify-evenly grow">
        <div className="flex flex-col md:flex-row md:pt-0 gap-20">
          {colours.map((colour, index) => (
            <div
              key={index}
              onClick={() => handleAlignment(colour)}
              className="cursor-pointer w-50 h-auto hover:scale-110"
            >
              <img src={colour.image} alt={colour.name} />
            </div>
          ))}
        </div>
        <div
          onClick={handlePledge}
          className="cursor-pointer border border-black p-2 rounded-md hover:bg-black hover:text-white"
        >
          Pledge
        </div>
      </div>
    </div>
  )
}

export default AlignmentSelection
