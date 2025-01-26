import LoginForm from "@/components/LoginForm"
import Image from "next/image"

export default function LoginPage() {
  return (

    <div className="container" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
      <div className="flex justify-center items-center ">
          <Image src="/logo.png" width={200} alt="saylani logo" />
      </div>
      <LoginForm />
    </div>

  )
}

