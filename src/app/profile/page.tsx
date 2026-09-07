"use client"

import ProfileInfoCard from "@/components/ProfileInfoCard"
import { useUserContext } from "@/context/UserContext"
import { UserContextType } from "@/lib/types/types"

const ProfilePage = () => {
  const { user } = useUserContext() as UserContextType

  return (
    <>
      {user &&
        <div className="flex flex-col items-center justify-center gap-10">
          <h2 className="text-2xl md:text-4xl">Welcome {user.username}</h2>
          <ProfileInfoCard />
        </div>
      }
    </>
  )
}

export default ProfilePage
