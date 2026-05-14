import AboutMe from "./sections/AboutMe";
import { ReactLenis } from 'lenis/react';
import Hero from "./sections/Hero";
import TestimonialsSection from "./sections/feedback";
import WhyUs from "./sections/WhyUs";
import Navbar from "./components/Navbar";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

function App() {
  return (
    <ReactLenis root>
      <Navbar />
      <main className="antialiased">
        <section id="hero"><Hero /></section>
        <section id="sobre"><AboutMe /></section>
        <section id="depoimentos"><TestimonialsSection /></section>
        <section id="diferenciais"><WhyUs /></section>
        <section id="faq"><FAQ /></section>
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;