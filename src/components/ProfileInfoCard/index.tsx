import { useUserContext } from "@/context/UserContext"
import { UserContextType } from "@/lib/types/types"

const ProfileInfoCard = () => {
  const {user} = useUserContext() as UserContextType
  return (
    <div className="flex flex-col gap-5 text-[18px] md:text-xl">
      <p>Username : {user?.username}</p>
      <p>Pledged alignment : {user?.alignment}</p>
      <p>Number of stashed cards : </p>
      <p>You have {user?.savedDecks.length} saved decks.</p>
    </div>
  )
}

export default ProfileInfoCard