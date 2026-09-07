"use client"

import { useUserContext } from "@/context/UserContext"
import { UserContextType } from "@/lib/types/types"
import AlignmentSelection from "../AlignmentSelection"
import SuggestedSection from "../SuggestedSection"

const UserLanding = () => {
  const { user } = useUserContext() as UserContextType

  return (
    <>
      {user && user.alignment.length === 0 && <AlignmentSelection />}
      {user && user.alignment.length !== 0 && <SuggestedSection />}
    </>
  )
}


export default UserLanding
