'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const faqData = [
  {
    question: "How does your Aqua Sunscreen provide extended protection?",
    answer:
      "Our Aqua Sunscreen is uniquely formulated to offer up to 6 hours of protection in a single application, utilizing advanced SPF technology and nourishing ingredients to shield your skin from harmful UV rays.",
  },
  {
    question: "What ingredients are key to your sunscreen’s effectiveness?",
    answer:
      "The Aqua Sunscreen features potent ingredients such as Hyaluronic Acid for hydration, Vitamin C from Kakadu Plum for brightening, and Vitamin E for added skin protection, all working together to enhance skin health.",
  },
  {
    question: "Is your sunscreen suitable for sensitive skin?",
    answer:
      "Yes, our Aqua Sunscreen is dermatologically tested and free from harsh chemicals, making it safe and suitable for all skin types, including sensitive skin.",
  },
  {
    question: "How can I get personalized recommendations for my skin type?",
    answer:
      "We offer a personalized skincare quiz on our website that helps you identify your skin type and recommends products tailored to meet your specific needs.",
  },
  {
    question: "What should I do if I experience irritation from your products?",
    answer:
      "If you experience irritation, we recommend discontinuing use immediately and consulting with a dermatologist. Your skin’s health is our priority, and we appreciate your feedback for continuous improvement.",
  },
  {
    question: "Where can I purchase Glansa AV Essentials products?",
    answer:
      "Our products are available for purchase directly on our website, and soon on select partner platforms. Stay tuned for updates on new retailers!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true });
  }, []);

  return (
    <section className="relative max-w-6xl mx-auto px-6 sm:px-12 py-20">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-100 -z-10" />

      {/* Gradient title */}
      <h2
        className="text-center text-5xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-purple-500 to-indigo-500 mb-16 text-balance"
        data-aos="fade-up"
      >
        Frequently Asked Questions
      </h2>

      <div className="space-y-8">
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            data-aos="flip-up"
            className="relative overflow-hidden border border-white/20 bg-white/60 backdrop-blur-2xl rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.15)] group"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-6 sm:p-8 text-left cursor-pointer transition-transform duration-300 group-hover:scale-[1.01]"
            >
              <span className="text-lg sm:text-xl font-semibold text-gray-800 leading-snug tracking-tight">
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <ChevronDown className="w-6 h-6 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="answer"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ type: 'spring', duration: 0.6 }}
                  className="overflow-hidden px-6 sm:px-8 pb-6 sm:pb-8"
                >
                  <p className="text-gray-700 text-base sm:text-lg font-medium leading-relaxed tracking-normal transition-all duration-300 ease-in-out">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
