import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";

export default function HomePage () {
    return (
        <>
            <Header/>
                <main>
                    <section className="h-screen bg-black text-white">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </section>
                </main>
            <Footer/>
        </>
    )
}