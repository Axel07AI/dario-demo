export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F0A07] border-t border-[#B87333]/10 py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-[#B87333] font-serif font-bold text-2xl tracking-[0.18em]">
              DARIO
            </span>
            <span className="text-white/35 text-[9px] tracking-[0.45em] uppercase mt-0.5">
              Frisör Salong
            </span>
          </div>

          {/* Center */}
          <div className="text-center">
            <p className="text-white/25 text-xs tracking-wide">
              © {year} Dario Frisör Salong
            </p>
            <p className="text-white/18 text-xs mt-1">
              Kyrkogatan 2 · Kungsbacka · 0300-104 99
            </p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-5">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/25 hover:text-[#B87333] transition-colors p-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/25 hover:text-[#B87333] transition-colors p-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2H15C13.67 2 12.4 2.53 11.46 3.46C10.53 4.4 10 5.67 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73 14.11 6.48 14.29 6.29C14.48 6.11 14.73 6 15 6H18V2Z" />
              </svg>
            </a>
            {/* Map pin */}
            <a
              href="https://maps.google.com/?q=Kyrkogatan+2,+Kungsbacka"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hitta oss på kartan"
              className="text-white/25 hover:text-[#B87333] transition-colors p-1"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-white/15 text-xs tracking-wider">
            Webbplats skapad av{" "}
            <span className="text-white/25">SeBra Webb</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
