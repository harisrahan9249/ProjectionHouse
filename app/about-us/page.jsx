"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

export default function AboutUsPage() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen px-6 py-12 bg-black text-white font-sans relative overflow-hidden"
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-[200%] h-[200%] -top-1/2 -left-1/2 bg-[conic-gradient(at_top_left,_#a855f7,_#9333ea,_#6b21a8,_#a855f7)] animate-spin-slower opacity-10 blur-[200px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/sparkle.svg')] bg-repeat opacity-10 mix-blend-screen animate-slow-scroll" />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-purple-950/30 pointer-events-none" />
      </div>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes slow-scroll {
          0% { background-position: 0 0; }
          100% { background-position: 100% 100%; }
        }
        .animate-spin-slower { animation: spin 80s linear infinite; }
        .animate-slow-scroll { animation: slow-scroll 120s linear infinite; }
      `}</style>

      {/* Modern Navbar */}
      <nav className="relative z-20 flex justify-between items-center max-w-7xl mx-auto py-6 px-4 md:px-8">
        <Link href="/" className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Glansa
        </Link>
        <div className="flex gap-4 text-sm md:text-base items-center">
          <Link href="/" className="text-purple-200 hover:text-white transition duration-300">
            <Home className="w-5 h-5" />
          </Link>

        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-6xl mx-auto pt-20 pb-16 text-center space-y-10">
        <motion.h1
          data-aos="fade-up"
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-300 via-white to-purple-300 bg-clip-text text-transparent drop-shadow-md"
        >
          About Glansa AV Essentials
        </motion.h1>

        <motion.div
          data-aos="zoom-in"
          className="relative mx-auto w-full max-w-2xl rounded-[2rem] overflow-hidden border border-purple-500/30 shadow-[0_20px_60px_-15px_rgba(168,85,247,0.4)] hover:shadow-[0_25px_75px_-10px_rgba(168,85,247,0.5)] transition-all duration-500"
        >
          <img
            src="/glansa/camara.jpg"
            alt="Glansa skincare concept"
            width={900}
            height={500}
            className="w-full h-auto object-cover rounded-[2rem]"
            priority
          />
        </motion.div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 max-w-6xl mx-auto space-y-24">
        {/* INTRO */}
        <motion.section
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-5 text-purple-200 text-lg">
            <h2 className="text-3xl font-bold text-white">Explore the Benefits</h2>
            <p>
              Our skincare brand is thoughtfully designed to cater to all skin types,
              climates, and lifestyles. Founded by a team of passionate doctors with
              over 15 years of experience, we sought to address a key gap in the market:
              the need for a skincare range that works holistically across diverse skin
              types, including sensitive skin, while utilizing highly effective ingredient
              combinations.
            </p>
          </div>
          <img
            src="/glansa/17.webp"
            alt="Benefits of Glansa"
            width={600}
            height={400}
            className="rounded-3xl shadow-2xl border border-purple-500/30"
          />
        </motion.section>

        {/* MISSION */}
        <motion.section
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <img
            src="/glansa/glansa002.jpg"
            alt="Our Mission"
            width={600}
            height={400}
            className="rounded-3xl shadow-2xl border border-purple-500/30"
          />
          <div className="space-y-5 text-purple-200 text-lg">
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
            <p>
              At Glansa AV Essentials, our mission is to create effective skincare for all
              skin types, grounded in empathy and guided by science. We are committed to
              continuously evolving — listening to our consumers, understanding their
              concerns, and innovating products that deliver meaningful results.
            </p>
            <p>
              We strive to build a skincare range that adapts to changing needs, offering
              thoughtful solutions that are simple, clean, and purposeful.
            </p>
          </div>
        </motion.section>

        {/* VISION */}
        <motion.section
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-5 text-purple-200 text-lg">
            <h2 className="text-3xl font-bold text-white">Our Vision</h2>
            <p>
              Our vision is to redefine skincare by creating thoughtfully curated formulations
              that are safe, effective, and suitable for all skin types — even the most sensitive.
            </p>
            <p>
              We believe in transparency and trust. Our products promise only what they deliver —
              no exaggerated claims, no harmful ingredients. Every formula is designed with skin
              health and environmental responsibility in mind.
            </p>
            <p>
              At Glansa, we don’t just treat the skin — we understand it.
            </p>
          </div>
          <img
            src="/glansa/GLANSA-SUNSCREEN.webp"
            alt="Our Vision"
            width={600}
            height={400}
            className="rounded-3xl shadow-2xl border border-purple-500/30"
          />
        </motion.section>
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-24 pt-12 pb-8 border-t border-purple-900 bg-gradient-to-t from-black via-purple-950/20 to-transparent">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-purple-300 text-sm">
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Glansa AV Essentials</h3>
            <p>Skincare powered by science, backed by trust.</p>
          </div>
          <div>

          </div>

        </div>
        <div className="mt-10 text-center text-purple-500 text-xs">
          &copy; {new Date().getFullYear()} Glansa AV Essentials. All rights reserved.
        </div>
      </footer>
    </motion.div>
  );
}
