"use client"

import { createContext, useState, useContext, ReactNode} from "react";
import { UserContextType, UsersType } from "../lib/types/types";

export const UserContext = createContext<UserContextType | null>(null)

export const UserContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<UsersType | null>(null)

  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
} 