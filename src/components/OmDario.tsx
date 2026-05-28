import FadeIn from "./FadeIn";

const highlights = [
  "Erfaret och passionerat team",
  "Premium hårprodukter",
  "Välkomnande atmosfär",
  "Centralt läge i Kungsbacka",
];

export default function OmDario() {
  return (
    <section id="om-oss" className="py-28 bg-[#211810]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text content */}
          <div>
            <FadeIn>
              <span className="text-[#B87333] text-[11px] tracking-[0.45em] uppercase font-medium block mb-4">
                Vår historia
              </span>
              <h2 className="font-serif font-bold text-4xl md:text-5xl text-white leading-tight mb-8">
                Välkommen till
                <br />
                <span className="text-[#B87333]">Dario Frisör Salong</span>
              </h2>
            </FadeIn>

            <FadeIn delay={120}>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-5">
                Vi är en etablerad frisörsalong belägen i hjärtat av Kungsbacka.
                Med ett erfaret och passionerat team erbjuder vi professionella
                frisyrtjänster av högsta kvalitet för hela familjen.
              </p>
            </FadeIn>

            <FadeIn delay={220}>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-5">
                Hos oss möts du alltid av en välkomnande och avslappnad miljö.
                Vi lägger stor vikt vid detaljer och ser till att varje kund
                lämnar salongen med ett resultat de kan vara stolta över.
              </p>
            </FadeIn>

            <FadeIn delay={320}>
              <p className="text-white/60 text-base md:text-lg leading-relaxed mb-10">
                Vi är stolta över att ha betjänat Kungsbacka-borna i många år
                och ser alltid fram emot att välkomna både nya och
                återkommande kunder.
              </p>
            </FadeIn>

            {/* Drop in badge */}
            <FadeIn delay={400}>
              <div className="inline-flex items-center gap-3 border border-[#B87333]/25 bg-[#B87333]/6 px-6 py-4 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#B87333] animate-pulse-dot" />
                <span className="text-[#B87333] text-sm font-medium tracking-[0.15em]">
                  Drop in välkommen
                </span>
              </div>
            </FadeIn>

            {/* Highlights */}
            <FadeIn delay={480}>
              <div className="space-y-3">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white/50 text-sm"
                  >
                    <div className="w-5 h-px bg-[#B87333]" />
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Decorative card */}
          <FadeIn delay={150} direction="right">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-[#B87333]/5 rounded-sm blur-xl pointer-events-none" />

              <div className="relative border border-[#B87333]/20 bg-[#1A1410] p-10 md:p-14">
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#B87333]/35" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#B87333]/35" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#B87333]/35" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#B87333]/35" />

                <div className="text-center">
                  {/* Scissor SVG */}
                  <div className="flex justify-center mb-8 text-[#B87333]">
                    <svg
                      width="72"
                      height="72"
                      viewBox="0 0 72 72"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="36"
                        cy="36"
                        r="34"
                        stroke="currentColor"
                        strokeWidth="0.8"
                        strokeOpacity="0.3"
                      />
                      <path
                        d="M24 24 L48 48"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M48 24 L24 48"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                      <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.4" />
                      <circle cx="52" cy="20" r="6" stroke="currentColor" strokeWidth="1.4" />
                      <circle cx="20" cy="52" r="6" stroke="currentColor" strokeWidth="1.4" />
                      <circle cx="52" cy="52" r="6" stroke="currentColor" strokeWidth="1.4" />
                    </svg>
                  </div>

                  <h3 className="font-serif text-2xl text-white font-semibold mb-2 tracking-wide">
                    Dario Frisör Salong
                  </h3>
                  <p className="text-[#B87333] text-xs tracking-[0.4em] uppercase mb-8">
                    Kungsbacka
                  </p>

                  <div className="h-px w-full bg-[#B87333]/12 mb-8" />

                  <div className="space-y-3 text-left">
                    {[
                      "Herrklippning & Damklippning",
                      "Färgning & Slingor",
                      "Skäggtrimning & Styling",
                      "Onlinebokning via Bokadirekt",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-white/45 text-sm"
                      >
                        <div className="w-1 h-1 rounded-full bg-[#B87333] flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
