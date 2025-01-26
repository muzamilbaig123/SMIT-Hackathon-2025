"use client"

import { useState } from "react"
import { loanCategories } from "@/utils/loanData"



const LoanCalculator = () => {
  const [category, setCategory] = useState("")
  const [subcategory, setSubcategory] = useState("")
  const [initialDeposit, setInitialDeposit] = useState("")
  const [loanPeriod, setLoanPeriod] = useState("")
  const [loanAmount, setLoanAmount] = useState(0)
  const [monthlyPayment, setMonthlyPayment] = useState(0)

  const handleCalculate = () => {
    const selectedCategory = loanCategories.find((c) => c.name === category)
    if (!selectedCategory) return

    const maxLoan = selectedCategory.maxLoan
    const calculatedLoan = Math.min(maxLoan - Number.parseInt(initialDeposit), maxLoan)
    setLoanAmount(calculatedLoan)

    const monthlyPayment = calculatedLoan / (Number.parseInt(loanPeriod) * 12)
    setMonthlyPayment(monthlyPayment)
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
          Loan Category
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
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
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="initialDeposit">
          Initial Deposit (PKR)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="initialDeposit"
          type="number"
          value={initialDeposit}
          onChange={(e) => setInitialDeposit(e.target.value)}
          placeholder="Enter initial deposit"
        />
      </div>
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="loanPeriod">
          Loan Period (Years)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="loanPeriod"
          type="number"
          value={loanPeriod}
          onChange={(e) => setLoanPeriod(e.target.value)}
          placeholder="Enter loan period"
        />
      </div>
      <div className="flex items-center justify-start">
        <button
          className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" style={{backgroundColor: "#0066b3"}}
          type="button"
          onClick={handleCalculate}
        >
          Calculate
        </button>
      </div>
      {loanAmount > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Loan Breakdown:</h3>
          <p>Loan Amount: PKR {loanAmount.toLocaleString()}</p>
          <p>Monthly Payment: PKR {monthlyPayment.toFixed(2)}</p>
        </div>
      )}
    </div>
  )
}

export default LoanCalculator

