'use client';

import { useEffect } from 'react';
import {
  TvIcon,
  GlobeAltIcon,
  ChartBarIcon,
  CpuChipIcon,
  BuildingOffice2Icon,
  SignalIcon,
  EyeIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function OutdoorAdvertisingBillboards() {

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
          transform: translateY(26px);
          transition:
            opacity 1000ms cubic-bezier(0.19,1,0.22,1),
            transform 1000ms cubic-bezier(0.19,1,0.22,1);
        }
        .aos-on {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===============================
         HERO — CITY SCALE VISIBILITY
      =============================== */}
      <section className="pt-44 pb-36 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-5">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-6">
              Commercial & Retail Media
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Outdoor Advertising
              <span className="block text-green-500">
                & Billboards
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-xl">
              Deliver bold, high-visibility messaging through
              large-format LED billboards and outdoor digital
              advertising networks designed for maximum reach.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/outdoor/hero.jpg"
              alt="Large Outdoor LED Billboard"
              className="w-full h-[480px] object-cover rounded-[3rem] shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         WHY OUTDOOR MEDIA WORKS
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Built for Maximum Visibility
          </h2>

          <div className="mt-20 grid lg:grid-cols-4 gap-12">

            {[
              {
                icon: EyeIcon,
                title: 'High Impact',
                text: 'Large-scale displays command attention in busy urban environments.',
              },
              {
                icon: MapIcon,
                title: 'Strategic Locations',
                text: 'Deployed across highways, city centers and transport hubs.',
              },
              {
                icon: SignalIcon,
                title: 'Always On',
                text: 'High-brightness LEDs ensure visibility day and night.',
              },
              {
                icon: ChartBarIcon,
                title: 'Measurable Reach',
                text: 'Campaign scheduling, analytics and performance insights.',
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos
                className="bg-gray-50 p-10 rounded-2xl
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
        </div>
      </section>

      {/* ===============================
         TECHNOLOGY + IMAGE
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Outdoor Media Technology
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House delivers turnkey outdoor advertising
              solutions — combining high-brightness LED technology,
              robust structures and intelligent content management.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <TvIcon className="w-6 h-6 text-green-600" />
                Large-format LED billboards & digital hoardings
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Remote content management & scheduling
              </li>
              <li className="flex gap-3">
                <GlobeAltIcon className="w-6 h-6 text-green-600" />
                Networked displays across multiple locations
              </li>
              <li className="flex gap-3">
                <BuildingOffice2Icon className="w-6 h-6 text-green-600" />
                Structural, electrical & environmental integration
              </li>
            </ul>
          </div>

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/outdoor/technology.jpg"
              alt="Outdoor LED Billboard Technology"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         URBAN APPLICATIONS
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          {/* IMAGE 3 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/outdoor/city.jpg"
              alt="Urban Digital Billboard Network"
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>

          <div data-aos className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Designed for Urban Environments
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From highways and commercial districts to airports
              and transport corridors, our outdoor advertising
              solutions are engineered for durability, clarity
              and long-term performance.
            </p>
          </div>

        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-black py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Make Your Message Impossible to Miss
          </h2>
          <p className="mt-6 text-gray-300">
            Deploy high-impact outdoor advertising and billboard
            solutions that dominate the urban landscape.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
