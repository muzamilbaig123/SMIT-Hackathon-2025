"use client"

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import apis from "@/utils/api";


type UserDataType = {
  cnic: string;
  email: string;
  name: string;
  password: string;
};

type FieldError = {
  field: string;
  message: string;
};

type BackendErrorResponse = {
  message?: string;
  errors?: FieldError[];
};

const RegisterForm = () => {
  // const [setUserData] = useState<UserDataType | null>(null);
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldError[]>([]);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoader(true);
    setError(null);
    setFieldErrors([]); // Clear previous field errors

    try {
         await axios.post<UserDataType>(apis().registerUser, {
        cnic,
        email,
        name,
        password,
      });
      // setUserData(response.data);

      // Clear form fields after successful submission
      setCnic("");
      setEmail("");
      setName("");
      setPassword("");

      router.push("/login");
    } catch (error) {
      const registerApiErr = error as AxiosError<BackendErrorResponse>;
      console.error("Registration error:", registerApiErr);

      if (registerApiErr.response?.data) {
        const { message, errors } = registerApiErr.response.data;

        // Set general error message
        if (message) {
          setError(message);
        }

        // Set field-specific errors
        if (errors && errors.length > 0) {
          setFieldErrors(errors);
        }
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoader(false);
    }
  };

  // Helper function to get error message for a specific field
  const getFieldError = (fieldName: string): string | undefined => {
    return fieldErrors.find((err) => err.field === fieldName)?.message;
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto border py-10 px-10 rounded shadow">
      {/* General error message */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}

      {/* CNIC Field */}
      <div className="mb-4">
        <label htmlFor="cnic" className="block text-gray-700 text-sm font-bold mb-2">
          CNIC
        </label>
        <input
          type="text"
          id="cnic"
          value={cnic}
          onChange={(e) => setCnic(e.target.value)}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            getFieldError("cnic") ? "border-red-500" : ""
          }`}
          required
        />
        {getFieldError("cnic") && (
          <p className="text-red-500 text-xs italic mt-1">{getFieldError("cnic")}</p>
        )}
      </div>

      {/* Email Field */}
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            getFieldError("email") ? "border-red-500" : ""
          }`}
          required
        />
        {getFieldError("email") && (
          <p className="text-red-500 text-xs italic mt-1">{getFieldError("email")}</p>
        )}
      </div>

      {/* Name Field */}
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            getFieldError("name") ? "border-red-500" : ""
          }`}
          required
        />
        {getFieldError("name") && (
          <p className="text-red-500 text-xs italic mt-1">{getFieldError("name")}</p>
        )}
      </div>

      {/* Password Field */}
      <div className="mb-6">
        <label htmlFor="pass" className="block text-gray-700 text-sm font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="pass"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            getFieldError("password") ? "border-red-500" : ""
          }`}
          required
        />
        {getFieldError("password") && (
          <p className="text-red-500 text-xs italic mt-1">{getFieldError("password")}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-center">
        <button
          type="submit"
          disabled={loader}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full disabled:opacity-50"
        >
          {loader ? "Processing..." : "Register"}
        </button>
      </div>

      {/* Login Link */}
      <div className="text-center py-4">
        Already have an account?{" "}
        <Link className="font-bold text-blue-500" href="/login">
          Login
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;