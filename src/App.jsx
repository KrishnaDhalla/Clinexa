import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import TrustBar from "./components/sections/TrustBar";
import ClientMarquee from "./components/sections/ClientMarquee";
import Problem from "./components/sections/Problem";
import Services from "./components/sections/Services";
import HowItWorks from "./components/sections/HowItWorks";
import BeforeAfter from "./components/sections/BeforeAfter";
import WhyUs from "./components/sections/WhyUs";
import Testimonials from "./components/sections/Testimonials";
import Pricing from "./components/sections/Pricing";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import FloatingButtons from "./components/ui/FloatingButtons";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <ClientMarquee />
        <Problem />
        <Services />
        <HowItWorks />
        <BeforeAfter />
        <WhyUs />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
