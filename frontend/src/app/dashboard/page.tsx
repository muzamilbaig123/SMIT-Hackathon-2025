import LoanRequestForm from "@/components/LoanRequestForm";

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">User Dashboard</h1>
      <LoanRequestForm />
    </div>
  )
}

