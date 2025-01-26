import RegisterForm from "@/components/RegisterForm"
import Image from "next/image"

export default function RegisterPage() {
  return (
    // <div className="container mx-auto px-4 py-8">
    <div className="container" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
      <div className="flex justify-center items-center ">
          <Image src="/logo.png" width={200} alt="saylani logo" />
      </div>
      <RegisterForm />
    </div>
  )
}

