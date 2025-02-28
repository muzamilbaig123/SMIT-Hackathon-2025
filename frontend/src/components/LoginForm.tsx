"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import axios from "axios"
import apis from "@/utils/api"

type LoginDataType = {
  token: string,
  user?: object,
  error?: string,
}

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    // router.push("/dashboard")

    
    
    try{
      const response = await axios.post<LoginDataType>(apis().loginUser, {
        email,
        password,
      })

      setEmail("");
      setPassword("");
      const reciveData = response.data;

      console.log("######",reciveData)

      if(reciveData.token){
        localStorage.setItem("authToken", reciveData.token)
        router.push("/dashboard")
      }
      else{
        throw new Error("Authentication Token Not Recived")
      }


    }catch(e){
        if(axios.isAxiosError(e)){
          setError(e.response?.data?.e || "Login failed. please check your credentional")
        }
        else{
          setError("Unexpected Error occured. please try again later")
        }

      console.log("###", e)

    }




  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto border py-10 px-10 rounded shadow">
      <div className="mb-4">
        {
          error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded">
                {error}
            </div>
          )
        }
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
        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          required
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          type="submit"
          className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
        >
          Log In
        </button>

      </div>
      <div className="text-center py-4 flex justify-between items-center">
        <p>
        <Link className="font-bold text-blue-500" href={"/register"}>SignUp</Link>
        </p>
        <p>
        <Link className="underline text-blue-500" href={"/forget-password"}>Forget Password</Link>
        </p>
      </div>
    </form>
  )
}

export default LoginForm

