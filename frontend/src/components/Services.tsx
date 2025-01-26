export default function  Services () {
  return (
    <section>
      <div className="w-full max-w mx-auto">
        <div className="flex flex-col space-y-16 px-5 sm:px-16 md:px-20 lg:px-28 py-8 dark:bg-gray-900">
          <div className="flex flex-col justify-center text-center mx-auto md:max-w-3xl space-y-5 ">
            <span className="rounded-lg bg-blue-50 dark:bg-gray-950 px-2.5 py-1 text-xs w-max mx-auto font-semibold tracking-wide dark:text-white" style={{color: "#0066b3",}}>
              Services
            </span>
            <h2 className="text-3xl font-semibold dark:text-white md:text-4xl xl:text-5xl leading-tight" style={{color: "#0066b3",}}> 
            Saylani Financial
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col p-5 xl:p-7 space-y-3 bg-black dark:bg-gray-950 border">
              <span className="text-blue-600 dark:text-blue-400 ">
              </span>
              <h2 className="text-xl font-semibold text-gray-300 dark:text-white">Wedding Financial Loans</h2>
              <p className="text-white dark:text-gray-300 text-justify line-clamp-2">
              Support for wedding expenses like Valima, Jahez, and furniture, with a maximum loan of PKR 5 lakh repayable in 3 years.
              </p>
            </div>
            <div className="flex flex-col p-5 xl:p-7 space-y-3 dark:bg-gray-950 border bg-black">
              <span className="text-blue-600 dark:text-blue-400">
              </span>
              <h2 className="text-xl font-semibold text-gray-300">Home Construction Loans</h2>
              <p className="text-white dark:text-gray-300 text-justify line-clamp-2">
              Loans for home structure and finishing, with a maximum of PKR 10 lakh and a repayment period of 5 years.
              </p>
            </div>
            <div className="flex flex-col p-5 xl:p-7 space-y-3 bg-black border">
              <span className="text-blue-600 dark:text-blue-400">
              </span>
              <h2 className="text-xl font-semibold text-gray-300">Business Startup Loans</h2>
              <p className="text-white dark:text-gray-300 text-justify line-clamp-2">
              Facilitates business ventures with funding for shop rent, machinery, and assets, capped at PKR 10 lakh over 5 years.
              </p>
            </div>
            <div className="flex flex-col p-5 xl:p-7 space-y-3 bg-black dark:bg-gray-950 border">
              <span className="text-blue-600 dark:text-blue-400">
              </span>
              <h2 className="text-xl font-semibold text-gray-300">Education Support Loans</h2>
              <p className="text-white dark:text-gray-300 text-justify line-clamp-2">
              Loans for university fees and school expenses, with flexible amounts based on requirements and a 4-year repayment plan.
              </p>
            </div>
            <div className="flex flex-col p-5 xl:p-7 space-y-3 bg-black dark:bg-gray-950 border">
              <span className="text-blue-600 dark:text-blue-400">
              </span>
              <h2 className="text-xl font-semibold text-gray-300">Hassle-Free Loan Process</h2>
              <p className="text-white dark:text-gray-300 text-justify line-clamp-2">
              Users can easily apply through a calculator, submit guarantor details, and generate slips for appointments
              </p>
            </div>
            <div className="flex flex-col p-5 xl:p-7 space-y-3 bg-black dark:bg-gray-950 border">
              <span className="text-blue-600 dark:text-blue-400">
              </span>
              <h2 className="text-xl font-semibold text-gray-300">KARACHI-BASED</h2>
              <p className="text-white dark:text-gray-300 text-justify line-clamp-2">
                This is a Karachi based project and local market sell with free delivery and latest technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};