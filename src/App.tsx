import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Offer from "./components/Offer";
import WhyUs from "./components/WhyUs";
import OpeningHours from "./components/OpeningHours";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <div id="root-app-layout" className="min-h-screen bg-[#111111] text-white selection:bg-[#CE2B37] selection:text-white">
      {/* Fixed Sticky Header Navigation */}
      <Header />

      {/* Main Single Page Sections */}
      <main id="main-content-flow">
        {/* Parallax Hero Banner */}
        <Hero />

        {/* Narrative / History About us */}
        <AboutUs />

        {/* Dynamic Interactive Cards of Services & Offer */}
        <Offer />

        {/* Bento/Grid style bullet points "Why Us" */}
        <WhyUs />

        {/* Live status check of Opening hours */}
        <OpeningHours />

        {/* Embedded styled location maps */}
        <MapSection />
      </main>

      {/* Footer detailing addresses, fast links, SEO keywords */}
      <Footer />

      {/* Floating UX scroll booster */}
      <ScrollToTop />
    </div>
  );
}
