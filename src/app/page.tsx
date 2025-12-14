import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
// import Testimonial from "@/components/Testemonial";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <About />
    <Services />
    <Projects />
    {/* <Testimonial /> */}
    <Contact />
    <Footer />
    </>
  );
}
