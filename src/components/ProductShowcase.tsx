"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  {
    id: 1,
    nameEn: "VOLUME UP SOLUTION PLUS",
    nameKr: "볼륨업 솔루션 플러스",
    desc: "뿌리 영양과 볼륨을 동시에, 데일리 에센스",
    featured: false,
  },
  {
    id: 2,
    nameEn: "ROOT VOLUME PERM KIT",
    nameKr: "루트 볼륨 펌 키트",
    desc: "집에서 완성하는 프로페셔널 발근 볼륨 펌",
    featured: true,
  },
  {
    id: 3,
    nameEn: "CURL FIXER",
    nameKr: "컬 픽서",
    desc: "하루 종일 자연스러운 컬을 유지하는 픽싱 미스트",
    featured: false,
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
                {/* Image area */}
                <div
                  className={`aspect-[4/5] flex items-center justify-center relative ${
                    product.featured ? "bg-primary-dark" : "bg-blush"
                  }`}
                >
                  <div className="text-center">
                    <div
                      className={`w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center ${
                        product.featured ? "bg-white/10" : "bg-primary/5"
                      }`}
                    >
                      <span
                        className={`font-serif text-lg ${
                          product.featured ? "text-white/60" : "text-primary/40"
                        }`}
                      >
                        V
                      </span>
                    </div>
                    {product.featured && (
                      <span className="inline-block px-3 py-1 bg-white/10 rounded-full text-white/60 text-[10px] tracking-[0.15em] uppercase">
                        Flagship
                      </span>
                    )}
                  </div>
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
