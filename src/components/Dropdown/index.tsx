"use client"

import { useUserContext } from "@/context/UserContext"
import { cardTypes, combinationNames } from "@/lib/data/data"
import { UserContextType } from "@/lib/types/types"
import { useClickAway } from "@uidotdev/usehooks"
import Link from "next/link"
import { useEffect, useState } from "react"
import { BiLogOutCircle } from "react-icons/bi"
import { GiMagicGate, GiMagicPortal } from "react-icons/gi"
import { MdManageAccounts } from "react-icons/md"

const Dropdown = () => {
  const { user, setUser } = useUserContext() as UserContextType
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [colourOpen, setColourOpen] = useState<boolean>(false)
  const [typeOpen, setTypeOpen] = useState<boolean>(false)

  const handleClick = () => {
    setMenuOpen(!menuOpen)
    setTypeOpen(false)
    setColourOpen(false)
  }

  const handleColourMenu = () => {
    setColourOpen(!colourOpen)
    setTypeOpen(false)
  }

  const handleTypeMenu = () => {
    setTypeOpen(!typeOpen)
    setColourOpen(false)
  }

  const handleLogOut = () => {
    setUser(null)
    setMenuOpen(false)
  }

  const menuRef = useClickAway<HTMLDivElement>(() => {
    setMenuOpen(false)
  })

  return (
    <>
      {user && (
        <div
          ref={menuRef}
          className="flex flex-col text-right absolute right-0 z-99"
        >
          <div onClick={handleClick} className="pb-16">
            {!menuOpen && (
              <GiMagicGate className="absolute right-2 size-8 my-1" />
            )}
            {menuOpen && (
              <GiMagicPortal className="absolute right-2 size-8 my-1" />
            )}
          </div>
          <ul
            className={`${menuOpen ? "flex flex-col mt-2" : "hidden"} gap-3 bg-black/50 rounded-2xl backdrop-blur-2xl w-40 h-auto pb-5 mr-1 pr-2`}
          >
            <li className="max-h-100 overflow-y-auto scrollbar-none">
              <div
                className="font-bold cursor-pointer"
                onClick={handleColourMenu}
              >
                Colours
              </div>
              <ul>
                {combinationNames.map((colour, index) => (
                  <li
                    key={index}
                    className={`${colourOpen ? "flex flex-col" : "hidden"} py-1 mr-1`}
                  >
                    <Link
                      href={`/colours/${colour.name}`}
                      className="hover:scale-105"
                      onClick={() => setMenuOpen(false)}
                    >
                      {colour.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li className="max-h-100 overflow-y-auto">
              <div
                className="font-bold cursor-pointer"
                onClick={handleTypeMenu}
              >
                Type
              </div>
              <ul>
                {cardTypes.map((type, index) => (
                  <li
                    key={index}
                    className={`${typeOpen ? "flex flex-col" : "hidden"} py-1 mr-1`}
                  >
                    <Link
                      href={`/category/${type.name}`}
                      className="hover:scale-105"
                      onClick={() => setMenuOpen(false)}
                    >
                      {type.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <Link
              href="/stash"
              className="font-bold cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              Stash
            </Link>
            <div className="flex justify-end cursor-pointer hover:scale-105">
              <Link href="/profile">
                <MdManageAccounts size={25} />
              </Link>
            </div>
            <div className="flex justify-end cursor-pointer hover:scale-105">
              <Link href="/login" onClick={handleLogOut}>
                <BiLogOutCircle size={25} />
              </Link>
            </div>
          </ul>
        </div>
      )}
    </>
  )
}

export default Dropdown
