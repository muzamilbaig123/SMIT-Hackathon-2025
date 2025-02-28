"use client"
import Link from 'next/link'
import React, { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';
import axios from 'axios';
import apis from '@/utils/api';

export default function ForgetPassword () {


  const router = useRouter();


  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false)


  const onSUbmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      setLoading(true)
    try{

      const response = await axios.post(apis().forgetPass, {email});
      console.log("aasasasas", response)

      if(response.status === 200){
        console.log("ok jani 200")

        localStorage.setItem('passToken', response?.data?.token )

        router.push('/verifyotp')
        setLoading(false)

      }

      // setLoading(false)

    }catch(e){
      console.log("my error", e)
    }


    // setEmail("");
    // router.push("/verifyotp")
  }

  return (
    <>
      
      <form onSubmit={onSUbmitHandler} className="max-w-md rounded-lg p-8 flex flex-col mx-auto w-full mt-10 md:mt-0 border shadow" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <h2 className="text-gray-900 text-2xl font-medium title-font mb-5 text-center">Forget Password</h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input value={email} type="email"  name="email" id='emails' placeholder="Enter Email" onChange={((e) => { setEmail(e.target.value) })} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <button type='submit' className="text-white bg-blue-500  hover:bg-blue-700 border-0 py-2 px-8 focus:outline-none rounded text-lg">{ loading ? 'processing...' : 'send' }</button>
        <div className="text-center py-2 bg-gray-200 my-4 rounded-md hover:cursor-pointer">
           <Link className="font-bold text-blue-500" href={"/login"}>Back To Login</Link>
        </div>
      </form>

    </>
  )
}
