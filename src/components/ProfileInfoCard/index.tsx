"use client"

import { useAlignmentContext } from "@/context/AlignmentContext"
import { useUserContext } from "@/context/UserContext"
import { AlignmentContextType, UserContextType } from "@/lib/types/types"
import Link from "next/link"
import { useEffect, useState } from "react"
import AlignmentSelection from "../AlignmentSelection"

const ProfileInfoCard = () => {
  const { user } = useUserContext() as UserContextType
  const { alignment } = useAlignmentContext() as AlignmentContextType
  const [changeAlignment, setChangeAlignment] = useState<boolean>(false)

  const handleClick = () => {
    changeAlignment === false && setChangeAlignment(true)
  }

  useEffect(() => {
    setChangeAlignment(false)
  }, [user])


  return (
    <section className="min-w-full">
      {!changeAlignment && alignment ? (
        <div className="flex flex-col border justify-center items-center w-8/10 md:w-6/10 lg:w-1/3 h-150 gap-20 m-auto text-[18px] md:text-xl py-8 rounded-sm bg-black/50">
          <p>Username : {user?.username}</p>
          <div>
          <p className="flex flex-col">Pledged alignment : {user?.favouriteCardColour}</p>
            <div onClick={handleClick} className="cursor-pointer hover:scale-105 text-center py-3">Change alignment</div>
          </div>
          <div className="flex flex-col">
            <p>Number of stashed cards : {user?.favouriteCards.length}</p>
            <Link href="/stash" className="hover:scale-105 text-center py-3">View stash</Link>
          </div>
        </div>
      ) : (
        <AlignmentSelection />
      )}
    </section>
  )
}

export default ProfileInfoCard
