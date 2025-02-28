"use client"

import Link from "next/link";
import React, { type FormEvent, useState, useRef, type ChangeEvent, type KeyboardEvent, useEffect } from "react";
import { useRouter } from "next/navigation"
import Countdown from 'react-countdown';
import axios from "axios";
import apis from "@/utils/api";


export default function VerifyOTP() {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [err, setErr] = useState<string | null>(null);

  // Initialize refs array with explicit typing
  const router = useRouter();

  const inputRefs = useRef<HTMLInputElement[]>([])

  const handleChange = (index: number, e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (isNaN(Number(value))) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)

    // Move to next input
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1]?.focus()
    }
  }

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const otpString = otp.join("")
    if (otpString.length === 6) {
      console.log("OTP submitted:", otpString)
      // Here you would typically send the OTP to your server for verification

      try{
        const response = await axios.post(apis().verifyOtp, {otp: otpString});
        console.log(response)
        
        const recRes = response.data;

        if(recRes.status === true){
          router.push("/update-password")
          console.log("succefully")
        }
        else{
          setErr(recRes.message);
        }
        

      }
      catch(e){
        console.log("verifyotp time err", e)
        setErr("Something Went Wrong!") 
       
      }


      // router.push("/update-password")
    } else {
      alert("Please enter a valid 5-digit OTP")
    }


  }


  useEffect(() => {

    const getTime = async () => {
      try {

        const res = await axios.post(apis().verifyTime, {token: localStorage.getItem('authToken')})

        if(!res.data.ok){
          throw new Error(res.data.message)
        }

        if(res?.data?.status){
          console.log(res)
        }


      } catch (e) {
          console.log("otptimechecking", e)
      }
    }

    getTime()

  })


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={onSubmitHandler} className="max-w-md w-full bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-gray-900 text-2xl font-medium title-font mb-5 text-center">Verify OTP</h2>
        <div className="mb-6">
          <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-2">
            Enter the 5-digit OTP sent to your email
          </label>
          <div>
          { err && <p className="text-red-500 text-center mt-2">{err}</p> }

          </div>
          <div className="flex justify-between gap-2">
            {otp.map((digit, index) => (
              <input
                key={index}
                required
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => {
                  if (el) {
                    inputRefs.current[index] = el
                  }
                }}
                className="w-12 h-12 text-center text-2xl border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label={`Digit ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Verify
        </button>
        <div className='my-4'>
        <Countdown className='font-bold text-blue-600' date={Date.now() + 1 * 60 * 1000}/>
        </div>
        <div className="w-full text-center mt-4">
          <Link className=" text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" href="#" style={{width: "100%"}}>
            Resend OTP
          </Link>
        </div>
        <div className="text-center mt-4">
          <Link className="font-medium text-blue-600 hover:underline" href={"/login"}>
            Back To Login
          </Link>
        </div>
      </form>
    </div>
  )
}
