'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';
import { Container, Card, Button } from '@/components/ui';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Successfully joined the waitlist!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 5000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 starfield" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500 rounded-full filter blur-3xl opacity-10 pulse-glow" />

      <Container size="md" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="alien-card holographic p-8 sm:p-12 text-center rounded-2xl">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 mb-6 alien-glow pulse-glow"
            >
              <Mail className="w-8 h-8 text-black" />
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-emerald-400 neon-text">Join the Waitlist</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Be among the first to experience the <span className="text-cyan-400 font-semibold">future of card grading</span>. Get early access,
              exclusive pricing, and free credits when we launch.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {[
                'Early Access',
                '50% Off First Month',
                '100 Free Credits',
                'Priority Support',
              ].map((benefit, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-sm rounded-full text-sm font-medium text-emerald-300 border border-emerald-500/30"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  {benefit}
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === 'loading'}
                  className="flex-1 px-6 py-4 rounded-lg border-2 border-emerald-500/30 bg-black/50 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all disabled:opacity-50 alien-border"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-8 py-4 text-lg bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold rounded-lg alien-glow whitespace-nowrap hover:scale-105 transition-transform duration-300 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
                </button>
              </div>

              {/* Status Messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center justify-center gap-2 text-secondary"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">{message}</span>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center justify-center gap-2 text-red-500"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span className="font-medium">{message}</span>
                </motion.div>
              )}

              <p className="mt-4 text-sm text-gray-500">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 pt-8 border-t border-emerald-500/20"
            >
              <p className="text-sm text-gray-400 mb-3">
                Join <span className="text-emerald-400 font-semibold">5,000+</span> collectors already on the waitlist
              </p>
              <div className="flex justify-center -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-500 to-cyan-500 border-2 border-black flex items-center justify-center text-black font-semibold text-xs alien-glow"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-emerald-900 border-2 border-emerald-500/30 flex items-center justify-center text-emerald-400 font-semibold text-xs">
                  +5K
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
