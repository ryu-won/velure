"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function BrandStory() {
  const ref = useScrollAnimation();

  return (
    <section id="story" ref={ref} className="bg-white py-32 md:py-40 lg:py-52">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
        {/* Category label */}
        <div className="anim-fade-up flex items-center gap-3 mb-16">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-primary text-[13px] tracking-[0.04em] font-medium">
            Brand Story
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Content */}
          <div className="anim-slide-l">
            <h2 className="font-serif text-[clamp(2rem,4.5vw,3.8rem)] text-charcoal leading-[1.2] mb-10">
              한국 전문 헤어<br />
              디자이너의<br />
              시크릿 웨폰
            </h2>

            <div className="space-y-5 text-gray text-[15px] leading-[1.9] font-light max-w-[480px]">
              <p>
                VELURE는 한국 톱 헤어살롱의 전문 기술에서 탄생했습니다.
                살롱에서만 가능했던 프로페셔널 발근 볼륨을 집에서도 경험할 수
                있도록 설계되었습니다.
              </p>
              <p>
                진정한 아름다움은 자신감에서 시작됩니다. 뿌리가 자연스럽게
                살아나면, 드라이 없이도 우아한 볼륨감을 연출할 수 있습니다.
              </p>
            </div>

            <a
              href="#products"
              className="inline-flex items-center gap-3 mt-10 text-primary text-[13px] tracking-[0.04em] font-medium group"
            >
              <span>자세히 보기</span>
              <span className="block w-5 h-px bg-primary group-hover:w-8 transition-all duration-300" />
            </a>
          </div>

          {/* Right: Product image */}
          <div className="anim-slide-r">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/product.png"
                alt="VELURE 제품 컬렉션"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
