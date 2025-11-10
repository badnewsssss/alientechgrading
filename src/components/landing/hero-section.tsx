'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield } from 'lucide-react';
import { Button, Badge, Container } from '@/components/ui';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black starfield scanlines">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-30" />

      {/* Animated alien glow blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-20 animate-blob pulse-glow" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-15 animate-blob animation-delay-4000" />

        {/* Additional small glowing orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-emerald-400 rounded-full filter blur-2xl opacity-30 animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-400 rounded-full filter blur-2xl opacity-25 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="alien-border holographic rounded-full px-6 py-3 bg-black/50 backdrop-blur-sm">
              <span className="text-emerald-400 font-semibold flex items-center gap-2">
                <Sparkles className="w-4 h-4 inline-block animate-pulse" />
                ALIEN TECH • AI-POWERED GRADING
              </span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-white neon-text">
              Grade Your Cards
              <br />
              <span className="text-emerald-400 neon-text">In Seconds</span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Revolutionary <span className="text-cyan-400 font-semibold">alien technology</span> that analyzes your trading cards with
            professional accuracy. Get instant grades, detailed condition reports,
            and market value insights.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <div className="flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full border border-cyan-500/30 alien-glow-cyan">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-300">
                Under 30 Seconds
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full border border-emerald-500/30 alien-glow">
              <Shield className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-300">
                99.2% Accuracy
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-black/70 backdrop-blur-sm rounded-full border border-purple-500/30 alien-glow-purple">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">
                AI-Powered Analysis
              </span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href="#waitlist">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold alien-glow hover:scale-110 transition-all duration-300">
                Join Waitlist
              </Button>
            </a>
            <a href="/how-it-works">
              <Button size="lg" variant="outline" className="border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 backdrop-blur-sm">
                See How It Works
              </Button>
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-sm text-gray-500"
          >
            <span className="text-emerald-400 font-semibold">10,000+</span> collectors trust alien tech worldwide
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
