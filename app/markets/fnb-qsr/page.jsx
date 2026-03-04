'use client';

import { useEffect } from 'react';
import {
  BuildingStorefrontIcon,
  ClockIcon,
  TvIcon,
  CreditCardIcon,
  CpuChipIcon,
  UserGroupIcon,
  ChartBarIcon,
  SpeakerWaveIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function FNBQSR() {

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
         HERO — FAST & FRIENDLY
      =============================== */}
      <section className="pt-44 pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-5">
              Commercial & Retail Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900">
              F&amp;B /
              <span className="block text-green-600">
                QSR Solutions
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
              Power fast, consistent and engaging food & beverage
              experiences with smart technology designed for
              high-volume, high-expectation environments.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/fnb/hero.jpg"
              alt="Modern QSR Restaurant Technology"
              className="w-full h-[460px] object-cover rounded-[3rem] shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         SERVICE FLOW — QSR JOURNEY
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Designed for Speed & Consistency
          </h2>

          <div className="mt-20 grid lg:grid-cols-4 gap-12">

            {[
              {
                icon: TvIcon,
                title: 'Attract & Inform',
                text: 'Digital menus and promotions capture attention instantly.',
              },
              {
                icon: CreditCardIcon,
                title: 'Order & Pay',
                text: 'Self-service kiosks and seamless payment integrations.',
              },
              {
                icon: ClockIcon,
                title: 'Prepare Faster',
                text: 'Clear order visibility improves kitchen efficiency.',
              },
              {
                icon: UserGroupIcon,
                title: 'Serve Smoothly',
                text: 'Queue management and pickup displays streamline flow.',
              },
            ].map((step, index) => (
              <div
                key={index}
                data-aos
                className="bg-gray-50 p-10 rounded-2xl
                           hover:bg-white hover:shadow-lg transition"
              >
                <step.icon className="w-10 h-10 text-green-600" />
                <h3 className="mt-6 font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTIONS + IMAGE
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Technology Built for F&amp;B Operations
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House delivers integrated F&amp;B technology
              solutions that enhance guest experience while optimizing
              operations across single outlets and multi-location chains.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <TvIcon className="w-6 h-6 text-green-600" />
                Digital menu boards & LED displays
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Kitchen display & system integration
              </li>
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                Drive-thru audio & order confirmation
              </li>
              <li className="flex gap-3">
                <ChartBarIcon className="w-6 h-6 text-green-600" />
                Analytics, reporting & performance insights
              </li>
            </ul>
          </div>

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/fnb/solution.jpg"
              alt="Digital Menu Boards QSR"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         F&B SPACES (EXPERIENCE)
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          {/* IMAGE 3 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/fnb/store.jpg"
              alt="Quick Service Restaurant Experience"
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>

          <div data-aos className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Built for Modern Food Environments
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From fast food and cafés to food courts and drive-thru
              operations, our solutions scale effortlessly while
              maintaining brand consistency and service quality.
            </p>
          </div>

        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-green-600 py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Serve Faster. Engage Better. Scale Smarter.
          </h2>
          <p className="mt-6 text-green-100">
            Upgrade your F&amp;B and QSR operations with intelligent
            technology built for speed, consistency and growth.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
