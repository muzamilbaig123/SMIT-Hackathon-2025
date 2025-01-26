import Link from "next/link"
import { loanCategories } from "@/utils/loanData"

const LandingPage = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Saylani Microfinance App</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {loanCategories.map((category) => (
          <div key={category.id} className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            <ul className="list-disc list-inside">
              {category.subcategories.map((subcategory) => (
                <li key={subcategory}>{subcategory}</li>
              ))}
            </ul>
            <p className="mt-4">Max Loan: PKR {category.maxLoan.toLocaleString()}</p>
            <p>Loan Period: {category.loanPeriod} years</p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/calculator" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Try Loan Calculator
        </Link>
      </div>
    </div>
  )
}

export default LandingPage

