import { Car, Flag, Info, Wrench, Compass, CheckCircle2, Sliders } from "lucide-react";
import { motion } from "motion/react";
import { OfferItem } from "../types";

export default function Offer() {
  const offers: OfferItem[] = [
    {
      id: "fiat",
      iconName: "car",
      title: "Części do Fiat",
      description: "Oferujemy kompleksową ofertę części nowych oraz używanych do większości modeli marki Fiat. Zapewniamy najwyższą dostępność i szybki czas realizacji.",
      bullets: ["Części silnikowe i osprzęt", "Elementy blacharskie i wnętrza", "Oryginalne i zamienniki premium"],
      brandColor: "#009246" // Green accent
    },
    {
      id: "alfa",
      iconName: "flag",
      title: "Części Alfa Romeo",
      description: "Elementy mechaniczne, zaawansowane zawieszenia, kompletne silniki, osprzęt elektryczny oraz bieżące części eksploatacyjne dla modeli Alfy.",
      bullets: ["Podzespoły sportowe i wyczynowe", "Elementy układu hamulcowego", "Zawieszenia wielowahaczowe"],
      brandColor: "#CE2B37" // Red accent
    },
    {
      id: "lancia",
      iconName: "compass",
      title: "Części Lancia",
      description: "Szeroki, unikalny wybór części nowych i używanych do kultowych modeli marki Lancia. Posiadamy elementy trudno dostępne na rynku.",
      bullets: ["Rzadkie elementy wykończenia", "Podzespoły napędowe", "Szybki import na zamówienie"],
      brandColor: "#1e3a8a" // Premium Blue accent for Lancia
    },
    {
      id: "repair",
      iconName: "wrench",
      title: "Usługi naprawcze",
      description: "Profesjonalna diagnostyka komputerowa, mechanika pojazdowa oraz kompleksowe naprawy główne i bieżące samochodów włoskich.",
      bullets: ["Diagnostyka komputerowa", "Naprawy silników i skrzyń biegów", "Przeglądy okresowe i serwis oleju"],
      brandColor: "#111111" // Dark accent
    },
    {
      id: "consult",
      iconName: "sliders",
      title: "Pomoc w doborze części",
      description: "Profesjonalne doradztwo techniczne, weryfikacja poprawności części po numerze VIN oraz pomoc przy wyborze najbardziej optymalnych podzespołów.",
      bullets: ["Dobór części po numerze VIN", "Porównanie zamienników z oryginałami", "Eksperckie doradztwo techniczne"],
      brandColor: "#6b7280" // Gray accent
    }
  ];

  const renderIcon = (name: string, color: string) => {
    switch (name) {
      case "car":
        return <Car className="transition-transform duration-300 group-hover:scale-110" style={{ color }} size={32} />;
      case "flag":
        return <Flag className="transition-transform duration-300 group-hover:scale-110" style={{ color }} size={32} />;
      case "compass":
        return <Compass className="transition-transform duration-300 group-hover:scale-110" style={{ color }} size={32} />;
      case "wrench":
        return <Wrench className="transition-transform duration-300 group-hover:scale-110" style={{ color }} size={32} />;
      case "sliders":
        return <Sliders className="transition-transform duration-300 group-hover:scale-110" style={{ color }} size={32} />;
      default:
        return <Info style={{ color }} size={32} />;
    }
  };

  return (
    <section 
      id="oferta" 
      className="py-24 sm:py-32 bg-[#f9fafb] text-[#111111] relative overflow-hidden"
    >
      {/* Dynamic Background Grid Pattern */}
      <div id="offer-bg-grid" className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "radial-gradient(#111111 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
      
      <div id="offer-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="offer-header" className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span id="offer-sub" className="font-mono text-xs font-bold tracking-widest text-[#CE2B37] uppercase block mb-3">
            OFERTA USŁUG I PRODUKTÓW
          </span>
          <h2 id="offer-title" className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-[#111111] leading-tight">
            Kompleksowe rozwiązania dla Twojego włoskiego auta
          </h2>
          <div id="offer-decorator" className="h-1 w-16 bg-[#009246] mx-auto mt-6 rounded-full" />
          <p id="offer-subtitle" className="mt-6 text-gray-500 font-sans font-light text-base sm:text-lg">
            Niezależnie od tego, czy potrzebujesz rzadkiej części zamiennej, czy szukasz zaufanego mechanika do profesjonalnej naprawy – jesteśmy tutaj, aby pomóc.
          </p>
        </div>

        {/* Offer Cards Grid */}
        <div id="offer-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((item, index) => (
            <motion.div
              id={`offer-card-${item.id}`}
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col justify-between"
            >
              <div id={`offer-card-top-${item.id}`} className="space-y-6">
                
                {/* Icon Circle */}
                <div 
                  id={`offer-icon-circle-${item.id}`}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gray-50 group-hover:bg-gray-100 transition-colors duration-300"
                >
                  {renderIcon(item.iconName, item.brandColor || "#111111")}
                </div>

                {/* Offer Details */}
                <div id={`offer-card-info-${item.id}`} className="space-y-3">
                  <h3 id={`offer-card-title-${item.id}`} className="font-serif font-semibold text-xl text-[#111111] tracking-wide group-hover:text-gray-900">
                    {item.title}
                  </h3>
                  <p id={`offer-card-desc-${item.id}`} className="text-sm font-sans text-gray-500 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bullets List */}
                {item.bullets && (
                  <ul id={`offer-card-bullets-${item.id}`} className="space-y-2.5 pt-4 border-t border-gray-100">
                    {item.bullets.map((bullet, idx) => (
                      <li id={`offer-card-bullet-${item.id}-${idx}`} key={idx} className="flex items-start gap-2.5 text-xs text-gray-600 font-sans">
                        <CheckCircle2 id={`bullet-check-icon-${item.id}-${idx}`} size={14} className="text-[#009246] mt-0.5 shrink-0" />
                        <span id={`bullet-text-${item.id}-${idx}`}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Card Footer Stripe */}
              <div id={`offer-card-stripe-${item.id}`} className="mt-8 pt-4 flex items-center justify-between">
                <a 
                  id={`offer-card-cta-link-${item.id}`}
                  href="mailto:claudio@adres.pl?subject=Zapytanie o szczegóły oferty" 
                  className="font-display font-semibold text-xs uppercase tracking-wider text-[#111111] group-hover:text-[#CE2B37] transition-colors duration-300 flex items-center gap-1.5"
                >
                  <span>Zapytaj o szczegóły</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </a>
                <div 
                  id={`offer-color-dot-${item.id}`}
                  className="w-2.5 h-2.5 rounded-full" 
                  style={{ backgroundColor: item.brandColor }} 
                />
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom CTA bar */}
        <motion.div
          id="offer-bottom-cta"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-[#111111] text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-800 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div id="offer-cta-text" className="space-y-2 max-w-xl text-center md:text-left">
            <h4 id="offer-cta-title" className="font-display font-bold text-xl sm:text-2xl tracking-tight">
              Potrzebujesz rzadkiej części lub wyceny naprawy?
            </h4>
            <p id="offer-cta-desc" className="text-sm font-sans text-gray-400 font-light">
              Zadzwoń do nas lub wyślij e-mail. Doradzimy i sprawdzimy dostępność na naszym magazynie.
            </p>
          </div>
          <div id="offer-cta-actions" className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <a
              id="offer-cta-phone"
              href="tel:693172784"
              className="bg-[#CE2B37] hover:bg-[#b01e28] text-white px-6 py-3.5 rounded-full font-display font-semibold text-sm text-center shadow-md transition-all duration-300 hover:scale-[1.02]"
            >
              Zadzwoń teraz
            </a>
            <a
              id="offer-cta-form"
              href="mailto:claudio@adres.pl"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/10 px-6 py-3.5 rounded-full font-display font-semibold text-sm text-center transition-all duration-300"
            >
              Napisz e-mail
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
