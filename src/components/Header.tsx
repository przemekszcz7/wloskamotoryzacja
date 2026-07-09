import { useState, useEffect } from "react";
import { Phone, Menu, X, MessageSquare, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O nas", href: "#o-nas" },
    { name: "Oferta", href: "#oferta" },
    { name: "Dlaczego my", href: "#dlaczego-my" },
    { name: "Godziny", href: "#godziny-otwarcia" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header 
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#111111]/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3" 
          : "bg-gradient-to-b from-[#111111]/80 to-transparent py-5"
      }`}
    >
      {/* Top Italian flag decorative stripe */}
      <div id="italian-flag-stripe" className="absolute top-0 left-0 w-full h-[4px] flex">
        <div id="flag-green" className="h-full w-1/3 bg-[#009246]" />
        <div id="flag-white" className="h-full w-1/3 bg-white" />
        <div id="flag-red" className="h-full w-1/3 bg-[#CE2B37]" />
      </div>

      <div id="header-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="header-inner" className="flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a 
            id="logo-brand-link"
            href="#" 
            className="flex items-center gap-3 group"
          >
            <div id="logo-wrapper" className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-white/10 group-hover:border-[#CE2B37] transition-all duration-300 shadow-md">
              <img 
                id="brand-logo-img"
                src="https://i.ibb.co/twbCvPps/392875074-1826138227808714-3886506991033968735-n.jpg" 
                alt="Logo Włoska Motoryzacja" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div id="brand-text-container" className="flex flex-col">
              <span id="brand-title" className="font-serif font-bold text-lg tracking-wide text-white group-hover:text-gray-200 transition-colors">
                Włoska Motoryzacja
              </span>
              <span id="brand-subtitle" className="font-sans text-[10px] text-gray-400 font-medium tracking-wide uppercase">
                Części &amp; Serwis
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                id={`nav-link-${link.href.replace('#', '')}`}
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-medium text-gray-300 hover:text-white hover:underline hover:underline-offset-8 decoration-[#CE2B37] decoration-2 transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Contact Actions (Desktop) */}
          <div id="header-actions" className="hidden lg:flex items-center gap-4">
            <a
              id="header-call-btn"
              href="tel:693172784"
              className="flex items-center gap-2 bg-[#111111] hover:bg-white/5 text-white border border-white/20 hover:border-white/50 px-4 py-2 rounded-full text-sm font-semibold tracking-wide transition-all duration-300"
            >
              <Phone id="header-phone-icon" size={14} className="text-[#009246]" />
              <span>693 172 784</span>
            </a>
            <a
              id="header-contact-btn"
              href="mailto:claudio@adres.pl"
              className="flex items-center gap-2 bg-gradient-to-r from-[#009246] to-[#CE2B37] hover:opacity-90 text-white px-5 py-2 rounded-full text-sm font-semibold tracking-wide shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              <MessageSquare id="header-chat-icon" size={14} />
              <span>Napisz do nas</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div id="mobile-menu-btn-container" className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/5"
              aria-label="Menu"
            >
              {isOpen ? <X id="close-menu-icon" size={24} /> : <Menu id="open-menu-icon" size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#111111]/98 border-b border-white/10"
          >
            <div id="mobile-menu-links" className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  id={`mobile-nav-link-${link.href.replace('#', '')}`}
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all"
                >
                  {link.name}
                </a>
              ))}
              
              <div id="mobile-menu-actions" className="pt-4 border-t border-white/10 flex flex-col gap-3 px-3">
                <a
                  id="mobile-call-btn"
                  href="tel:693172784"
                  className="flex items-center justify-center gap-2 bg-white/5 text-white border border-white/20 py-3 rounded-full text-sm font-semibold"
                >
                  <Phone id="mobile-phone-icon" size={15} className="text-[#009246]" />
                  <span>Zadzwoń: 693 172 784</span>
                </a>
                <a
                  id="mobile-contact-btn"
                  href="mailto:claudio@adres.pl"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#009246] to-[#CE2B37] text-white py-3 rounded-full text-sm font-semibold"
                >
                  <MessageSquare id="mobile-chat-icon" size={15} />
                  <span>Wyślij wiadomość</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
