"use client"

import { SetStateAction, useState } from "react"
import { users } from "@/lib/data/data"
import { useUserContext } from "@/lib/context/UserContext"
import { UserContextType } from "@/lib/types/types"
import { redirect } from 'next/navigation'

const LoginForm = () => {
  const { user, setUser } = useUserContext() as UserContextType

  console.log(user)

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

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
  }

  return (
    <section className="flex flex-col border w-1/4 items-center gap-10 rounded-sm">
      <h2 className="text-2xl py-8">Login</h2>
      <form className="flex flex-col gap-8">
        <div className="flex flex-col">
          <label htmlFor="username">Enter your username</label>
          <input
            id="username"
            placeholder="Username"
            required
            autoComplete="off"
            onChange={handleUsername}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Enter your password</label>
          <input
            id="password"
            type="password"
            placeholder="Username"
            required
            autoComplete="off"
            onChange={handlePassword}
          />
        </div>
        <button className="py-8" onClick={handleLogin}>
          Submit
        </button>
      </form>
    </section>
  )
}

export default LoginForm
