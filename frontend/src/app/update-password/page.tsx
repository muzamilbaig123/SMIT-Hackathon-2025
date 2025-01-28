import UpdatePassword from "@/components/UpdatePassword";
import Image from "next/image";

export default function updatePass() {
  return (
    <>
      <div className="container" style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
        <div className="flex justify-center items-center ">
          <Image src="/logo.png" width={280} height={280} alt="saylani logo" className="mb-4" />
        </div>
        <UpdatePassword />
      </div>
    </>
  )
}