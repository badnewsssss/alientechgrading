'use client';

import { motion } from 'framer-motion';
import { DollarSign, Clock, Users, TrendingUp, Shield, Sparkles } from 'lucide-react';
import { Container, Card } from '@/components/ui';

const benefits = [
  {
    icon: DollarSign,
    title: 'Save Money',
    stat: '90% Less',
    description: 'Cost per grade compared to traditional services. Grade more cards for less.',
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    icon: Clock,
    title: 'Save Time',
    stat: '99% Faster',
    description: 'Get results in seconds, not weeks. No shipping, no waiting in queues.',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Shield,
    title: 'Consistency',
    stat: '100% Objective',
    description: 'AI eliminates human bias and mood variations. Same standards, every time.',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: TrendingUp,
    title: 'Better Decisions',
    stat: 'Real-Time Data',
    description: 'Make informed buying and selling decisions with instant market valuations.',
    gradient: 'from-orange-500 to-red-600',
  },
  {
    icon: Users,
    title: 'Community',
    stat: '10K+ Users',
    description: 'Join thousands of collectors and dealers using AI grading technology.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    stat: 'Future-Proof',
    description: 'Regular AI updates mean accuracy only improves over time.',
    gradient: 'from-violet-500 to-purple-600',
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      <Container size="lg">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            <span className="text-white neon-text-purple">Why Choose </span>
            <span className="text-emerald-400 neon-text">Alien Tech?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            The <span className="text-cyan-400 font-semibold">smartest way</span> to grade your trading card collection
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="alien-card holographic h-full relative overflow-hidden group p-6 rounded-2xl">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {benefit.title}
                    </h3>

                    {/* Stat */}
                    <div className={`text-3xl font-bold mb-3 bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent neon-text`}>
                      {benefit.stat}
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 alien-card holographic rounded-2xl">
            <div className="text-left">
              <h3 className="text-2xl font-bold mb-2 text-white">
                Ready to <span className="text-emerald-400">revolutionize</span> your grading?
              </h3>
              <p className="text-gray-300">
                Join the future of trading card authentication
              </p>
            </div>
            <button className="px-8 py-4 text-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold rounded-lg alien-glow whitespace-nowrap hover:scale-105 transition-transform duration-300">
              Get Early Access
            </button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
