"use client"

import { useUserContext } from "@/lib/context/UserContext"
import { UserContextType } from "@/lib/types/types"

const ProfilePage = () => {
  const { user } = useUserContext() as UserContextType

  return (
    <div>
      {user &&
        <h2>Welcome {user.username}</h2>
      }
    </div>
  )
}

export default ProfilePage
