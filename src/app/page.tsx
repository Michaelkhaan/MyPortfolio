// import About from "@/components/About";
// import Header from "@/components/Header";
// import Hero from "@/components/Hero";
// import Services from "@/components/Services";
// import Projects from "@/components/Projects";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";

// export default function Home() {
//   return (
//     <>
//     <Header />
//     <Hero />
//     <About />
//     <Services />
//     <Projects />
//     <Contact />
//     <Footer />
//     </>
//   );
// }



"use client";

import About from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal delay={0.1}>
        <About />
      </Reveal>

      <Reveal delay={0.2}>
        <Services />
      </Reveal>

      <Reveal delay={0.3}>
        <Projects />
      </Reveal>

      <Reveal delay={0.4}>
        <Contact />
      </Reveal>

      <Footer />
    </>
  );
}
