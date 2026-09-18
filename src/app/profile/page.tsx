"use client"

import ProfileInfoCard from "@/components/ProfileInfoCard"
import { useUserContext } from "@/context/UserContext"
import { UserContextType } from "@/lib/types/types"
import { redirect } from "next/navigation"

const ProfilePage = () => {
  const { user } = useUserContext() as UserContextType

  if (!user) {
    redirect("/")
  }

  return (
    <>
      {user && (
        <div className="flex flex-col items-center justify-center gap-10">
          <h2 className="text-3xl md:text-[42px]">Welcome {user.username}</h2>
          <ProfileInfoCard />
        </div>
      )}
    </>
  )
}

export default ProfilePage
