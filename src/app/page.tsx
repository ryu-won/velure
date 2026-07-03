import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import ProductShowcase from "@/components/ProductShowcase";
import HowToUse from "@/components/HowToUse";
import KeyBenefits from "@/components/KeyBenefits";
import SocialProof from "@/components/SocialProof";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <BrandStory />
        <ProductShowcase />
        <HowToUse />
        <KeyBenefits />
        <SocialProof />
      </main>
      <Footer />
    </>
  );
}
