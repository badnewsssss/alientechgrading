'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Container } from '@/components/ui';

const stats = [
  {
    value: 500000,
    suffix: '+',
    label: 'Cards Graded',
    description: 'Trusted by collectors worldwide',
  },
  {
    value: 99.2,
    suffix: '%',
    label: 'Accuracy Rate',
    description: 'Verified against professional grades',
  },
  {
    value: 28,
    suffix: 's',
    label: 'Average Time',
    description: 'Lightning-fast analysis',
  },
  {
    value: 10000,
    suffix: '+',
    label: 'Active Users',
    description: 'Growing community of collectors',
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000; // 2 seconds
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-900 via-cyan-900 to-purple-900 text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20" />

      {/* Glowing orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl opacity-20 pulse-glow" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl opacity-20" style={{ animation: 'pulseGlow 2s ease-in-out infinite 1s' }} />

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
            <span className="neon-text">Trusted by Thousands</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-emerald-100 max-w-2xl mx-auto"
          >
            Join the <span className="text-cyan-300 font-semibold">revolution</span> in trading card grading
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="alien-card holographic rounded-2xl p-8 border-2 alien-glow group cursor-pointer">
                <div className="text-5xl sm:text-6xl font-bold mb-2 neon-text text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xl font-semibold mb-2 text-white">
                  {stat.label}
                </div>
                <div className="text-sm text-emerald-100">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          <div className="text-center">
            <div className="text-sm text-emerald-200 mb-2">As Featured In</div>
            <div className="flex flex-wrap justify-center gap-6 items-center">
              {['TCGPlayer', 'Beckett', 'Collectors Universe', 'Sports Card Investor'].map(
                (brand, i) => (
                  <div
                    key={i}
                    className="px-6 py-3 alien-border bg-black/30 backdrop-blur-sm rounded-lg text-emerald-300 font-semibold hover:alien-glow transition-all duration-300 cursor-pointer"
                  >
                    {brand}
                  </div>
                )
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
