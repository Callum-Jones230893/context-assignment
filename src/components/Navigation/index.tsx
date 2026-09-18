"use client"

import { useUserContext } from "@/context/UserContext"
import { UserContextType } from "@/lib/types/types"
import Link from "next/link"
import Dropdown from "../Dropdown"
import { BiLogInCircle } from "react-icons/bi"

const Navigation = () => {
  const { user, setUser } = useUserContext() as UserContextType

  const handleLogOut = () => {
    setUser(null)
  }

  return (
    <div className="flex w-1/5">
      <div className="flex justify-evenly w-full relative">
        {!user && 
        <div className="absolute right-0 hover:scale-105">
          <Link href="/login" onClick={handleLogOut}>
            <BiLogInCircle size={30} />
          </Link>
        </div>}
        <Dropdown />
      </div>
    </div>
  )
}

export default Navigation
