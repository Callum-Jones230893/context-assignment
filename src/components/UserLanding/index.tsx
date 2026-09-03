"use client"

import { useUserContext } from "@/lib/context/UserContext"
import { UserContextType } from "@/lib/types/types"
import AlignmentSelection from "../AlignmentSelection"

const UserLanding = () => {
  const { user } = useUserContext() as UserContextType
  
  return (
    <div>
      {user?.alignment &&
        <AlignmentSelection />
      }
    </div>
  )
}

export default UserLanding