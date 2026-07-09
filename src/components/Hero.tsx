import { useEffect, useState } from "react";
import { Phone, MessageSquare, ArrowDown, Shield } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Parallax Background Image */}
      <div 
        id="hero-bg-parallax"
        className="absolute inset-0 w-full h-full scale-110 transition-transform duration-75 ease-out"
        style={{
          transform: `translateY(${scrollY * 0.15}px)`,
          backgroundImage: `url('https://i.ibb.co/KcsxzSm5/473620346-122198484242212900-7489957763777120240-n.jpg')`,
          backgroundPosition: "center 40%",
          backgroundSize: "cover",
        }}
        referrerPolicy="no-referrer"
      />

      {/* Elegant Dark Vignette Overlay */}
      <div 
        id="hero-overlay"
        className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/70 to-[#111111]/90" 
      />

      {/* Decorative Light Glows */}
      <div 
        id="glow-green"
        className="absolute -top-40 -left-40 w-96 h-96 bg-[#009246]/10 rounded-full blur-[120px] pointer-events-none" 
      />
      <div 
        id="glow-red"
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#CE2B37]/15 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* Main Content */}
      <div 
        id="hero-content-container"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
      >
        <motion.div
          id="hero-badge-motion"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/15 backdrop-blur-md mb-6"
        >
          <span id="italy-badge-flag" className="flex gap-1">
            <span className="w-2 h-3.5 bg-[#009246] rounded-sm inline-block" />
            <span className="w-2 h-3.5 bg-white rounded-sm inline-block" />
            <span className="w-2 h-3.5 bg-[#CE2B37] rounded-sm inline-block" />
          </span>
          <span id="italy-badge-text" className="font-mono text-xs text-gray-300 font-medium tracking-widest uppercase">
            Fiat • Alfa Romeo • Lancia
          </span>
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-wide text-white mb-6 leading-[1.15]"
        >
          Specjaliści od <br />
          <span id="highlight-italian-text" className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-300 font-serif">
            włoskiej motoryzacji
          </span>
        </motion.h1>

        <motion.p
          id="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-3xl mx-auto font-sans text-base sm:text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10"
        >
          Od lat zajmujemy się sprzedażą nowych i używanych części oraz profesjonalnymi naprawami samochodów marek{" "}
          <strong className="text-white font-semibold">Fiat</strong>,{" "}
          <strong className="text-white font-semibold">Alfa Romeo</strong> i{" "}
          <strong className="text-white font-semibold">Lancia</strong>. Zapewniamy fachową obsługę, doświadczenie oraz indywidualne podejście do każdego klienta.
        </motion.p>

        {/* Buttons (CTAs) */}
        <motion.div
          id="hero-buttons"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            id="hero-call-cta"
            href="tel:693172784"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full font-display font-semibold text-base transition-all duration-300 shadow-xl hover:scale-105"
          >
            <Phone size={18} className="text-[#CE2B37]" />
            <span>Zadzwoń: 693 172 784</span>
          </a>
          <a
            id="hero-contact-cta"
            href="mailto:claudio@adres.pl"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#111111] hover:bg-white/5 text-white border border-white/20 hover:border-white/50 px-8 py-4 rounded-full font-display font-semibold text-base transition-all duration-300 hover:scale-105"
          >
            <MessageSquare size={18} className="text-[#009246]" />
            <span>Napisz do nas</span>
          </a>
        </motion.div>

        {/* Dynamic SEO Tagline - natural integration */}
        <motion.p
          id="hero-seo-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-12 text-xs font-mono text-gray-400 max-w-xl mx-auto"
        >
          Serwis samochodów włoskich Jasienica • Części nowe i używane Fiat, Alfa Romeo, Lancia
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          id="hero-scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
          onClick={() => {
            document.getElementById("o-nas")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">Przewiń</span>
          <ArrowDown size={14} className="text-gray-400" />
        </motion.div>
      </div>

      {/* Wave Section Divider */}
      <div id="hero-divider" className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#ffffff] to-transparent pointer-events-none" />
    </section>
  );
}
