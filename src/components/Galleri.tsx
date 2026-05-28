import Image from "next/image";
import FadeIn from "./FadeIn";

const images = [
  {
    src: "https://images.unsplash.com/photo-1541533848490-bc8115cd6522?auto=format&fit=crop&w=800&q=80",
    alt: "Frisör klipper hår",
  },
  {
    src: "https://images.unsplash.com/photo-1647140655214-e4a2d914971f?auto=format&fit=crop&w=800&q=80",
    alt: "Klippning med sax",
  },
  {
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80",
    alt: "Man i barberingstol",
  },
  {
    src: "https://images.unsplash.com/photo-1637777277337-f114350fb088?auto=format&fit=crop&w=800&q=80",
    alt: "Hårsalong med belysning",
  },
  {
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=800&q=80",
    alt: "Barberingstol",
  },
  {
    src: "https://images.unsplash.com/photo-1536520002442-39764a41e987?auto=format&fit=crop&w=800&q=80",
    alt: "Salongsinteriör",
  },
];

function GalleryCard({
  src,
  alt,
  index,
}: {
  src: string;
  alt: string;
  index: number;
}) {
  return (
    <FadeIn delay={index * 80}>
      <div className="group relative aspect-[4/3] overflow-hidden border border-[#B87333]/10 hover:border-[#B87333]/40 transition-colors duration-500">
        {/* Photo with zoom on hover */}
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />

        {/* Warm dark overlay — lifts on hover to reveal image */}
        <div className="absolute inset-0 bg-[#1A1410]/50 group-hover:bg-[#1A1410]/15 transition-all duration-500" />

        {/* Subtle copper vignette */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(ellipse at center, transparent 50%, rgba(184,115,51,0.18) 100%)",
          }}
        />

        {/* Corner accents */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t border-l border-[#B87333]/0 group-hover:border-[#B87333]/60 transition-all duration-400" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t border-r border-[#B87333]/0 group-hover:border-[#B87333]/60 transition-all duration-400" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b border-l border-[#B87333]/0 group-hover:border-[#B87333]/60 transition-all duration-400" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b border-r border-[#B87333]/0 group-hover:border-[#B87333]/60 transition-all duration-400" />
      </div>
    </FadeIn>
  );
}

export default function Galleri() {
  return (
    <section id="galleri" className="py-28 bg-[#1A1410]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-14">
            <span className="text-[#B87333] text-[11px] tracking-[0.45em] uppercase font-medium block mb-4">
              Portfolio
            </span>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-white">
              Vårt arbete
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px w-10 bg-[#B87333]/40" />
              <div className="w-1 h-1 rounded-full bg-[#B87333]" />
              <div className="h-px w-10 bg-[#B87333]/40" />
            </div>
          </div>
        </FadeIn>

        {/* 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <GalleryCard key={i} {...img} index={i} />
          ))}
        </div>

        {/* Footer note */}
        <FadeIn delay={550}>
          <p className="text-white/22 text-xs text-center mt-8 tracking-wide italic">
            Följ oss på Instagram för fler bilder från salongen
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
