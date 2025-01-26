"use client"

import { useState } from "react"
import { loanCategories } from "@/utils/loanData"

const LoanRequestForm = () => {
  const [category, setCategory] = useState("")
  const [subcategory, setSubcategory] = useState("")
  const [loanAmount, setLoanAmount] = useState("")
  const [guarantor1, setGuarantor1] = useState({ name: "", email: "", location: "", cnic: "" })
  const [guarantor2, setGuarantor2] = useState({ name: "", email: "", location: "", cnic: "" })
  const [address, setAddress] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement loan request submission logic
    console.log("Loan request submitted:", {
      category,
      subcategory,
      loanAmount,
      guarantor1,
      guarantor2,
      address,
      phoneNumber,
    })
    // TODO: Handle slip generation and display
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
          Loan Category
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          {loanCategories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subcategory">
          Subcategory
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="subcategory"
          value={subcategory}
          onChange={(e) => setSubcategory(e.target.value)}
          required
        >
          <option value="">Select a subcategory</option>
          {loanCategories
            .find((c) => c.name === category)
            ?.subcategories.map((sub) => (
              <option key={sub} value={sub}>
                {sub}
              </option>
            ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loanAmount">
          Loan Amount (PKR)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="loanAmount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Guarantor 1</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Name"
            value={guarantor1.name}
            onChange={(e) => setGuarantor1({ ...guarantor1, name: e.target.value })}
            required
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            value={guarantor1.email}
            onChange={(e) => setGuarantor1({ ...guarantor1, email: e.target.value })}
            required
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Location"
            value={guarantor1.location}
            onChange={(e) => setGuarantor1({ ...guarantor1, location: e.target.value })}
            required
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="CNIC"
            value={guarantor1.cnic}
            onChange={(e) => setGuarantor1({ ...guarantor1, cnic: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Guarantor 2</h3>
        <div className="grid grid-cols-2 gap-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Name"
            value={guarantor2.name}
            onChange={(e) => setGuarantor2({ ...guarantor2, name: e.target.value })}
            required
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            value={guarantor2.email}
            onChange={(e) => setGuarantor2({ ...guarantor2, email: e.target.value })}
            required
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Location"
            value={guarantor2.location}
            onChange={(e) => setGuarantor2({ ...guarantor2, location: e.target.value })}
            required
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="CNIC"
            value={guarantor2.cnic}
            onChange={(e) => setGuarantor2({ ...guarantor2, cnic: e.target.value })}
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
          Address
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="phoneNumber"
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Loan Request
        </button>
      </div>
    </form>
  )
}

export default LoanRequestForm

