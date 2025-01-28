"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const RegisterForm = () => {
  const [cnic, setCnic] = useState("")
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setCnic("");
    setEmail("");
    setName("");
    setPassword("")

    router.push("/login")

  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto border py-10 px-10 rounded shadow">
      <div className="mb-4">
        <label htmlFor="cnic" className="block text-gray-700 text-sm font-bold mb-2">
          CNIC
        </label>
        <input
          type="text"
          id="cnic"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="pass" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Register
        </button>
      </div>
      <div className="text-center py-4">
        you have already account ? <Link className="font-bold text-blue-500" href={"/login"}>Login</Link>
      </div>
    </form>
  )
}

export default RegisterForm

