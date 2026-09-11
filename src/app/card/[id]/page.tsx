import CardDisplay from "@/components/CardDisplay"

import { CardType } from "@/lib/types/types"

const CardPage = async ({ params }: { params: { id: string } }) => {
  const { id } = await params
  let card: CardType | null = (null)

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/cards/${id}`,
    {
      method: "GET",
      headers: {
        "User-Agent": "MyNextJSApp/1.0 (cj123@outlook.com)",
        Accept: "application/json",
      }
    }
  )
    
    const data = await response.json()
    card = data
  } catch (error) {
    console.log(error)
  }
    

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <CardDisplay card={card} landing={true} />
    </div>
  )
}

export default CardPage
