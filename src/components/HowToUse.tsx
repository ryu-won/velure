"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    num: "01",
    title: "세정",
    desc: "미온수로 머리를 깨끗이 감고 타올로 가볍게 물기를 제거합니다",
  },
  {
    num: "02",
    title: "도포",
    desc: "볼륨 에센스를 뿌리 부위에 골고루 도포하고 부드럽게 마사지합니다",
  },
  {
    num: "03",
    title: "침투",
    desc: "15~20분간 그대로 두어 유효 성분이 뿌리까지 충분히 침투되도록 합니다",
  },
  {
    num: "04",
    title: "완성",
    desc: "깨끗이 헹군 후 자연 건조하면 뿌리부터 살아나는 볼륨을 느낄 수 있습니다",
  },
];

export default function HowToUse() {
  const ref = useScrollAnimation();

  return (
    <section id="howto" ref={ref} className="bg-blush py-32 md:py-40 lg:py-52">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
        {/* Category label */}
        <div className="anim-fade-up flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-primary text-[13px] tracking-[0.04em] font-medium">
            How to Use
          </span>
        </div>

        {/* Heading */}
        <div className="anim-fade-up delay-1 mb-16 md:mb-24">
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.8rem)] text-charcoal leading-[1.2]">
            사용 방법
          </h2>
          <p className="text-gray text-[15px] font-light mt-4">
            간단한 4단계로 살롱급 볼륨을 완성하세요
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 lg:gap-10">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`anim-fade-up delay-${idx + 1} relative`}
            >
              <p className="font-serif text-[3rem] text-primary/10 leading-none mb-4">
                {step.num}
              </p>
              <h3 className="text-charcoal text-[18px] font-medium mb-3">
                {step.title}
              </h3>
              <div className="w-8 h-px bg-primary/20 mb-4" />
              <p className="text-gray text-[13px] font-light leading-[1.8]">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
