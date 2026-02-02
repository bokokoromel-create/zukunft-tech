import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import PricingCatalogueSection from "./components/PricingCatalogueSection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import ValueSection from "./components/ValueSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
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
