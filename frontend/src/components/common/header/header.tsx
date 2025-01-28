import Image from "next/image";
import Link from "next/link";
// import img from ""


export default function Header() {
    return (
        <>
            <div className="navbar bg-base-100 pl-10 pr-10 pt-5 pb-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><Link href={"/"}>Home</Link></li>
                            <li><Link href={""}>About Us</Link></li>
                            <li>
                                <Link href={""}>Loan Categories</Link>
                                <ul className="p-2">
                                    <li><Link href={""}>Wedding</Link></li>
                                    <li><Link href={""}>Home Construction</Link></li>
                                    <li><Link href={""}>Business Startup</Link></li>
                                    <li><Link href={""}>Education</Link></li>
                                </ul>
                            </li>
                            <li><Link href={""}>Gallery</Link></li>
                            <li><Link href={""}>Contact Us</Link></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <Image src="/logo.png" width={200} alt="saylani logo" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href={""}>Home</Link></li>
                        <li><Link href={""}>About Us</Link></li>
                        <li>
                            <details>
                                <summary>Loan Categories</summary>
                                <ul className="p-2">
                                <li><Link href={""}>Wedding</Link></li>
                                    <li><Link href={""}>Home Construction</Link></li>
                                    <li><Link href={""}>Business Startup</Link></li>
                                    <li><Link href={""}>Education</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link href={""}>Contact Us</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link href={"/login"} className="btn mr-2 text-white" style={{backgroundColor: "#0066B3"}}>Login</Link>
                    <Link href={"/register"} className="btn">SignUp</Link>
                </div>
            </div>
        </>
    )
}