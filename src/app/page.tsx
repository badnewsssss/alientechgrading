import {
  HeroSection,
  FeaturesSection,
  HowItWorksSection,
  BenefitsSection,
  TrustSection,
  WaitlistSection,
} from '@/components/landing';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TrustSection />
      <WaitlistSection />
    </main>
  );
}
