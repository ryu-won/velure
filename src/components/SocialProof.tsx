"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  {
    text: "한 번 쓰고 바로 반했어요. 뿌리가 진짜 살아나는데, 드라이기 하나도 안 썼거든요. 친구들이 어디서 펌 했냐고 물어봐요.",
    author: "김서연",
    info: "서울 · 가는 모발",
    image: "/images/review1.png",
  },
  {
    text: "가는 머리라 볼륨이 항상 고민이었는데, 이 제품 쓰고 나서 인생이 바뀌었어요. 효과도 자연스럽고 지속력도 좋아서 강추합니다.",
    author: "이하은",
    info: "부산 · 2개월 사용",
    image: "/images/review2.png",
  },
  {
    text: "집에서 셀프로 발근펌을 할 수 있다니. 과정도 간단하고 결과물은 살롱급이에요. 두 달 넘게 유지되니까 가성비도 최고.",
    author: "박지우",
    info: "대구 · 리피터",
    image: "/images/review3.png",
  },
  {
    text: "미용실 갈 시간이 없어서 반신반의하며 써봤는데, 정말 놀라운 결과. 자연 건조만 했는데 뿌리부터 볼륨이 살아나요.",
    author: "최윤아",
    info: "인천 · 직장인",
    image: "/images/review4.png",
  },
  {
    text: "볼륨업 솔루션 쓰고 나서 매일 아침이 달라졌어요. 머리 말리는 시간이 반으로 줄고, 볼륨은 두 배로 올라갔어요.",
    author: "정수빈",
    info: "서울 · 6개월 사용",
    image: "/images/review5.png",
  },
  {
    text: "해외에서도 주문해서 쓸 정도로 좋아요. 한국 살롱 퀄리티를 집에서 느낄 수 있다니, VELURE 없이는 못 살아요.",
    author: "한소희",
    info: "LA · 해외 거주",
    image: "/images/review6.png",
  },
];

export default function SocialProof() {
  const ref = useScrollAnimation();
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(true);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === active) return;
      setFade(false);
      setTimeout(() => {
        setActive(idx);
        setFade(true);
      }, 300);
    },
    [active],
  );

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [active, goTo]);

  return (
    <section
      id="reviews"
      ref={ref}
      className="bg-offwhite py-32 md:py-40 lg:py-52"
    >
      <div className="max-w-[800px] mx-auto px-8 lg:px-16">
        {/* Category label */}
        <div className="anim-fade-up flex items-center gap-3 mb-16 justify-center">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-primary text-[13px] tracking-[0.04em] font-medium">
            Reviews
          </span>
        </div>

        {/* Review */}
        <div className="anim-fade-up delay-1 text-center">
          {/* Reviewer photo */}
          <div
            className={`mx-auto mb-10 transition-all duration-500 ${
              fade ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <div className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden ring-2 ring-primary/10 ring-offset-4">
              <Image
                src={reviews[active].image}
                alt={reviews[active].author}
                width={128}
                height={128}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Quote */}
          <div className="min-h-[120px] md:min-h-[100px] flex items-center justify-center">
            <p
              className={`text-charcoal text-[16px] md:text-[18px] font-light leading-[2] transition-all duration-500 ${
                fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              &ldquo;{reviews[active].text}&rdquo;
            </p>
          </div>

          {/* Author */}
          <div
            className={`mt-8 transition-all duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-charcoal text-[14px] font-medium">
              {reviews[active].author}
            </p>
            <p className="text-gray text-[12px] font-light mt-1">
              {reviews[active].info}
            </p>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-12">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 rounded-full transition-all duration-500 ${
                  active === i
                    ? "bg-primary"
                    : "bg-charcoal/15 hover:bg-charcoal/30"
                }`}
                aria-label={`후기 ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
