"use client";

import { useState, useEffect } from "react";

export default function FloatingButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.75);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#boka-tid"
      aria-label="Boka tid"
      className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-[#B87333] hover:bg-[#9A6025] text-white text-sm font-bold px-5 py-3.5 tracking-wider shadow-xl shadow-black/40 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2V6M8 2V6M3 10H21" />
      </svg>
      Boka tid
    </a>
  );
}
