"use client"

import { SetStateAction, useState } from "react"
import { users } from "@/lib/data/data"
import { useUserContext } from "@/context/UserContext"
import { UserContextType } from "@/lib/types/types"
import { redirect } from "next/navigation"

const LoginForm = () => {
  const { user, setUser } = useUserContext() as UserContextType

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [error, setError] = useState<string | null>(null)

  const handleUsername = (e: { target: { value: SetStateAction<string> } }) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e: { target: { value: SetStateAction<string> } }) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const loggedInUser = users.find(
      (item) => item.username === username && item.password === password,
    )
    loggedInUser && setUser(loggedInUser)
    loggedInUser && redirect("/")

    if (
      users.find(
        (item) => item.username !== username || item.password !== password,
      )
    ) {
      setError("Invalid credentials.")
      setTimeout(() => {
        setError(null)
      }, 2000)
    }

    console.log(error)
  }

  return (
    <section className="flex flex-col justify-center border w-8/10 md:w-6/10 lg:w-1/3 h-150 items-center gap-12 rounded-sm bg-black/50">
      <h2 className="py-8 text-[32px]">Login</h2>
      <form className="flex flex-col gap-10 text-[24px]">
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            placeholder="Username"
            required
            autoComplete="off"
            onChange={handleUsername}
            className="border border-white"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Username"
            required
            autoComplete="off"
            onChange={handlePassword}
            className="border border-white"
          />
        </div>
        {error ? <p className="text-[24px] text-center h-10">{error}</p> : <div className=" h-10"></div>}
        <button className="py-8 cursor-pointer hover:scale-105 text-[28px]" onClick={handleLogin}>
          Submit
        </button>
      </form>
    </section>
  )
}

export default LoginForm
