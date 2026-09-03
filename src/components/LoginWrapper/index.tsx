"use client"

import { useUserContext } from "@/lib/context/UserContext"
import { UserContextType } from "@/lib/types/types"
import LoginForm from "../LoginForm"
import { ReactNode } from "react"
import Navigation from "../Navigation"

const LoginWrapper = ({ children }: { children: ReactNode }) => {
  const { user } = useUserContext() as UserContextType
  console.log(user)
  return (
    <div className="flex flex-col grow">
      {user && (
        <>
          <Navigation />
          {children}
        </>
      )}
      {!user && (
        <div className="flex flex-col flex-1 items-center justify-center">
          <LoginForm />
        </div>
      )}
    </div>
  )
}

export default LoginWrapper
