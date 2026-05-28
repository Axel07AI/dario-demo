import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Team() {
  return (
    <section id="teamet" className="py-24 bg-[#211810]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-[#B87333] text-[11px] tracking-[0.45em] uppercase font-medium block mb-4">
              Personerna bakom salongen
            </span>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white">
              Möt teamet
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px w-10 bg-[#B87333]/40" />
              <div className="w-1 h-1 rounded-full bg-[#B87333]" />
              <div className="h-px w-10 bg-[#B87333]/40" />
            </div>
          </div>
        </FadeIn>

        {/* Single centered card */}
        <div className="flex justify-center">
          <FadeIn delay={150}>
            <div className="group relative border border-[#B87333]/15 bg-[#1A1410] p-10 text-center w-72 hover:border-[#B87333]/35 transition-all duration-300">
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-[#B87333]/20 group-hover:border-[#B87333]/45 transition-colors duration-300" />
              <div className="absolute top-3 right-3 w-6 h-6 border-t border-r border-[#B87333]/20 group-hover:border-[#B87333]/45 transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-6 h-6 border-b border-l border-[#B87333]/20 group-hover:border-[#B87333]/45 transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-[#B87333]/20 group-hover:border-[#B87333]/45 transition-colors duration-300" />

              {/* Avatar */}
              <div className="relative mx-auto mb-7 w-28 h-28">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-[#B87333]/15 group-hover:border-[#B87333]/35 scale-[1.12] transition-colors duration-300" />
                {/* Photo circle */}
                <div className="w-28 h-28 rounded-full border border-[#B87333]/20 group-hover:border-[#B87333]/40 transition-colors duration-300 overflow-hidden">
                  <Image
                    src="/dario.png"
                    alt="Dario – Grundare & Frisör"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="font-serif text-2xl text-white font-semibold tracking-wide mb-1">
                Dario
              </h3>

              {/* Title */}
              <p className="text-[#B87333] text-[11px] tracking-[0.35em] uppercase mb-6">
                Grundare & Frisör
              </p>

              {/* Divider */}
              <div className="h-px w-12 bg-[#B87333]/20 group-hover:bg-[#B87333]/45 mx-auto transition-colors duration-300" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
