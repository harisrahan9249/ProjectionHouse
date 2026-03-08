'use client';

import { useEffect } from 'react';
import {
  CpuChipIcon,
  CommandLineIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  TvIcon,
  SpeakerWaveIcon,
  BoltIcon,
  SignalIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function Yachts() {

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
          transform: translateY(24px);
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
         HERO — MARINE INTELLIGENCE
      =============================== */}
      <section className="pt-44 pb-36 bg-gradient-to-b from-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-28 items-center">

          <div data-aos className="lg:col-span-5">
            <p className="text-xs tracking-[0.45em] uppercase text-gray-400 mb-6">
              Hospitality, Leisure & Entertainment
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Smart
              <span className="block text-green-600">
                Yachts
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
              Deliver precision-controlled, intelligent yacht
              environments through integrated marine-grade
              technology systems — engineered for performance,
              safety and luxury.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/yachts/hero.jpg"
              alt="Luxury Smart Yacht Technology"
              className="w-full h-[480px] object-cover rounded-[3.2rem] shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         CORE SYSTEMS — TECH FIRST
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Intelligent Marine Systems
          </h2>

          <div className="mt-20 grid lg:grid-cols-4 gap-12">

            {[
              {
                icon: CpuChipIcon,
                title: 'Central Control',
                text: 'Unified control of lighting, climate, AV and systems.',
              },
              {
                icon: CommandLineIcon,
                title: 'Automation Logic',
                text: 'Scenario-based automation for navigation and leisure.',
              },
              {
                icon: SignalIcon,
                title: 'Connectivity',
                text: 'Satellite, onboard network and secure communication.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Marine Security',
                text: 'Surveillance, access control and monitoring.',
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos
                className="bg-gray-50 p-10 rounded-2xl
                           hover:bg-white hover:shadow-xl transition"
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
         AV + EXPERIENCE
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-28 items-center">

          <div data-aos className="lg:col-span-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Immersive Onboard Experience
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Advanced audio-visual and entertainment systems
              seamlessly integrated into yacht interiors —
              delivering cinema-grade performance without
              compromising marine design.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <TvIcon className="w-6 h-6 text-green-600" />
                Marine-grade displays & cinema systems
              </li>
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                Zoned audio & outdoor sound systems
              </li>
              <li className="flex gap-3">
                <BoltIcon className="w-6 h-6 text-green-600" />
                Power-efficient performance design
              </li>
              <li className="flex gap-3">
                <GlobeAltIcon className="w-6 h-6 text-green-600" />
                Global content & streaming integration
              </li>
            </ul>
          </div>

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/yachts/interior.jpg"
              alt="Yacht Interior AV Systems"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         COMMAND & NAVIGATION
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          {/* IMAGE 3 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/yachts/bridge.jpg"
              alt="Yacht Command and Control Bridge"
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-2xl"
            />
          </div>

          <div data-aos className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Command, Control & Confidence
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Integrated bridge, monitoring and automation systems
              give owners and crew total control — enhancing safety,
              navigation efficiency and operational confidence
              at sea.
            </p>
          </div>

        </div>
      </section>

      {/* ===============================
         CTA — PRECISION LUXURY
      =============================== */}
      <section className="bg-black py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Engineering the Future of Smart Yachting
          </h2>
          <p className="mt-6 text-gray-300">
            Deliver intelligent marine environments where
            precision engineering meets uncompromising luxury.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
