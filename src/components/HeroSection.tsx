"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-[100dvh] w-full flex items-center overflow-hidden bg-primary-dark">
      {/* Background product image */}
      <Image
        src="/images/product2.png"
        alt=""
        fill
        className="object-cover opacity-30"
        priority
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark via-primary-dark/90 to-primary-dark/60" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 lg:px-16">
        {/* Category label */}
        <div
          className={`transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-white/40 text-[12px] tracking-[0.3em] uppercase mb-14 font-light">
            Korean Professional Haircare
          </p>
        </div>

        {/* Main headline */}
        <h1
          className={`transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <span className="block font-serif text-[clamp(3rem,9vw,7.5rem)] text-white font-normal tracking-[0.02em] leading-[1.05]">
            Root Volume.
          </span>
          <span className="block font-serif text-[clamp(3rem,9vw,7.5rem)] text-white font-normal tracking-[0.02em] leading-[1.05] italic">
            Redefined.
          </span>
        </h1>

        {/* Korean subtext */}
        <p
          className={`text-white/50 text-[15px] md:text-[17px] font-light tracking-[0.08em] mt-12 mb-16 max-w-[500px] transition-all duration-700 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          드라이 없이도, 뿌리부터 자연스러운 볼륨
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-wrap gap-4 transition-all duration-700 delay-1000 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#products"
            className="inline-flex items-center px-9 py-3.5 bg-white text-primary text-[13px] tracking-[0.06em] font-medium rounded-full hover:bg-blush transition-colors duration-300"
          >
            제품 보기
          </a>
          <a
            href="#story"
            className="inline-flex items-center px-9 py-3.5 border border-white/25 text-white/80 text-[13px] tracking-[0.06em] font-light rounded-full hover:bg-white/10 transition-colors duration-300"
          >
            브랜드 스토리
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 transition-all duration-700 delay-[1200ms] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}
