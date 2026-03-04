'use client';

import { useEffect } from 'react';
import {
  BuildingStorefrontIcon,
  UserGroupIcon,
  PresentationChartBarIcon,
  TvIcon,
  CpuChipIcon,
  CreditCardIcon,
  ShoppingBagIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function RetailSolutions() {

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
         HERO — RETAIL EXPERIENCE
      =============================== */}
      <section className="pt-44 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-5">
              Commercial & Retail Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900">
              Retail
              <span className="block text-green-600">
                Environments
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
              Create engaging, data-driven retail environments that
              attract customers, enhance experiences and convert
              footfall into measurable business growth.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/retail/hero.jpg"
              alt="Modern Retail Store Technology"
              className="w-full h-[460px] object-cover rounded-[3rem] shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         RETAIL JOURNEY (FLOW DESIGN)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Designed Around the Retail Journey
          </h2>

          <div className="mt-20 grid lg:grid-cols-4 gap-12">

            {[
              {
                icon: GlobeAltIcon,
                title: 'Attract',
                text: 'Digital storefronts, LED displays and outdoor media drive visibility.',
              },
              {
                icon: UserGroupIcon,
                title: 'Engage',
                text: 'Interactive displays, kiosks and immersive content increase dwell time.',
              },
              {
                icon: ShoppingBagIcon,
                title: 'Convert',
                text: 'Seamless checkout, self-service and POS integrations.',
              },
              {
                icon: PresentationChartBarIcon,
                title: 'Optimize',
                text: 'Analytics and insights improve merchandising and operations.',
              },
            ].map((step, index) => (
              <div
                key={index}
                data-aos
                className="bg-white p-10 rounded-2xl
                           shadow-sm hover:shadow-lg transition"
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
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Retail Technology Solutions
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House delivers end-to-end retail technology
              solutions that blend digital experiences with operational
              efficiency across single stores and multi-location brands.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <TvIcon className="w-6 h-6 text-green-600" />
                Digital signage & LED walls
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Smart analytics & system integration
              </li>
              <li className="flex gap-3">
                <CreditCardIcon className="w-6 h-6 text-green-600" />
                Self-service kiosks & payment solutions
              </li>
              <li className="flex gap-3">
                <BuildingStorefrontIcon className="w-6 h-6 text-green-600" />
                Store-wide AV & network infrastructure
              </li>
            </ul>
          </div>

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/retail/solution.jpg"
              alt="Retail Digital Signage and Displays"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         RETAIL SPACES (GALLERY STYLE)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          {/* IMAGE 3 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/retail/store.jpg"
              alt="Retail Experience Store"
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>

          <div data-aos className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Built for Modern Retail Spaces
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From flagship stores and shopping malls to specialty
              retail and pop-up environments, our solutions adapt
              to evolving customer expectations and brand identity.
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
            Transform Retail into an Experience
          </h2>
          <p className="mt-6 text-green-100">
            Deliver engaging, intelligent retail environments that
            drive customer satisfaction and business performance.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
