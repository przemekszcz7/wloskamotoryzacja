import { ShieldCheck, Sparkles, Heart, Award } from "lucide-react";
import { motion } from "motion/react";

export default function AboutUs() {
  return (
    <section 
      id="o-nas" 
      className="py-24 sm:py-32 bg-[#ffffff] text-[#111111] relative overflow-hidden"
    >
      {/* Decorative Italian Flag Accent (left boundary) */}
      <div id="about-flag-accent" className="absolute left-0 top-1/4 bottom-1/4 w-[5px] flex flex-col">
        <div className="flex-1 bg-[#009246]" />
        <div className="flex-1 bg-gray-200" />
        <div className="flex-1 bg-[#CE2B37]" />
      </div>

      <div id="about-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div id="about-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Brand Element */}
          <div id="about-visual-column" className="col-span-1 lg:col-span-5 relative">
            <motion.div
              id="about-card-motion"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden bg-[#111111] text-white p-8 sm:p-12 shadow-2xl border border-gray-800"
            >
              {/* Outer flag style glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CE2B37]/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#009246]/10 rounded-full blur-2xl" />

              <span className="font-mono text-xs text-[#CE2B37] font-semibold tracking-widest uppercase mb-3 block">
                O NAS • CHI SIAMO
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl tracking-wide mb-6 leading-tight">
                Prawdziwa włoska dusza w każdym detalu.
              </h3>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#009246] shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white">Doświadczenie</h4>
                    <p className="text-xs text-gray-400 mt-1">Wieloletnia praca z markami Fiat, Alfa Romeo oraz Lancia.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white">Najwyższa Jakość</h4>
                    <p className="text-xs text-gray-400 mt-1">Selekcjonowane części nowe i używane, fachowy serwis.</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[#CE2B37] shrink-0">
                    <Heart size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white">Pasja &amp; Serce</h4>
                    <p className="text-xs text-gray-400 mt-1">Traktujemy każdy pojazd tak, jakby był naszym własnym.</p>
                  </div>
                </div>
              </div>

              {/* Decorative Brand watermark */}
              <div className="absolute right-4 bottom-4 opacity-5 pointer-events-none">
                <span className="font-display text-7xl font-black">ITALIA</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Narrative content */}
          <div id="about-text-column" className="col-span-1 lg:col-span-7 space-y-8">
            <motion.div
              id="about-text-motion"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold tracking-widest text-gray-400 uppercase block">
                  Nasza historia i misja
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-wide text-[#111111] leading-tight">
                  Pasja do włoskiej motoryzacji
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#009246] to-[#CE2B37] rounded-full mt-4" />
              </div>

              <div className="font-sans text-base sm:text-lg text-gray-600 font-light leading-relaxed space-y-6">
                <p>
                  <strong className="text-[#111111] font-medium">Włoska Motoryzacja</strong> to unikalne miejsce stworzone z autentycznej miłości do samochodów z Półwyspu Apenińskiego. Nasza codzienna praca to nie tylko rzemiosło, ale przede wszystkim pasja do wyjątkowego designu i mechaniki, która wyróżnia włoskie pojazdy na drogach.
                </p>
                <p>
                  Specjalizujemy się w sprzedaży części nowych i używanych oraz kompleksowych usługach naprawczych dla kultowych marek takich jak <strong className="text-[#111111] font-medium">Fiat, Alfa Romeo oraz Lancia</strong>. Dzięki wieloletniemu doświadczeniu pomagamy dobrać odpowiednie części i skutecznie rozwiązujemy nawet najbardziej skomplikowane problemy techniczne pojazdów.
                </p>
                <p>
                  Naszym priorytetem jest najwyższa jakość, pełen profesjonalizm oraz zadowolenie klientów. Wiemy, jak ważne dla właścicieli włoskich aut jest zaufanie i pewność, że ich samochód jest w rękach fachowców, którzy naprawdę rozumieją jego specyfikę.
                </p>
              </div>

              {/* Badges/Tags for SEO and relevance */}
              <div className="pt-4 flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors">
                  #Części Fiat Jasienica
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors">
                  #Części Alfa Romeo
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors">
                  #Części Lancia
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-xs font-semibold text-gray-700 transition-colors">
                  #Serwis Samochodów Włoskich
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
