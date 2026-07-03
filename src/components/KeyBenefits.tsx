"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const benefits = [
  {
    title: "드라이 없이 볼륨",
    sub: "No Dryer Needed",
    desc: "자연 건조만으로도 뿌리부터 자연스러운 볼륨감이 유지됩니다. 매일 드라이기에 의존하던 루틴에서 벗어나세요.",
  },
  {
    title: "홈 셀프 펌",
    sub: "Salon at Home",
    desc: "미용실 예약 없이도 집에서 전문가 수준의 발근 볼륨 펌을 간편하게 완성할 수 있습니다.",
  },
  {
    title: "한국 제조 품질",
    sub: "Made in Korea",
    desc: "100% 한국에서 연구 개발 및 제조. 한국 프리미엄 살롱과 동일한 포뮬러와 기술력을 담았습니다.",
  },
];

export default function KeyBenefits() {
  const ref = useScrollAnimation();

  return (
    <section id="benefits" ref={ref} className="bg-white py-32 md:py-40 lg:py-52">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
        {/* Category label */}
        <div className="anim-fade-up flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-primary text-[13px] tracking-[0.04em] font-medium">
            Why VELURE
          </span>
        </div>

        {/* Heading */}
        <div className="anim-fade-up delay-1 mb-16 md:mb-24">
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.8rem)] text-charcoal leading-[1.2]">
            핵심 장점
          </h2>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className={`anim-fade-up delay-${idx + 1}`}
            >
              <div className="bg-offwhite rounded-xl p-8 lg:p-10 h-full hover:bg-blush transition-colors duration-500">
                <p className="font-serif text-primary/12 text-[3.5rem] leading-none mb-3">
                  {String(idx + 1).padStart(2, "0")}
                </p>
                <h3 className="text-charcoal text-[18px] font-medium mb-1">
                  {b.title}
                </h3>
                <p className="text-primary/40 text-[11px] tracking-[0.15em] uppercase font-light mb-5">
                  {b.sub}
                </p>
                <p className="text-gray text-[13px] font-light leading-[1.9]">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
