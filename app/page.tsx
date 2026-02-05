import dynamic from "next/dynamic";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

// Lazy load des sections below-the-fold pour améliorer le LCP
const ServicesSection = dynamic(() => import("./components/ServicesSection"), {
  loading: () => <SectionSkeleton />,
});
const ValueSection = dynamic(() => import("./components/ValueSection"), {
  loading: () => <SectionSkeleton />,
});
const PortfolioSection = dynamic(() => import("./components/PortfolioSection"), {
  loading: () => <SectionSkeleton />,
});
const PricingCatalogueSection = dynamic(() => import("./components/PricingCatalogueSection"), {
  loading: () => <SectionSkeleton />,
});
const TeamSection = dynamic(() => import("./components/TeamSection"), {
  loading: () => <SectionSkeleton />,
});
const AboutSection = dynamic(() => import("./components/AboutSection"), {
  loading: () => <SectionSkeleton />,
});
const ContactSection = dynamic(() => import("./components/ContactSection"), {
  loading: () => <SectionSkeleton />,
});
const Footer = dynamic(() => import("./components/Footer"));

// Skeleton de chargement minimal
function SectionSkeleton() {
  return (
    <div className="min-h-[50vh] min-h-[50dvh] bg-background" aria-hidden="true" />
  );
}

export default function Home() {
  return (
    <div className="min-h-screen min-h-[100dvh] bg-background overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <ServicesSection />
        <ValueSection />
        <PortfolioSection />
        <PricingCatalogueSection />
        <TeamSection />
        <AboutSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
}
