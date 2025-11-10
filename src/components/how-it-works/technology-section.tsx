'use client';

import { motion } from 'framer-motion';
import { Brain, Zap, Database, Shield, Cloud, Cpu } from 'lucide-react';
import { Container } from '@/components/ui';

const technologies = [
  {
    icon: Brain,
    name: 'Neural Networks',
    description: 'Deep learning models trained on millions of professionally graded cards',
    stat: '10M+ cards',
  },
  {
    icon: Cpu,
    name: 'Computer Vision',
    description: 'Advanced image processing algorithms detect microscopic details',
    stat: '0.01mm precision',
  },
  {
    icon: Zap,
    name: 'Edge Computing',
    description: 'Lightning-fast processing with distributed computing infrastructure',
    stat: '<30s analysis',
  },
  {
    icon: Database,
    name: 'Big Data',
    description: 'Real-time market data from millions of card sales and auctions',
    stat: '50M+ data points',
  },
  {
    icon: Shield,
    name: 'Blockchain Verified',
    description: 'Immutable grading records secured on the blockchain',
    stat: '100% tamper-proof',
  },
  {
    icon: Cloud,
    name: 'Cloud AI',
    description: 'Scalable infrastructure that learns and improves with every grade',
    stat: '99.9% uptime',
  },
];

export default function TechnologySection() {
  return (
    <section className="py-20 bg-black scanlines relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-10" />

      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            <span className="text-white neon-text-purple">Powered By </span>
            <span className="text-emerald-400 neon-text">Cutting-Edge Tech</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our platform combines the latest advancements in <span className="text-cyan-400 font-semibold">artificial intelligence</span> and{' '}
            <span className="text-purple-400 font-semibold">distributed computing</span>
          </motion.p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="alien-card holographic p-6 rounded-2xl h-full group cursor-pointer">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 flex items-center justify-center alien-glow group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-black" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">
                        {tech.name}
                      </h3>
                      <div className="text-emerald-400 font-semibold text-sm">
                        {tech.stat}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Stack Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block alien-border holographic rounded-2xl px-8 py-6 bg-black/50 backdrop-blur-sm">
            <p className="text-gray-300 mb-2">
              Built with <span className="text-emerald-400 font-semibold">industry-leading</span> technology partners
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              <span>TensorFlow</span>
              <span>•</span>
              <span>PyTorch</span>
              <span>•</span>
              <span>OpenCV</span>
              <span>•</span>
              <span>AWS</span>
              <span>•</span>
              <span>Ethereum</span>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
