import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function MapSection() {
  const addressQuery = "Cisowa 911, 43-385 Jasienica";
  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(addressQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressQuery)}`;

  return (
    <section 
      id="mapa-dojazdu" 
      className="py-12 bg-gray-50 relative overflow-hidden"
    >
      <div id="map-container" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div id="map-wrapper" className="relative bg-white border border-gray-150 rounded-3xl overflow-hidden shadow-lg h-[450px] sm:h-[500px]">
          
          {/* Interactive Map Iframe */}
          <iframe
            id="google-maps-iframe"
            title="Mapa dojazdu Włoska Motoryzacja Jasienica"
            src={embedUrl}
            className="w-full h-full border-none grayscale hover:grayscale-0 transition-all duration-700"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />

          {/* Floating Location Card (Left / Top depending on mobile) */}
          <div 
            id="map-floating-card"
            className="absolute bottom-6 left-6 right-6 sm:right-auto sm:max-w-sm bg-[#111111] text-white p-6 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md bg-opacity-95 z-20 space-y-4"
          >
            <div id="map-card-header" className="flex items-start gap-3">
              <div id="map-pin-box" className="p-2.5 rounded-xl bg-[#CE2B37] text-white shrink-0">
                <MapPin size={18} />
              </div>
              <div id="map-card-text">
                <h4 id="map-company-title" className="font-serif font-semibold text-base text-white tracking-wide">Nasz Warsztat &amp; Sklep</h4>
                <p id="map-company-addr" className="font-sans text-xs text-gray-300 mt-1">Cisowa 911, 43-385 Jasienica</p>
              </div>
            </div>

            <div id="map-card-divider" className="h-px bg-white/10 w-full" />

            <div id="map-card-desc" className="text-xs font-sans text-gray-400 font-light leading-relaxed">
              Znajdujemy się w dogodnej lokalizacji w Jasienicy. Wygodny dojazd, bezpieczne miejsca parkingowe dla klientów oraz bezpośredni plac odbioru części używanych.
            </div>

            <div id="map-card-actions" className="flex items-center gap-3 pt-2">
              <a
                id="map-action-directions"
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-[#009246] hover:bg-[#007a3a] text-white text-xs font-semibold py-3 rounded-xl transition-all duration-300 shadow-md"
              >
                <Navigation size={12} />
                <span>Wyznacz trasę</span>
              </a>
              <a
                id="map-action-external"
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white transition-all duration-300"
                title="Otwórz w Google Maps"
              >
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
