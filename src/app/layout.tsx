import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dario Frisör Salong — Professionell frisör i centrala Kungsbacka",
  description:
    "Välkommen till Dario Frisör Salong i Kungsbacka. Herrklippning, damklippning, färgning och styling av erfarna frisörer. Drop in välkommen.",
  keywords:
    "frisör kungsbacka, herrfrisör kungsbacka, damfrisör, hårsalong kungsbacka, dario frisör",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="antialiased min-h-full bg-[#0A0A0A] text-white">
        {children}
      </body>
    </html>
  );
}
