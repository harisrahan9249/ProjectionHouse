'use client';

import { useEffect } from 'react';
import Link from 'next/link';

/* ===============================
   VERTICAL MARKETS DATA
=============================== */
const verticalMarkets = [
  {
    title: 'Commercial & Retail',
    image: '/image/corprate/retail.jpg',
    items: [
      { label: 'Retail', href: '/markets/retail' },
      { label: 'F&B / QSR', href: '/markets/fnb-qsr' },
      { label: 'Corporate Offices', href: '/markets/corporate-offices' },
      { label: 'Outdoor Advertising & Billboards', href: '/markets/outdoor-advertising' },
    ],
  },
  {
    title: 'Hospitality, Leisure & Entertainment',
    image: '/image/corprate/hotel.jpg',
    items: [
      { label: 'Hotels & Hospitality', href: '/markets/hospitality' },
      { label: 'Cinemas, Museums & Aquariums', href: '/markets/cinemas-museums' },
      { label: 'Recreational Centers & Gyms', href: '/markets/recreation' },
      { label: 'Yachts', href: '/markets/yachts' },
    ],
  },
  {
    title: 'Education & Training',
    image: '/image/corprate/eduction.jpg',
    items: [
      { label: 'Schools', href: '/markets/schools' },
      { label: 'Universities', href: '/markets/universities' },
      { label: 'Training Centers', href: '/markets/training-centers' },
      { label: 'Centers of Excellence', href: '/markets/centers-of-excellence' },
    ],
  },
  {
    title: 'Public Sector & NGOs',
    image: '/image/corprate/public.jpg',
    items: [
      { label: 'Government & Public Offices', href: '/markets/government' },
      { label: 'NGOs', href: '/markets/ngos' },
      { label: 'Municipal Facilities', href: '/markets/municipal' },
    ],
  },
  {
    title: 'Security, Defense & Special Environments',
    image: '/image/corprate/security.jpg',
    items: [
      { label: 'Military / Defense', href: '/markets/military' },
      { label: 'Police & Law Enforcement', href: '/markets/police' },
      { label: 'High-Security Fit-Outs', href: '/markets/high-security' },
    ],
  },
];

export default function Sectors() {

  /* ===============================
     SMART AOS
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
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ===============================
     MAGNETIC HOVER
  =============================== */
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `translate(${x * 0.04}px, ${y * 0.04}px)`;
  };

  const resetMouse = (e) => {
    e.currentTarget.style.transform = 'translate(0, 0)';
  };

  return (
    <>
      {/* ===== AOS STYLES ===== */}
      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 900ms cubic-bezier(0.19, 1, 0.22, 1),
            transform 900ms cubic-bezier(0.19, 1, 0.22, 1);
        }

        .aos-active {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===== SECTORS SECTION ===== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* HEADER */}
          <div className="max-w-3xl mb-28" data-aos>
            <p className="text-[11px] tracking-[0.35em] uppercase text-gray-500 mb-6">
              Markets
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Sectors We Work With
            </h2>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              We deliver integrated technology environments for
              organisations operating in complex, high-performance
              settings.
            </p>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-24">

            {verticalMarkets.map((sector, i) => (
              <article
                key={sector.title}
                data-aos
                style={{ transitionDelay: `${i * 120}ms` }}
                onMouseMove={handleMouseMove}
                onMouseLeave={resetMouse}
                className="group relative will-change-transform"
              >

                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100 shadow-sm group-hover:shadow-2xl transition-shadow duration-700">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    loading="lazy"
                    className="
                      absolute inset-0 w-full h-full object-cover
                      scale-[1.04]
                      transition-transform duration-[1400ms]
                      ease-[cubic-bezier(0.19,1,0.22,1)]
                      group-hover:scale-110
                    "
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* GLASS PANEL */}
                <div className="
                  relative -mt-16 mx-6
                  rounded-xl backdrop-blur-xl bg-white/90
                  shadow-xl px-7 py-6
                  transition-all duration-700
                  group-hover:-translate-y-3
                ">

                  <h3 className="text-lg font-medium text-gray-900">
                    {sector.title}
                  </h3>

                  {/* SUBLINKS */}
                  <div className="mt-4 space-y-2">
                    {sector.items.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        className="
                          block text-sm text-gray-600
                          hover:text-green-600
                          transition
                        "
                      >
                        {sub.label}
                      </Link>
                    ))}
                  </div>

                  <div className="mt-5 h-[1px] w-0 bg-gray-900 transition-all duration-700 group-hover:w-12" />

                </div>

              </article>
            ))}

          </div>

        </div>
      </section>
    </>
  );
}
