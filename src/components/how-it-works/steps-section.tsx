'use client';

import { motion } from 'framer-motion';
import {
  Camera,
  Upload,
  Cpu,
  Scan,
  BarChart3,
  CheckCircle2,
  Download,
  Share2,
} from 'lucide-react';
import { Container, Card } from '@/components/ui';

const steps = [
  {
    phase: 'Phase 1',
    title: 'Image Capture',
    description: 'Upload high-quality photos of your trading card',
    icon: Camera,
    color: 'text-blue-500',
    steps: [
      {
        icon: Upload,
        title: 'Upload Photos',
        description:
          'Take clear photos of your card using our guided camera system. We need front, back, and all four corners.',
      },
      {
        icon: Scan,
        title: 'Auto Alignment',
        description:
          'Our AI automatically detects card edges and aligns the image for optimal analysis.',
      },
    ],
  },
  {
    phase: 'Phase 2',
    title: 'AI Analysis',
    description: 'Advanced algorithms analyze every aspect of your card',
    icon: Cpu,
    color: 'text-purple-500',
    steps: [
      {
        icon: Scan,
        title: 'Edge Detection',
        description:
          'Neural networks analyze the edges of your card for any whitening, chipping, or wear.',
      },
      {
        icon: BarChart3,
        title: 'Centering Analysis',
        description:
          'Precise measurements determine if your card is perfectly centered using pixel-level accuracy.',
      },
      {
        icon: Cpu,
        title: 'Surface Inspection',
        description:
          'Advanced computer vision detects scratches, print lines, and surface defects invisible to the naked eye.',
      },
      {
        icon: CheckCircle2,
        title: 'Corner Assessment',
        description:
          'Each corner is evaluated for sharpness and any signs of wear or damage.',
      },
    ],
  },
  {
    phase: 'Phase 3',
    title: 'Results & Delivery',
    description: 'Receive your detailed grading report instantly',
    icon: CheckCircle2,
    color: 'text-emerald-500',
    steps: [
      {
        icon: BarChart3,
        title: 'Grade Calculation',
        description:
          'All factors are weighted and combined using our proprietary algorithm to generate your final grade.',
      },
      {
        icon: Download,
        title: 'Detailed Report',
        description:
          'Download a comprehensive report with visual annotations, grade breakdown, and market value.',
      },
      {
        icon: Share2,
        title: 'Share Results',
        description:
          'Easily share your grading results on social media or with potential buyers.',
      },
    ],
  },
];

export default function StepsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            <span className="text-emerald-400 neon-text">The Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our AI-powered grading system analyzes your cards through{' '}
            <span className="text-cyan-400 font-semibold">three distinct phases</span>
          </motion.p>
        </div>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((phase, phaseIndex) => {
            const PhaseIcon = phase.icon;
            return (
              <motion.div
                key={phaseIndex}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: phaseIndex * 0.2 }}
              >
                {/* Phase Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${phase.color === 'text-blue-500' ? 'from-blue-500 to-indigo-600' : phase.color === 'text-purple-500' ? 'from-purple-500 to-pink-600' : 'from-emerald-500 to-cyan-600'} flex items-center justify-center alien-glow`}>
                    <PhaseIcon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 font-semibold uppercase tracking-wider">
                      {phase.phase}
                    </div>
                    <h3 className={`text-3xl font-bold ${phase.color}`}>
                      {phase.title}
                    </h3>
                    <p className="text-gray-400">{phase.description}</p>
                  </div>
                </div>

                {/* Phase Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ml-0 md:ml-20">
                  {phase.steps.map((step, stepIndex) => {
                    const StepIcon = step.icon;
                    return (
                      <motion.div
                        key={stepIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: stepIndex * 0.1 }}
                      >
                        <div className="alien-card holographic p-6 rounded-xl h-full">
                          <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-lg ${phase.color === 'text-blue-500' ? 'bg-blue-500/10' : phase.color === 'text-purple-500' ? 'bg-purple-500/10' : 'bg-emerald-500/10'} flex items-center justify-center flex-shrink-0`}>
                              <StepIcon className={`w-6 h-6 ${phase.color}`} />
                            </div>
                            <div>
                              <h4 className="text-lg font-bold text-white mb-2">
                                {step.title}
                              </h4>
                              <p className="text-gray-400 text-sm leading-relaxed">
                                {step.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
