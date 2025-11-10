'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Container } from '@/components/ui';

export default function HeroSection() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black starfield">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20" />

      {/* Animated glow orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-20 pulse-glow" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20" style={{ animation: 'pulseGlow 2s ease-in-out infinite 1s' }} />

      <Container size="lg" className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-block mb-6">
            <div className="alien-border holographic rounded-full px-6 py-3 bg-black/50 backdrop-blur-sm">
              <span className="text-cyan-400 font-semibold">
                REVOLUTIONARY TECHNOLOGY
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">How </span>
            <span className="text-emerald-400 neon-text">Alien Tech</span>
            <br />
            <span className="text-white">Grading Works</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the cutting-edge <span className="text-cyan-400 font-semibold">AI technology</span> that's revolutionizing trading card authentication
          </p>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-flex flex-col items-center gap-2 text-emerald-400"
          >
            <span className="text-sm font-semibold">Scroll to explore</span>
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
