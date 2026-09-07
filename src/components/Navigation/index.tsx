"use client"

import { useUserContext } from "@/context/UserContext"
import { UserContextType } from "@/lib/types/types"
import Link from "next/link"

const Navigation = () => {
  const { user } = useUserContext() as UserContextType

  return (
    <div className="flex justify-center pt-8 py-4">
      <div className="flex justify-evenly w-full">
        <Link href="/">Home</Link>
        <Link href="/categories">Categories</Link>
        <Link href="/favourites">Stashed Cards</Link>
        {user ? (
          <Link href="/profile">My profile</Link>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </div>
  )
}

export default Navigation
