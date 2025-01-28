"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function UpdatePassword () {
    const [password, setPassword] = useState("")
    const [confirmPass, setConfirmPass] = useState("")

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPassword("");
    setConfirmPass("");

    if(password === confirmPass){
        router.push("/login")
    }
    else{
        console.log("PAssword is not match")
    }

  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto border py-10 px-10 rounded shadow">
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="confirmPass" className="block text-gray-700 text-sm font-bold mb-2">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPass"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Update
        </button>
      </div>
    </form>
  )
}


