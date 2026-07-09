import React from "react";
import { Landmark, Package, ShieldCheck, Clock, Award, Users, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface WhyItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function WhyUs() {
  const items: WhyItem[] = [
    {
      id: "spec",
      icon: <Landmark className="text-[#009246]" size={26} />,
      title: "Specjalizacja we włoskich markach",
      description: "Nasze serce bije dla włoskiej motoryzacji. Znamy każdy sekret i specyfikę pojazdów Fiat, Alfa Romeo oraz Lancia, co pozwala nam na precyzyjną diagnostykę."
    },
    {
      id: "parts",
      icon: <Package className="text-[#CE2B37]" size={26} />,
      title: "Części nowe i używane",
      description: "Szeroki asortyment dostępny od ręki. Łączymy zalety fabrycznie nowych elementów z wysokiej jakości, sprawdzonymi częściami używanymi w doskonałym stanie."
    },
    {
      id: "service",
      icon: <ShieldCheck className="text-[#009246]" size={26} />,
      title: "Profesjonalny serwis",
      description: "Posiadamy zaawansowany sprzęt diagnostyczny oraz specjalistyczne narzędzia. Każda naprawa wykonywana jest zgodnie z najwyższymi standardami sztuki."
    },
    {
      id: "experience",
      icon: <Clock className="text-[#111111]" size={26} />,
      title: "Wieloletnie doświadczenie",
      description: "Lata pracy z włoskimi samochodami zaowocowały bezcenną wiedzą praktyczną. Nie ma dla nas problemów nie do rozwiązania – naprawiamy to, z czym inni sobie nie radzą."
    },
    {
      id: "consulting",
      icon: <Award className="text-[#CE2B37]" size={26} />,
      title: "Fachowe doradztwo",
      description: "Nie tylko sprzedajemy i naprawiamy – przede wszystkim doradzamy. Pomożemy dobrać optymalne rozwiązanie dopasowane do Twojego budżetu i oczekiwań."
    },
    {
      id: "individual",
      icon: <Users className="text-[#111111]" size={26} />,
      title: "Indywidualne podejście",
      description: "Każdy klient i każdy samochód traktowany jest wyjątkowo. Słuchamy Twoich potrzeb, tłumaczymy przebieg naprawy i dbamy o partnerską relację."
    }
  ];

  return (
    <section 
      id="dlaczego-my" 
      className="py-24 sm:py-32 bg-[#ffffff] text-[#111111] relative overflow-hidden"
    >
      <div id="why-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div id="why-header" className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-16 sm:mb-20">
          <div id="why-title-wrapper" className="lg:col-span-7 space-y-4">
            <span id="why-sub" className="font-mono text-xs font-bold tracking-widest text-[#009246] uppercase block">
              DLACZEGO WARTO NAM ZAUFAĆ?
            </span>
            <h2 id="why-title" className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-[#111111] leading-tight">
              Twój zaufany partner we włoskiej podróży
            </h2>
            <div id="why-decorator" className="h-1 w-20 bg-gradient-to-r from-[#009246] to-[#CE2B37] rounded-full mt-2" />
          </div>
          <div id="why-intro-wrapper" className="lg:col-span-5">
            <p id="why-intro" className="font-sans text-gray-500 font-light text-base leading-relaxed">
              Łączymy ekspercką wiedzę techniczną z autentyczną pasją. Dbamy o to, aby każda wizyta w naszym serwisie oraz zakup części były synonimem bezpieczeństwa i satysfakcji.
            </p>
          </div>
        </div>

        {/* Dynamic Grid of Why Us Cards */}
        <div id="why-cards-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <motion.div
              id={`why-card-${item.id}`}
              key={item.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="group bg-[#f9fafb] hover:bg-[#ffffff] rounded-3xl p-8 border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div id={`why-card-inner-${item.id}`} className="space-y-6">
                
                {/* Icon Wrapper with glowing effects */}
                <div 
                  id={`why-icon-wrapper-${item.id}`}
                  className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300"
                >
                  {item.icon}
                </div>

                {/* Content */}
                <div id={`why-content-${item.id}`} className="space-y-3">
                  <h3 id={`why-card-title-${item.id}`} className="font-serif font-semibold text-lg text-[#111111] tracking-wide flex items-center gap-2">
                    <CheckCircle className="text-[#009246] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shrink-0" size={16} />
                    <span>{item.title}</span>
                  </h3>
                  <p id={`why-card-desc-${item.id}`} className="font-sans text-gray-500 text-sm font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Bottom Brand Statement */}
        <div id="why-footer-brand" className="mt-16 text-center">
          <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase">
            STILE • PASSIONE • QUALITÀ • ESPERIENZA
          </span>
        </div>

      </div>
    </section>
  );
}
