import { Metadata } from 'next';
import {
  HeroSection,
  StepsSection,
  TechnologySection,
  AccuracySection,
  FAQSection,
  CTASection,
} from '@/components/how-it-works';

export const metadata: Metadata = {
  title: 'How It Works | Alien Tech Grading',
  description:
    'Discover how our revolutionary AI-powered card grading system works. Learn about our advanced computer vision technology and machine learning algorithms.',
  openGraph: {
    title: 'How It Works | Alien Tech Grading',
    description:
      'Discover how our revolutionary AI-powered card grading system works.',
    type: 'website',
  },
};

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <StepsSection />
      <TechnologySection />
      <AccuracySection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
