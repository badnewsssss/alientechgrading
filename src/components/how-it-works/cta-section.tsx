'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Container } from '@/components/ui';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-20 pulse-glow" />

      <Container size="lg" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Main Content */}
          <div className="alien-card holographic p-12 rounded-2xl max-w-4xl mx-auto">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 mb-6 alien-glow pulse-glow">
              <Sparkles className="w-10 h-10 text-black" />
            </div>

            {/* Headline */}
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-white">Ready to Experience </span>
              <span className="text-emerald-400 neon-text">The Future?</span>
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of collectors who are already using{' '}
              <span className="text-cyan-400 font-semibold">AI-powered grading</span> to make smarter decisions
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {['Early Access', '50% Off First Month', '100 Free Credits', 'Priority Support'].map(
                (benefit, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-sm font-medium text-emerald-300 border border-emerald-500/30"
                  >
                    <Sparkles className="w-4 h-4" />
                    {benefit}
                  </div>
                )
              )}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#waitlist">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold rounded-lg alien-glow inline-flex items-center gap-2 whitespace-nowrap"
                >
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-lg border-2 border-emerald-500/50 text-emerald-400 font-bold rounded-lg hover:bg-emerald-500/10 transition-colors inline-flex items-center gap-2 whitespace-nowrap"
                >
                  Back to Home
                </motion.button>
              </Link>
            </div>

            {/* Social Proof */}
            <p className="mt-8 text-gray-400 text-sm">
              <span className="text-emerald-400 font-semibold">10,000+</span> collectors already on the waitlist
            </p>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-gray-500 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full pulse-glow" />
              <span>99.2% Accuracy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full pulse-glow" />
              <span>Under 30 Seconds</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full pulse-glow" />
              <span>Blockchain Verified</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
