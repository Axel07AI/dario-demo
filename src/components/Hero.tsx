import Image from "next/image";
import FadeIn from "./FadeIn";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1A1410]">
      {/* Background photo */}
      <Image
        src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80"
        alt="Frisörsalong"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark overlay — keeps text readable */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Diagonal stripe texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(255,255,255,0.016) 28px, rgba(255,255,255,0.016) 29px)",
        }}
      />
      {/* CSS grain / noise texture for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E\")",
          backgroundRepeat: "repeat",
          opacity: 0.035,
          mixBlendMode: "overlay",
        }}
      />
      {/* Warm copper radial glow from bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 110%, rgba(184,115,51,0.12) 0%, transparent 65%)",
        }}
      />

      {/* Vertical decorative lines */}
      <div className="absolute top-0 left-[10%] w-px h-32 bg-gradient-to-b from-transparent via-[#B87333]/20 to-transparent hidden xl:block" />
      <div className="absolute top-0 right-[10%] w-px h-32 bg-gradient-to-b from-transparent via-[#B87333]/20 to-transparent hidden xl:block" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
        {/* Overline */}
        <FadeIn delay={0}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-14 bg-[#B87333]/70" />
            <span className="text-[#B87333] text-[11px] tracking-[0.45em] uppercase font-medium">
              Kungsbacka Centrum
            </span>
            <div className="h-px w-14 bg-[#B87333]/70" />
          </div>
        </FadeIn>

        {/* Main headline */}
        <FadeIn delay={120}>
          <h1 className="font-serif font-bold leading-[1.08] tracking-tight mb-6">
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white">
              Professionell
            </span>
            <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl gold-shimmer-text">
              klippning
            </span>
            <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white/85 mt-2">
              i centrala Kungsbacka
            </span>
          </h1>
        </FadeIn>

        {/* Divider */}
        <FadeIn delay={240}>
          <div className="flex items-center justify-center gap-3 my-8">
            <div className="h-px w-8 bg-[#B87333]/40" />
            <div className="w-1 h-1 rounded-full bg-[#B87333]" />
            <div className="h-px w-8 bg-[#B87333]/40" />
          </div>
        </FadeIn>

        {/* Subtext */}
        <FadeIn delay={320}>
          <p className="text-white/55 text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
            Välkommen till Dario Frisör Salong — där hantverk möter stil.
            Erfarna frisörer och ett resultat du kan vara stolt över.
          </p>
        </FadeIn>

        {/* CTA Buttons */}
        <FadeIn delay={440}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#boka-tid"
              className="inline-flex items-center justify-center bg-[#B87333] hover:bg-[#9A6025] text-white font-bold px-9 py-4 text-sm tracking-[0.12em] uppercase transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#B87333]/15"
            >
              Boka tid nu
            </a>
            <a
              href="#tjanster"
              className="inline-flex items-center justify-center border border-[#B87333]/40 hover:border-[#B87333] text-[#B87333] font-medium px-9 py-4 text-sm tracking-[0.12em] uppercase transition-all hover:bg-[#B87333]/8"
            >
              Se priser
            </a>
          </div>
        </FadeIn>

        {/* Animated stats */}
        <FadeIn delay={560}>
          <HeroStats />
        </FadeIn>

        {/* Scroll indicator */}
        <FadeIn delay={700}>
          <div className="mt-12 flex flex-col items-center gap-3">
            <span className="text-white/25 text-[10px] tracking-[0.4em] uppercase">
              Scrolla ned
            </span>
            <div className="w-px h-14 bg-gradient-to-b from-[#B87333]/40 to-transparent" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
