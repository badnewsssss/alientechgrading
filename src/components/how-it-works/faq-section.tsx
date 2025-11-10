'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Container } from '@/components/ui';

const faqs = [
  {
    question: 'How accurate is AI grading compared to human graders?',
    answer:
      'Our AI achieves 99.2% accuracy when compared to professional human graders. In fact, our system is often more consistent than human graders because it eliminates subjective factors like mood, fatigue, and personal bias. Every card is evaluated using the exact same standards.',
  },
  {
    question: 'What types of cards can you grade?',
    answer:
      'We currently support all major trading card types including sports cards (baseball, basketball, football), Pokémon, Magic: The Gathering, Yu-Gi-Oh!, and other collectible card games. Our AI has been trained on millions of cards across all major sets and eras.',
  },
  {
    question: 'How long does the grading process take?',
    answer:
      'Most cards are graded in under 30 seconds. This includes uploading your photos, AI analysis of all grading factors (centering, corners, edges, surface), and generation of your detailed report. Traditional grading services can take weeks or months.',
  },
  {
    question: 'Will AI grading be accepted for selling cards?',
    answer:
      'While AI grading is still gaining acceptance in the marketplace, many collectors and dealers already trust our grades for buying decisions. We provide detailed reports that can help you decide which cards are worth sending to traditional grading services for certification.',
  },
  {
    question: 'How do you determine market value?',
    answer:
      'Our system analyzes real-time sales data from major marketplaces including eBay, COMC, TCGPlayer, and private sales. We factor in the grade, card condition, recent trends, and supply/demand to provide accurate market valuations.',
  },
  {
    question: 'Can I contest or appeal a grade?',
    answer:
      'Yes! If you believe a grade is incorrect, you can request a re-evaluation. Our team will review the AI analysis and may adjust the grade if warranted. We also continuously improve our algorithms based on user feedback.',
  },
  {
    question: 'Is my card data kept private?',
    answer:
      'Absolutely. Your card images and grading results are completely private and never shared without your permission. We use industry-standard encryption to protect your data, and you can delete your records at any time.',
  },
  {
    question: 'Do you offer physical grading slabs?',
    answer:
      'Not yet, but it\'s coming! We\'re currently developing partnerships to offer physical slabs with blockchain-verified grades. Waitlist members will get early access to this feature when it launches.',
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="alien-card holographic rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-semibold text-white pr-4">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-emerald-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-gray-300 leading-relaxed">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function FAQSection() {
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
            <span className="text-emerald-400 neon-text">Frequently Asked Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Everything you need to know about AI-powered card grading
          </motion.p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Still have questions?{' '}
            <a
              href="mailto:support@alientechgrading.com"
              className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              Contact our support team
            </a>
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
