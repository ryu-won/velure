"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#story", label: "브랜드 스토리" },
  { href: "#products", label: "제품" },
  { href: "#howto", label: "사용법" },
  { href: "#benefits", label: "핵심 장점" },
  { href: "#reviews", label: "후기" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
        <div className="flex items-center justify-between h-[64px] lg:h-[80px]">
          <a
            href="#"
            className={`font-serif text-xl lg:text-2xl tracking-[0.2em] font-medium transition-colors duration-500 ${
              scrolled ? "text-primary" : "text-white"
            }`}
          >
            VELURE
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[13px] tracking-[0.04em] transition-colors duration-300 ${
                  scrolled
                    ? "text-charcoal/60 hover:text-primary"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative w-6 h-4"
            aria-label="메뉴"
            type="button"
          >
            <span
              className={`absolute left-0 w-full h-px transition-all duration-300 ${
                menuOpen
                  ? "top-1/2 rotate-45 bg-charcoal"
                  : `top-0 ${scrolled ? "bg-charcoal" : "bg-white"}`
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 w-full h-px transition-all duration-300 ${
                menuOpen
                  ? "opacity-0"
                  : `${scrolled ? "bg-charcoal" : "bg-white"}`
              }`}
            />
            <span
              className={`absolute left-0 w-full h-px transition-all duration-300 ${
                menuOpen
                  ? "top-1/2 -rotate-45 bg-charcoal"
                  : `bottom-0 ${scrolled ? "bg-charcoal" : "bg-white"}`
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-80 bg-white" : "max-h-0"
        }`}
      >
        <div className="px-8 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-charcoal/70 text-[15px] tracking-[0.02em] hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
