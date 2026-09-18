import Link from "next/link"
import Navigation from "../Navigation"

const Header = () => {
  return (
    <header className="flex justify-between w-full h-30 px-5 md:px-20 pt-12 mb-12 bg-linear-to-b from-black/80 to-transparent z-10 shadow-3xl sticky top-0 left-0">
      <Link href="/" className="pb-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl px-10">MTG planner</h1>
      </Link>
      <Navigation />
    </header>
  )
}

export default Header
