import FadeIn from "./FadeIn";

export default function BokaTid() {
  return (
    <section id="boka-tid" className="py-28 bg-[#1A1410]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <span className="text-[#B87333] text-[11px] tracking-[0.45em] uppercase font-medium block mb-4">
              Enkelt & smidigt
            </span>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white mb-6">
              Boka tid online
            </h2>
            <p className="text-white/55 text-base md:text-lg max-w-lg mx-auto leading-relaxed">
              Boka din tid enkelt via Bokadirekt. Välj tjänst, datum och tid
              som passar dig — tillgängligt dygnet runt.
            </p>
          </div>
        </FadeIn>

        {/* Widget placeholder */}
        <FadeIn delay={180}>
          <div
            id="bokadirekt-widget"
            className="relative border border-[#B87333]/20 bg-[#211810] min-h-[320px] flex flex-col items-center justify-center p-10 gap-6"
          >
            {/* Corner accents */}
            <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#B87333]/35" />
            <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#B87333]/35" />
            <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#B87333]/35" />
            <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#B87333]/35" />

            {/* Calendar icon */}
            <div className="text-[#B87333]/30">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="5" y="11" width="42" height="36" rx="2" stroke="currentColor" strokeWidth="1.4" />
                <path d="M5 22H47" stroke="currentColor" strokeWidth="1.4" />
                <path d="M17 5V17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M35 5V17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                <rect x="13" y="29" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
                <rect x="27" y="29" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.6" />
              </svg>
            </div>

            <div className="text-center">
              <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-1">
                Bokadirekt widget integreras här
              </p>
              <p className="text-white/18 text-xs">
                Kontakta oss för att aktivera onlinebokning
              </p>
            </div>

            <a
              href="https://www.bokadirekt.se"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#B87333] hover:bg-[#9A6025] text-white text-sm font-bold px-8 py-3.5 tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#B87333]/10"
            >
              Boka via Bokadirekt ↗
            </a>
          </div>
        </FadeIn>

        {/* Call option */}
        <FadeIn delay={300}>
          <div className="mt-8 text-center">
            <p className="text-white/35 text-sm">
              Föredrar du att ringa?{" "}
              <a
                href="tel:030010499"
                className="text-[#B87333] hover:text-white transition-colors tracking-wider"
              >
                0300-104 99
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
