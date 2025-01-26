import LoanCalculator from "./LoanCalculator";

export default function About () {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center " style={{width: "50%"}}>
      <h1 className="text-5xl font-bold text-left">Loan Calculator Tool</h1>
      <p className="py-6 text-left">
      Easily calculate your loan details with our user-friendly tool. Select your category, input the loan period, and estimate your repayment breakdown instantly.
      </p>
    </div>
    <div style={{width: "50%"}}>
        <LoanCalculator />
    </div>
  </div>
</div>
        </>
    )
}