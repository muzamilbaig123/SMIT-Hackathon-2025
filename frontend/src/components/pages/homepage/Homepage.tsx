import About from "@/components/aboutus";
import Footer from "@/components/common/footer/footer";
import Header from "@/components/common/header/header";
import Hero from "@/components/hero/HeroSection";
import Services from "@/components/Services";

export default function HomePage () {
    return (
        <>
            <Header/>
                <main>
                    <section>
                          <Hero/>
                    </section>
                    <section>
                        <Services />
                    </section>
                    <section>
                    <About />
                    </section>
                </main>
            <Footer/>
        </>
    )
}