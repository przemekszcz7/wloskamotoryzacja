import { Phone, Mail, MapPin, Facebook, ChevronRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="main-footer"
      className="bg-[#111111] text-gray-300 pt-20 pb-8 border-t border-white/5 relative overflow-hidden"
    >
      {/* Decorative Italian Flag Stripes at the top boundary */}
      <div id="footer-flag-stripe" className="absolute top-0 left-0 w-full h-[3px] flex">
        <div className="h-full w-1/3 bg-[#009246]" />
        <div className="h-full w-1/3 bg-white" />
        <div className="h-full w-1/3 bg-[#CE2B37]" />
      </div>

      <div id="footer-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div id="footer-main-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info (Col 1 - 4 Cols span) */}
          <div id="footer-brand-col" className="lg:col-span-4 space-y-6">
            <div id="footer-brand-logo-wrapper" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
                <img 
                  id="footer-logo-img"
                  src="https://i.ibb.co/twbCvPps/392875074-1826138227808714-3886506991033968735-n.jpg" 
                  alt="Włoska Motoryzacja Logo" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 id="footer-brand-title" className="font-serif font-semibold text-base text-white tracking-wide">Włoska Motoryzacja</h3>
                <span id="footer-brand-sub" className="text-[10px] uppercase text-gray-500 font-mono tracking-widest font-semibold block">Części &amp; Serwis</span>
              </div>
            </div>

            <p id="footer-brand-desc" className="text-sm text-gray-400 font-sans font-light leading-relaxed">
              Profesjonalne usługi naprawcze oraz sprzedaż wysokiej klasy części nowych i używanych do samochodów włoskich marek Fiat, Alfa Romeo i Lancia. Jakość, zaufanie oraz pełne zaangażowanie.
            </p>

            <div id="footer-socials" className="flex items-center gap-3">
              <a 
                id="footer-fb-link"
                href="https://www.facebook.com/profile.php?id=61556387023047" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#3b5998]/10 text-gray-400 hover:text-[#3b5998] border border-white/10 hover:border-[#3b5998]/20 flex items-center justify-center transition-all duration-300"
                title="Facebook"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links / Offer (Col 2 - 4 Cols span) */}
          <div id="footer-links-col" className="lg:col-span-4 space-y-6">
            <h4 className="font-display font-semibold text-sm text-white tracking-wider uppercase">Nasza Oferta</h4>
            <ul className="space-y-3 text-sm font-sans font-light">
              <li>
                <a href="#oferta" className="hover:text-white flex items-center gap-1 transition-colors">
                  <ChevronRight size={12} className="text-[#009246]" />
                  <span>Części do Fiat</span>
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-white flex items-center gap-1 transition-colors">
                  <ChevronRight size={12} className="text-[#CE2B37]" />
                  <span>Części Alfa Romeo</span>
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-white flex items-center gap-1 transition-colors">
                  <ChevronRight size={12} className="text-white" />
                  <span>Części Lancia</span>
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-white flex items-center gap-1 transition-colors">
                  <ChevronRight size={12} className="text-gray-500" />
                  <span>Serwis i mechanika</span>
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-white flex items-center gap-1 transition-colors">
                  <ChevronRight size={12} className="text-gray-500" />
                  <span>Dobór części z VIN</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details (Col 3 - 4 Cols span) */}
          <div id="kontakt" className="lg:col-span-4 space-y-6">
            <h4 className="font-display font-semibold text-sm text-white tracking-wider uppercase">Kontakt</h4>
            <ul className="space-y-4 text-sm font-sans font-light">
              <li className="flex gap-3 items-start">
                <Phone size={16} className="text-[#009246] mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-gray-500 block">Telefon</span>
                  <a href="tel:693172784" className="font-semibold text-white hover:text-gray-200 transition-colors">693 172 784</a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <Mail size={16} className="text-[#CE2B37] mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-gray-500 block">Adres E-mail</span>
                  <a href="mailto:claudio@adres.pl" className="font-semibold text-white hover:text-gray-200 transition-colors">claudio@adres.pl</a>
                </div>
              </li>
              <li className="flex gap-3 items-start">
                <MapPin size={16} className="text-gray-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-xs text-gray-500 block">Adres</span>
                  <span className="font-semibold text-white block">Cisowa 911</span>
                  <span className="text-xs text-gray-400 block">43-385 Jasienica</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div id="footer-bottom" className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-sans">
          <div id="footer-copyright">
            &copy; {currentYear} <strong>Włoska Motoryzacja Jasienica</strong>. Wszelkie prawa zastrzeżone.
          </div>
          <div id="footer-credits" className="flex items-center gap-1.5">
            <span>Specjaliści od marek: Fiat, Alfa Romeo, Lancia</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
