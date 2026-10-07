import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import CostEstimator from "@/components/CostEstimator";
import WorkflowSection from "@/components/WorkflowSection";
import TestimonialsSection from "@/components/Testimonials";
import ContactSection from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <CostEstimator />
      <WorkflowSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
