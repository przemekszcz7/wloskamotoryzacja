import { Clock, Calendar, Check, AlertCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { OpeningHourRow } from "../types";

export default function OpeningHours() {
  const [isOpenNow, setIsOpenNow] = useState<boolean | null>(null);
  const [currentDayIndex, setCurrentDayIndex] = useState<number>(-1);

  const schedule: OpeningHourRow[] = [
    { day: "Poniedziałek", hours: "09:00 - 17:00" },
    { day: "Wtorek", hours: "09:00 - 17:00" },
    { day: "Środa", hours: "09:00 - 17:00" },
    { day: "Czwartek", hours: "09:00 - 17:00" },
    { day: "Piątek", hours: "09:00 - 17:00" },
    { day: "Sobota", hours: "09:00 - 12:00", isSpecial: true },
    { day: "Niedziela", hours: "ZAMKNIĘTE" }
  ];

  // Map JS Day Index (0-6, where 0 is Sunday, 1 is Monday) to schedule array index (0-6)
  const mapJsDayToScheduleIndex = (jsDay: number): number => {
    if (jsDay === 0) return 6; // Sunday
    return jsDay - 1; // Mon -> 0, Tue -> 1 ... Sat -> 5
  };

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const jsDay = now.getDay(); // 0-6
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const currentIdx = mapJsDayToScheduleIndex(jsDay);
      setCurrentDayIndex(currentIdx);

      const currentTimeInMinutes = hours * 60 + minutes;

      if (jsDay >= 1 && jsDay <= 5) {
        // Mon-Fri: 9:00 - 17:00 (540 mins to 1020 mins)
        if (currentTimeInMinutes >= 540 && currentTimeInMinutes < 1020) {
          setIsOpenNow(true);
        } else {
          setIsOpenNow(false);
        }
      } else if (jsDay === 6) {
        // Sat: 9:00 - 12:00 (540 mins to 720 mins)
        if (currentTimeInMinutes >= 540 && currentTimeInMinutes < 720) {
          setIsOpenNow(true);
        } else {
          setIsOpenNow(false);
        }
      } else {
        // Sunday
        setIsOpenNow(false);
      }
    };

    checkOpenStatus();
    // Refresh every minute
    const interval = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="godziny-otwarcia" 
      className="py-24 bg-[#111111] text-white relative overflow-hidden border-t border-b border-white/5"
    >
      {/* Visual background accents */}
      <div id="hours-glow-1" className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 bg-[#009246]/5 rounded-full blur-[100px] pointer-events-none" />
      <div id="hours-glow-2" className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 bg-[#CE2B37]/5 rounded-full blur-[100px] pointer-events-none" />

      <div id="hours-container" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div id="hours-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual clock and Status indicator */}
          <div id="hours-left-col" className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div id="hours-title-wrapper" className="space-y-4">
              <span id="hours-sub" className="font-mono text-xs font-bold tracking-widest text-[#CE2B37] uppercase block">
                ZAPRASZAMY DO SERWISU
              </span>
              <h2 id="hours-title" className="font-serif text-3xl sm:text-4xl tracking-wide text-white leading-tight">
                Godziny otwarcia
              </h2>
              <div id="hours-decorator" className="h-1 w-16 bg-[#009246] mx-auto lg:mx-0 rounded-full" />
            </div>

            <p id="hours-intro" className="font-sans text-gray-400 font-light text-base leading-relaxed">
              Planujesz wizytę po części lub chcesz zostawić u nas samochód na serwis? Zapoznaj się z naszymi standardowymi godzinami pracy. W razie pytań, zapraszamy do kontaktu telefonicznego.
            </p>

            {/* Smart dynamic open indicator */}
            <motion.div
              id="hours-status-box"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className={`inline-flex items-center gap-3 px-6 py-4 rounded-2xl border ${
                isOpenNow === true
                  ? "bg-[#009246]/10 border-[#009246]/30 text-green-400"
                  : isOpenNow === false
                  ? "bg-[#CE2B37]/10 border-[#CE2B37]/30 text-red-400"
                  : "bg-white/5 border-white/15 text-gray-300"
              }`}
            >
              <div id="hours-status-dot" className={`w-3 h-3 rounded-full relative`}>
                <div className={`absolute inset-0 rounded-full animate-ping ${isOpenNow === true ? "bg-green-400" : isOpenNow === false ? "bg-red-400" : "bg-gray-400"}`} />
                <div className={`w-full h-full rounded-full ${isOpenNow === true ? "bg-green-500" : isOpenNow === false ? "bg-red-500" : "bg-gray-500"}`} />
              </div>
              <div id="hours-status-text" className="text-left font-sans text-sm">
                {isOpenNow === true ? (
                  <>
                    <strong className="block font-semibold">OTWARTE TERAZ</strong>
                    <span className="text-xs text-green-400/80">Zapraszamy do kontaktu i wizyty!</span>
                  </>
                ) : isOpenNow === false ? (
                  <>
                    <strong className="block font-semibold">ZAMKNIĘTE</strong>
                    <span className="text-xs text-red-400/80 font-light">Zapraszamy w godzinach pracy.</span>
                  </>
                ) : (
                  <>
                    <strong className="block font-semibold">SPRAWDZANIE STATUSU</strong>
                    <span className="text-xs text-gray-400 font-light">Ładowanie informacji...</span>
                  </>
                )}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium schedule card */}
          <div id="hours-right-col" className="lg:col-span-7">
            <motion.div
              id="hours-schedule-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-md shadow-xl"
            >
              <div id="hours-schedule-header" className="flex items-center gap-3 pb-6 border-b border-white/10 mb-6">
                <Clock className="text-[#009246]" size={20} />
                <span className="font-display font-semibold tracking-wide text-sm uppercase">Harmonogram tygodniowy</span>
              </div>

              <div id="hours-schedule-list" className="space-y-4">
                {schedule.map((row, index) => {
                  const isToday = index === currentDayIndex;
                  return (
                    <div
                      id={`hours-row-${index}`}
                      key={row.day}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-300 ${
                        isToday 
                          ? "bg-white/10 border-l-4 border-l-[#CE2B37] translate-x-1" 
                          : "bg-transparent hover:bg-white/[0.02]"
                      }`}
                    >
                      <div id={`hours-day-info-${index}`} className="flex items-center gap-3">
                        <span 
                          id={`hours-day-name-${index}`}
                          className={`font-display text-sm sm:text-base ${
                            isToday ? "font-bold text-white" : "font-medium text-gray-300"
                          }`}
                        >
                          {row.day}
                        </span>
                        {isToday && (
                          <span id="hours-today-badge" className="text-[10px] bg-[#CE2B37] text-white px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider">
                            Dzisiaj
                          </span>
                        )}
                      </div>
                      
                      <span 
                        id={`hours-time-span-${index}`}
                        className={`font-mono text-xs sm:text-sm tracking-wide ${
                          row.hours === "ZAMKNIĘTE" 
                            ? "text-red-400 font-semibold" 
                            : isToday ? "text-white font-semibold" : "text-gray-400"
                        }`}
                      >
                        {row.hours}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Dynamic Warning for Saturday / Sunday */}
              <div id="hours-schedule-footer" className="mt-6 pt-6 border-t border-white/10 flex items-start gap-3 text-xs text-gray-400 font-sans font-light">
                <AlertCircle className="text-[#CE2B37] shrink-0 mt-0.5" size={14} />
                <p>
                  Przed planowaną wizytą w sobotę zalecamy kontakt telefoniczny w celu potwierdzenia dostępności konkretnych podzespołów lub wolnego stanowiska serwisowego.
                </p>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
