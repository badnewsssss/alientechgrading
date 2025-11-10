'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Shield, Award } from 'lucide-react';
import { Container } from '@/components/ui';

const metrics = [
  {
    icon: Target,
    value: '99.2%',
    label: 'Overall Accuracy',
    description: 'Matches professional grading standards',
    gradient: 'from-emerald-500 to-green-600',
  },
  {
    icon: TrendingUp,
    value: '10M+',
    label: 'Cards Analyzed',
    description: 'Continuously learning and improving',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    icon: Shield,
    value: '0.1',
    label: 'Grade Variance',
    description: 'Consistent within 0.1 points',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    icon: Award,
    value: '95%',
    label: 'User Satisfaction',
    description: 'Trusted by collectors worldwide',
    gradient: 'from-cyan-500 to-blue-600',
  },
];

export default function AccuracySection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-black relative overflow-hidden">
      <Container size="lg" className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold mb-4"
          >
            <span className="text-emerald-400 neon-text">Proven Accuracy</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our AI has been validated against thousands of professionally graded cards
          </motion.p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="alien-card holographic p-6 rounded-2xl text-center group cursor-pointer">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${metric.gradient} flex items-center justify-center alien-glow group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent neon-text`}>
                    {metric.value}
                  </div>
                  <div className="text-white font-semibold mb-2">
                    {metric.label}
                  </div>
                  <p className="text-gray-400 text-sm">
                    {metric.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="alien-card holographic p-8 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            How We Compare
          </h3>

          <div className="space-y-6">
            {[
              { name: 'Alien Tech AI', score: 99.2, color: 'bg-emerald-500' },
              { name: 'Professional Grader A', score: 98.5, color: 'bg-blue-500' },
              { name: 'Professional Grader B', score: 97.8, color: 'bg-purple-500' },
              { name: 'Manual Assessment', score: 85.0, color: 'bg-gray-500' },
            ].map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{item.name}</span>
                  <span className="text-emerald-400 font-bold">{item.score}%</span>
                </div>
                <div className="relative h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.score}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`absolute inset-y-0 left-0 ${item.color} rounded-full`}
                    style={{ boxShadow: `0 0 10px currentColor` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-400 text-sm text-center mt-6">
            *Based on independent validation study of 10,000+ cards (2024)
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
