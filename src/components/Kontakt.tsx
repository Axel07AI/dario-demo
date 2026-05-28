import FadeIn from "./FadeIn";

const hours = [
  { day: "Måndag", time: "09:00 – 18:00" },
  { day: "Tisdag", time: "09:00 – 18:00" },
  { day: "Onsdag", time: "09:00 – 18:00" },
  { day: "Torsdag", time: "09:00 – 19:00" },
  { day: "Fredag", time: "09:00 – 18:00" },
  { day: "Lördag", time: "09:00 – 16:00" },
  { day: "Söndag", time: "Stängt" },
];

function LocationIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 2C9.13 2 6 5.13 6 9C6 14.25 13 23 13 23C13 23 20 14.25 20 9C20 5.13 16.87 2 13 2Z" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="13" cy="9" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="13" r="10" stroke="currentColor" strokeWidth="1.4" />
      <path d="M13 7V13L17 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 22L9 4L16 13L22 7L24 22" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

export default function Kontakt() {
  return (
    <section id="kontakt" className="py-28 bg-[#2A1F18]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#B87333] text-[11px] tracking-[0.45em] uppercase font-medium block mb-4">
              Hitta oss
            </span>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white">
              Kontakt & Hitta hit
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px w-10 bg-[#B87333]/40" />
              <div className="w-1 h-1 rounded-full bg-[#B87333]" />
              <div className="h-px w-10 bg-[#B87333]/40" />
            </div>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Address & phone */}
          <FadeIn delay={100}>
            <div className="border border-[#B87333]/12 bg-[#1A1410] p-8 h-full hover:border-[#B87333]/25 transition-colors">
              <div className="text-[#B87333] mb-6">
                <LocationIcon />
              </div>
              <h3 className="text-white font-semibold text-lg mb-1 tracking-wide">
                Adress
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Kyrkogatan 2
                <br />
                434 30 Kungsbacka
              </p>

              <div className="h-px bg-[#B87333]/10 mb-6" />

              <h3 className="text-white font-semibold text-lg mb-3 tracking-wide">
                Telefon
              </h3>
              <a
                href="tel:030010499"
                className="text-[#B87333] hover:text-white transition-colors font-medium tracking-[0.1em] text-lg"
              >
                0300-104 99
              </a>
            </div>
          </FadeIn>

          {/* Hours */}
          <FadeIn delay={180}>
            <div className="border border-[#B87333]/12 bg-[#1A1410] p-8 h-full hover:border-[#B87333]/25 transition-colors">
              <div className="text-[#B87333] mb-6">
                <ClockIcon />
              </div>
              <h3 className="text-white font-semibold text-lg mb-5 tracking-wide">
                Öppettider
              </h3>
              <div className="space-y-3">
                {hours.map(({ day, time }) => (
                  <div key={day} className="flex justify-between items-center text-sm">
                    <span className="text-white/45">{day}</span>
                    <span className={time === "Stängt" ? "text-white/25" : "text-white/75"}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Map */}
          <FadeIn delay={260}>
            <div className="border border-[#B87333]/12 bg-[#1A1410] p-8 h-full md:col-span-2 lg:col-span-1 hover:border-[#B87333]/25 transition-colors flex flex-col">
              <div className="text-[#B87333] mb-6">
                <MapIcon />
              </div>
              <h3 className="text-white font-semibold text-lg mb-3 tracking-wide">
                Hitta hit
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">
                Vi ligger i centrala Kungsbacka, nära Kungsbacka station och
                stadskärnan. Buss- och tågförbindelser finns i närheten,
                och parkering är tillgänglig i området.
              </p>

              <a
                href="https://maps.google.com/?q=Kyrkogatan+2,+Kungsbacka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-[#B87333]/30 hover:border-[#B87333] text-[#B87333] hover:text-white text-sm px-5 py-3 tracking-wider transition-all hover:bg-[#B87333]/8 self-start"
              >
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 12L12 1M12 1H4.5M12 1V8.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Öppna i kartor
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
