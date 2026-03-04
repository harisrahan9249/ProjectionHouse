'use client';

import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">

      {/* BACKGROUND VIDEO / IMAGE */}
      <video
        className="absolute inset-0 w-full h-full object-cover brightness-100 saturate-100"
        src="/video/video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* CLEAN WHITE OVERLAY (ELECTROSONIC FEEL) */}
      {/* <div className="absolute inset-0 bg-white/85" /> */}

      {/* SUBTLE BRAND ACCENT */}
      <div
        className="
          absolute top-[-25%] left-1/2 -translate-x-1/2
          w-[900px] h-[900px]
          bg-green-500/12
          blur-[160px]
          rounded-full
        "
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-[16rem] pb-[12rem]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* EYEBROW */}
          <p className="text-white text-sm tracking-[0.3em] uppercase mb-8">
            Projection & Audio Visual Engineering
          </p>

          {/* HEADLINE */}
          <h1 className="text-[3.2rem] md:text-[4.4rem] font-semibold text-white leading-tight">
            Integrated Audio Visual
            <span className="block text-green-600 font-bold">
              Technology Solutions
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-8 text-lg text-white leading-relaxed">
            We design, integrate, and support professional projection,
            LED display, and audiovisual systems for corporate,
            education, hospitality, and government environments.
          </p>

          {/* CTA */}
          <div className="mt-12 flex gap-6">
            <a
              href="/contact"
              className="
                px-10 py-4 rounded-md
                bg-green-600 text-white
                hover:bg-green-700
                transition font-medium
              "
            >
              Request Consultation
            </a>

            <a
              href="/projects"
              className="
                px-10 py-4 rounded-md
                border border-gray-300
                text-white
                hover:border-green-600
                hover:text-green-600
                transition font-medium
              "
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>

      {/* TRUST STRIP */}
      <div className="absolute bottom-0 w-full bg-white border-t border-gray-100 py-6">
        <p className="text-center text-xs text-gray-500 tracking-widest uppercase">
          Corporate · Education · Hospitality · Government
        </p>
      </div>

    </section>
  );
}
