import FadeIn from "./FadeIn";

const services = [
  { name: "Herrklippning", price: "350 kr" },
  { name: "Damklippning", price: "550 kr" },
  { name: "Färgning", price: "från 800 kr" },
  { name: "Slingor", price: "från 900 kr" },
  { name: "Styling", price: "250 kr" },
  { name: "Skägg", price: "200 kr" },
];

export default function TjansterPriser() {
  return (
    <section id="tjanster" className="py-28 bg-[#F5F0E8]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-[#B87333] text-[11px] tracking-[0.45em] uppercase font-medium block mb-4">
              Vad vi erbjuder
            </span>
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-[#1A1410] mb-2">
              Tjänster & Priser
            </h2>
            <div className="flex items-center justify-center gap-3 mt-5">
              <div className="h-px w-10 bg-[#B87333]/35" />
              <div className="w-1 h-1 rounded-full bg-[#B87333]" />
              <div className="h-px w-10 bg-[#B87333]/35" />
            </div>
          </div>
        </FadeIn>

        {/* Price list */}
        <div className="border border-[#B87333]/18 overflow-hidden">
          {services.map((service, i) => (
            <FadeIn key={service.name} delay={i * 70}>
              <div
                className={`flex items-center justify-between px-7 py-5 group transition-colors hover:bg-[#B87333]/7 cursor-default ${
                  i < services.length - 1
                    ? "border-b border-[#B87333]/12"
                    : ""
                }`}
              >
                {/* Name */}
                <div className="flex items-center gap-4">
                  <span className="text-[#9A7A5A] text-xs font-mono w-4 text-center group-hover:text-[#B87333] transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[#2C1A10]/80 text-base md:text-lg font-medium tracking-wide group-hover:text-[#1A1410] transition-colors">
                    {service.name}
                  </span>
                </div>

                {/* Dotted line + price */}
                <div className="flex items-center gap-4 ml-4">
                  <div className="flex-1 border-b border-dashed border-[#B87333]/15 w-10 md:w-24 group-hover:border-[#B87333]/35 transition-colors" />
                  <span className="text-[#B87333] font-bold text-base md:text-lg tracking-wide min-w-[100px] text-right">
                    {service.price}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Footer note */}
        <FadeIn delay={500}>
          <p className="text-[#9A7A5A] text-xs text-center mt-6 tracking-wide italic">
            Drop in välkommen · Priser kan variera beroende på hårtyp och längd
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
