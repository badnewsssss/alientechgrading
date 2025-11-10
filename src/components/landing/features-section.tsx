'use client';

import { motion } from 'framer-motion';
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Camera,
  FileText,
  Clock,
  Award,
} from 'lucide-react';
import { Card, Container } from '@/components/ui';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Analysis',
    description:
      'Our neural networks are trained on millions of graded cards, providing professional-level accuracy in condition assessment.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Zap,
    title: 'Lightning Fast Results',
    description:
      'Get comprehensive grading reports in under 30 seconds. No more waiting weeks for traditional grading services.',
    color: 'text-accent',
    bgColor: 'bg-accent/10',
  },
  {
    icon: Camera,
    title: 'Multi-Angle Scanning',
    description:
      'Capture every detail with our guided photo system. Detect centering, corners, edges, and surface imperfections.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Shield,
    title: 'Consistent Standards',
    description:
      'Unlike human graders, our AI applies the same rigorous standards to every card, every time. Zero subjectivity.',
    color: 'text-secondary',
    bgColor: 'bg-secondary/10',
  },
  {
    icon: TrendingUp,
    title: 'Market Value Insights',
    description:
      'Real-time pricing data integrated with your grade. Know exactly what your card is worth in the current market.',
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-500/10',
  },
  {
    icon: FileText,
    title: 'Detailed Reports',
    description:
      'Comprehensive condition breakdown with visual annotations highlighting every factor affecting your card\'s grade.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-500/10',
  },
  {
    icon: Clock,
    title: 'Grade History Tracking',
    description:
      'Monitor your collection over time. Track condition changes and maintain complete records for insurance purposes.',
    color: 'text-orange-500',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Award,
    title: 'Certification Ready',
    description:
      'Our grades align with major grading companies. Use our pre-grading to decide which cards are worth professional certification.',
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-background opacity-20" />

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
            <span className="text-white neon-text-cyan">Next-Gen </span>
            <span className="text-emerald-400 neon-text">Grading Technology</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Powered by cutting-edge <span className="text-cyan-400 font-semibold">computer vision</span> and <span className="text-purple-400 font-semibold">machine learning</span>,
            delivering professional grading at the speed of light.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="alien-card holographic h-full flex flex-col p-6 rounded-2xl group cursor-pointer">
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4 alien-glow group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
