'use client';

import { useEffect } from 'react';
import {
  TvIcon,
  PresentationChartBarIcon,
  Squares2X2Icon,
  LightBulbIcon,
  BuildingStorefrontIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function DigitalSignageLEDWalls() {

  /* ===============================
     AOS (SAME ENGINE)
  =============================== */
  useEffect(() => {
    const prefersReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const items = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-on');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -120px 0px' }
    );

    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      {/* ===== AOS STYLES ===== */}
      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(22px);
          transition:
            opacity 900ms cubic-bezier(0.19,1,0.22,1),
            transform 900ms cubic-bezier(0.19,1,0.22,1);
        }
        .aos-on {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===============================
         HERO — VISUAL IMPACT
      =============================== */}
      <section className="pt-44 pb-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div data-aos className="max-w-3xl">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-6">
              Visual Communication Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Digital Signage &
              <span className="block text-green-500">
                LED Walls
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-300 leading-relaxed">
              Transform spaces with dynamic digital content — delivering
              immersive visual experiences through high-resolution
              digital signage and large-format LED walls.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="mt-20 rounded-[3rem] overflow-hidden shadow-2xl">
            <img
              src="/image/digital-signage/hero.jpg"
              alt="LED Wall Experience"
              className="w-full h-[460px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         WHAT MAKES IT POWERFUL (ICON STRIP)
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {[
            {
              icon: TvIcon,
              title: 'Ultra-High Resolution',
              text: 'Crystal-clear visuals with seamless panels and vibrant colors.',
            },
            {
              icon: Squares2X2Icon,
              title: 'Scalable & Modular',
              text: 'Flexible configurations for any size, shape or environment.',
            },
            {
              icon: PresentationChartBarIcon,
              title: 'Content Intelligence',
              text: 'Centralized control, scheduling and analytics.',
            },
            {
              icon: LightBulbIcon,
              title: 'Creative Freedom',
              text: 'Unlimited possibilities for branding and storytelling.',
            },
          ].map((item, index) => (
            <div
              key={index}
              data-aos
              className="p-10 rounded-2xl bg-gray-50
                         hover:bg-white hover:shadow-lg transition"
            >
              <item.icon className="w-10 h-10 text-green-600" />
              <h3 className="mt-6 font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ===============================
         EXPERIENCE GALLERY (2 IMAGES)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/digital-signage/indoor.jpg"
              alt="Indoor Digital Signage"
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>

          <div data-aos className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Designed for Engagement
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From retail floors and corporate lobbies to command centers
              and public venues, our digital signage solutions deliver
              clarity, engagement and impact.
            </p>
          </div>

          {/* IMAGE 3 */}
          <div data-aos className="lg:col-span-5">
            <img
              src="/image/digital-signage/outdoor.jpg"
              alt="Outdoor LED Wall"
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>

          <div data-aos className="lg:col-span-7">
            <h2 className="text-3xl font-semibold text-gray-900">
              Built for Scale & Reliability
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              High-brightness LED walls engineered for indoor and outdoor
              environments — delivering reliable performance, even in
              demanding conditions.
            </p>
          </div>

        </div>
      </section>

      {/* ===============================
         APPLICATIONS (MINIMAL)
      =============================== */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">

          {[
            { icon: BuildingStorefrontIcon, label: 'Retail & Showrooms' },
            { icon: BuildingOffice2Icon, label: 'Corporate & Control Rooms' },
            { icon: GlobeAltIcon, label: 'Public Spaces & Outdoor Media' },
          ].map((item, index) => (
            <div
              key={index}
              data-aos
              className="flex items-center gap-6 bg-gray-50
                         rounded-2xl p-8 hover:bg-white
                         hover:shadow-lg transition"
            >
              <item.icon className="w-10 h-10 text-green-600" />
              <p className="font-medium text-gray-900">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-black py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Make Every Message Unmissable
          </h2>
          <p className="mt-6 text-gray-300">
            Elevate communication and brand presence with impactful
            digital signage and LED wall solutions.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
