"use client";

export default function Footer() {
  return (
    <footer className="bg-charcoal">
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16 py-16 md:py-20">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16">
          <div>
            <p className="font-serif text-2xl text-white tracking-[0.2em] mb-3">
              VELURE
            </p>
            <p className="text-white/30 text-[13px] font-light">
              Root Volume. Redefined.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-white/50 text-[12px] tracking-[0.08em] uppercase mb-4">
                Menu
              </p>
              <div className="flex flex-col gap-3">
                <a href="#story" className="text-white/30 text-[13px] font-light hover:text-white/60 transition-colors">
                  브랜드 스토리
                </a>
                <a href="#products" className="text-white/30 text-[13px] font-light hover:text-white/60 transition-colors">
                  제품
                </a>
                <a href="#howto" className="text-white/30 text-[13px] font-light hover:text-white/60 transition-colors">
                  사용법
                </a>
              </div>
            </div>
            <div>
              <p className="text-white/50 text-[12px] tracking-[0.08em] uppercase mb-4">
                Social
              </p>
              <div className="flex flex-col gap-3">
                <a href="#" className="text-white/30 text-[13px] font-light hover:text-white/60 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-white/30 text-[13px] font-light hover:text-white/60 transition-colors">
                  YouTube
                </a>
                <a href="#" className="text-white/30 text-[13px] font-light hover:text-white/60 transition-colors">
                  KakaoTalk
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-[12px] font-light">
            contact@velure.kr
          </p>
          <p className="text-white/15 text-[11px] font-light">
            &copy; 2026 VELURE. All rights reserved. Made in Korea.
          </p>
        </div>
      </div>
    </footer>
  );
}
