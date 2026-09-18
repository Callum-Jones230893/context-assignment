"use client"

import { useAlignmentContext } from "@/context/AlignmentContext"
import { useUserContext } from "@/context/UserContext"
import { colours, combinationNames } from "@/lib/data/data"
import { AlignmentContextType, ColourType, UserContextType } from "@/lib/types/types"
import { useEffect, useState } from "react"

const AlignmentSelection = () => {
  const { user, setUser } = useUserContext() as UserContextType
  const { alignment, setAlignment } = useAlignmentContext() as AlignmentContextType
  const [ error, setError ] = useState<string | null>(null)

  const handleAlignment = (colour: ColourType) => {
    if (user && alignment) {
      setAlignment([...alignment, colour])

      alignment.includes(colour) && 
      setAlignment(alignment.filter((c) => c.name !== colour.name))

    } else {
      setAlignment([colour])
    }
  }

  useEffect(() => {
    setAlignment(null)
  }, [])
  
  const alignmentColours = combinationNames.filter((item) =>
    alignment?.every(
      (colour) =>
      item.colours.includes(colour.name) &&
      item.colours.length === alignment?.length,
    ),
  )

  const handlePledge = () => {
    if (user && alignment && alignment.length !== 0) {
      setUser({ ...user, alignment: alignmentColours[0].code!, favouriteCardColour: alignmentColours[0].name })
    } else {
      setError("Please align.")
      setTimeout(() =>  {setError(null)}, 2000)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center grow font-(family-name:--font-planeswalker)">
      <div className="text-center px-2 mb-5 text-[42px] rounded-2xl w-fit h-20 tracking-wide">
        {alignment && alignment.length > 1 ? (
          <h2 className="h-10">{alignmentColours[0].name}</h2> 
        ) : alignment ? (
          <h2 className="h-10">{alignment[0]?.name}</h2>
        ) : (
          <h2 className="h-10"></h2>
        )}
      </div>
      <div className="flex flex-col gap-15 items-center justify-evenly grow">
        <div className="grid grid-cols-3 min-w-100 lg:flex-row md:pt-0 gap-20">
          {colours.map((colour, index) => (
            <div
              key={index}
              onClick={() => handleAlignment(colour)}
              className="cursor-pointer w-20 md:w-30 lg:w-50 h-auto hover:scale-120 ease-in-out duration-200 image-custom-shadow last:col-start-3"
            >
              <img src={colour.image} alt={colour.name} />
            </div>
          ))}
        </div>
        <div
          onClick={handlePledge}
          className="cursor-pointer p-2 rounded-md hover:scale-105 text-[42px]"
        >
          Pledge
        </div>
        {error && <p className="z-90 absolute text-2xl">{error}</p>}
      </div>
    </div>
  )
}

export default AlignmentSelection
