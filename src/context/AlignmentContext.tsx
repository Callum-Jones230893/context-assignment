"use client"

import { createContext, useState, useContext, ReactNode } from "react"
import { AlignmentContextType, ColourType } from "@/lib/types/types"

export const AlignmentContext = createContext<AlignmentContextType | null>(null)

export const AlignmentContextProvider = ({children}: {children: ReactNode}) => {
  const [alignment, setAlignment] = useState<ColourType[] | null>(null)

  return (
    <AlignmentContext.Provider value={{alignment, setAlignment}}>
      {children}
    </AlignmentContext.Provider>
  )
}

export const useAlignmentContext = () => {
  return useContext(AlignmentContext)
}