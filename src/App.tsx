import AboutMe from "./sections/AboutMe";
import { ReactLenis } from 'lenis/react';
import Hero from "./sections/Hero";
import WhyUs from "./sections/WhyUs";
import Navbar from "./components/Navbar";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";
import Feedback from "./sections/feedback";

function App() {
  return (
    <ReactLenis root>
      <Navbar />
      <main className="antialiased">
        <section id="hero"><Hero /></section>
        <section id="sobre"><AboutMe /></section>
        <section id="depoimentos"><Feedback /></section>
        <section id="diferenciais"><WhyUs /></section>
        <section id="faq"><FAQ /></section>
        <Footer />
      </main>
    </ReactLenis>
  );
}

export default App;