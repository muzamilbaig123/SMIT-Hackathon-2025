export default function Hero() {
    return (
        <>
            <div className="hero min-h-screen relative bg-cover bg-center"  style={{ backgroundImage: "url('/hero.jpg')" }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                <div className="hero-content text-center relative z-10">
                    <div className="max-w-[54%]">
                        <h1 className="text-5xl font-bold text-white">Saylani Microfinance Plan</h1>
                        <p className="py-6 text-gray-300">
                        Saylani Microfinance is a welfare initiative that provides interest-free loans under the Qarze Hasana program, empowering individuals to achieve financial stability. It offers loans for various needs, including weddings, home construction, business startups, and education, ensuring equal opportunities for all. With a focus on transparency and community support, Saylani aims to uplift the underprivileged.
                        </p>
                        <button className="text-white btn" style={{backgroundColor: "#99CA3C"}}>Get Started</button>
                    </div>
                </div>
            </div>

        </>
    )
}