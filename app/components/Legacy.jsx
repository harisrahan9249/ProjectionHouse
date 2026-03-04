'use client';

import { useEffect } from 'react';

export default function Legacy() {
  /* ===============================
     SMART AOS (ALL-IN-ONE)
  =============================== */
  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const elements = document.querySelectorAll('[data-aos]');

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('aos-active'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== AOS STYLES (LOCAL) ===== */}
      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 900ms cubic-bezier(0.19, 1, 0.22, 1),
            transform 900ms cubic-bezier(0.19, 1, 0.22, 1);
          will-change: transform, opacity;
        }

        [data-aos="fade-up"] {
          transform: translateY(40px);
        }

        [data-aos="fade-left"] {
          transform: translateX(40px);
        }

        [data-aos="fade-right"] {
          transform: translateX(-40px);
        }

        [data-aos="zoom-in"] {
          transform: scale(0.94);
        }

        .aos-active {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===== LEGACY SECTION ===== */}
      <section className="bg-white border-t border-gray-100 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          {/* LEFT — CONTENT */}
          <div data-aos="fade-up">
            <p className="text-[11px] tracking-[0.35em] uppercase text-gray-500 mb-6">
              Our Experience
            </p>

            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              A Legacy of 20 Years in
              <span className="block font-bold text-green-600 mt-2">
                AV Integration Excellence
              </span>
            </h2>

            <p className="mt-10 text-lg text-gray-700 leading-relaxed max-w-xl">
              Projection House delivers reliable and future-ready audiovisual
              and technology solutions for organisations operating in demanding
              environments across the UAE.
            </p>

            <p className="mt-6 text-lg text-gray-700 leading-relaxed max-w-xl">
              With nearly two decades of experience and strong global technology
              partnerships, we design systems that support communication,
              collaboration, and immersive experiences over the long term.
            </p>
          </div>

          {/* RIGHT — IMAGES */}
          <div className="grid grid-cols-2 gap-6">
            <div
              className="col-span-2 overflow-hidden rounded-2xl shadow-lg"
              data-aos="zoom-in"
            >
              <img
                src="/image/lagacy/lagacy1.jpg"
                alt="Large scale AV integration project"
                loading="lazy"
                className="w-full h-[280px] object-cover"
              />
            </div>

            <div
              className="overflow-hidden rounded-xl shadow-md"
              data-aos="fade-up"
              style={{ transitionDelay: '120ms' }}
            >
              <img
                src="/image/lagacy/lagacy3.jpg"
                alt="Corporate AV system installation"
                loading="lazy"
                className="w-full h-[210px] object-cover"
              />
            </div>

            <div
              className="overflow-hidden rounded-xl shadow-md"
              data-aos="fade-up"
              style={{ transitionDelay: '240ms' }}
            >
              <img
                src="/image/lagacy/lagacy2.jpg"
                alt="Control room audiovisual environment"
                loading="lazy"
                className="w-full h-[210px] object-cover"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
