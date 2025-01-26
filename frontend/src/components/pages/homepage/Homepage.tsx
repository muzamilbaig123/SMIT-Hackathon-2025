import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Hero from "@/components/hero/HeroSection";

export default function HomePage () {
    return (
        <>
            <Header/>
                <main>
                    <section>
                          <Hero/>
                    </section>
                </main>
            <Footer/>
        </>
    )
}