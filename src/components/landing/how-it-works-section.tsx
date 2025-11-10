'use client';

import { motion } from 'framer-motion';
import { Upload, Scan, CheckCircle } from 'lucide-react';
import { Container, Card } from '@/components/ui';

const steps = [
  {
    number: '01',
    icon: Upload,
    title: 'Upload Your Cards',
    description:
      'Take clear photos of your cards using our guided camera system. Front, back, and corners - we\'ll walk you through each shot.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500',
  },
  {
    number: '02',
    icon: Scan,
    title: 'AI Analysis',
    description:
      'Our advanced neural networks analyze centering, corners, edges, and surface condition with microscopic precision in seconds.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500',
  },
  {
    number: '03',
    icon: CheckCircle,
    title: 'Get Your Grade',
    description:
      'Receive a detailed condition report with your grade, visual annotations, and current market value. Download or share instantly.',
    color: 'text-secondary',
    bgColor: 'bg-secondary',
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-black relative overflow-hidden scanlines">
      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            <span className="text-emerald-400 neon-text">How It Works</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            Get <span className="text-cyan-400 font-semibold">professional-grade</span> card assessments in three simple steps
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-secondary transform -translate-y-1/2 opacity-20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="alien-card holographic text-center h-full flex flex-col items-center p-8 rounded-2xl">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                        {index + 1}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="mt-6 mb-4">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${step.bgColor}/10 to-${step.bgColor}/5 flex items-center justify-center`}>
                        <Icon className={`w-10 h-10 ${step.color}`} />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-300 mb-4">
            Ready to experience the <span className="text-emerald-400 font-semibold">future of card grading</span>?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold rounded-lg alien-glow hover:scale-110 transition-all duration-300"
          >
            Start Grading Now
          </motion.button>
        </motion.div>
      </Container>
    </section>
  );
}
