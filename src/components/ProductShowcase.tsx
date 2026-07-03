"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    id: 1,
    nameEn: "CURLING CLIP",
    nameKr: "컬링 클립",
    desc: "집게로 간편하게 자연스러운 컬링을 완성하는 스타일링 클립",
    image: "/images/1.png",
  },
  {
    id: 2,
    nameEn: "ROOT VOLUME PERM KIT",
    nameKr: "루트 볼륨 펌 키트",
    desc: "집에서 완성하는 프로페셔널 발근 볼륨 펌",
    image: "/images/2.png",
  },
  {
    id: 3,
    nameEn: "CURL FIXER",
    nameKr: "컬 픽서",
    desc: "하루 종일 자연스러운 컬을 유지하는 픽싱 미스트",
    image: "/images/3.png",
  },
];

export default function ProductShowcase() {
  const ref = useScrollAnimation();

  return (
    <section
      id="products"
      ref={ref}
      className="bg-offwhite py-32 md:py-40 lg:py-52"
    >
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
        {/* Category label */}
        <div className="anim-fade-up flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-primary text-[13px] tracking-[0.04em] font-medium">
            Products
          </span>
        </div>

        {/* Large heading */}
        <div className="anim-fade-up delay-1 mb-16 md:mb-24">
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.8rem)] text-charcoal leading-[1.2]">
            제품 라인업
          </h2>
          <p className="text-gray text-[15px] font-light mt-4 max-w-[400px]">
            한국 프리미엄 살롱 기술을 담은 홈케어 솔루션
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`anim-fade-up delay-${idx + 1} group cursor-pointer`}
            >
              <div className="bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-lg">
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.nameKr}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Info */}
                <div className="p-6 lg:p-7">
                  <p className="text-[11px] tracking-[0.1em] text-gray uppercase mb-2">
                    {product.nameEn}
                  </p>
                  <h3 className="text-charcoal text-[17px] font-medium mb-2">
                    {product.nameKr}
                  </h3>
                  <p className="text-gray text-[13px] font-light leading-relaxed">
                    {product.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
