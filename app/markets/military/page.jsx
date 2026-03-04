'use client';

import { useEffect } from 'react';
import {
  ShieldCheckIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  PresentationChartBarIcon,
  TvIcon,
  SpeakerWaveIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function MilitaryDefensePage() {

  /* ===============================
     ULTRA-SMOOTH AOS
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
          transform: translateY(32px);
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
         HERO
      =============================== */}
      <section className="pt-44 pb-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div data-aos className="max-w-4xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Defense Infrastructure & Mission-Critical Systems
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Military / Defense
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and delivers secure,
              mission-critical technology environments for
              defense organizations — integrating command
              centers, simulation facilities, classified
              spaces, resilient IT infrastructure and
              smart-base systems for operational readiness.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTIONS FOR DEFENSE
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {[
            {
              icon: PresentationChartBarIcon,
              title: 'Command, Control & Operations Centers',
              text: '24/7 decision rooms integrating situational awareness platforms and secure communications.',
              image: '/image/markets/military/command.jpg',
            },
            {
              icon: CubeTransparentIcon,
              title: 'Simulation & Training Facilities',
              text: 'High-fidelity simulators, AR/VR labs and mission rehearsal environments.',
              image: '/image/markets/military/simulation.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Secure & Classified Spaces',
              text: 'Accredited rooms, TEMPEST-ready environments and hardened construction.',
              image: '/image/markets/military/secure.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Resilient IT & Communications Infrastructure',
              text: 'Redundant networks, private clouds and battlefield-grade connectivity.',
              image: '/image/markets/military/it.jpg',
            },
            {
              icon: TvIcon,
              title: 'Visualization & Briefing Theatres',
              text: 'Large-scale displays, war rooms and executive briefing suites.',
              image: '/image/markets/military/briefing.jpg',
            },
            {
              icon: GlobeAltIcon,
              title: 'Smart Bases & Perimeter Monitoring',
              text: 'IoT sensors, access control, LPR and integrated security platforms.',
              image: '/image/markets/military/base.jpg',
            },
          ].map((item, index) => (
            <div
              key={item.title}
              data-aos
              className={`grid lg:grid-cols-2 gap-20 items-center ${
                index % 2 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 ? 'lg:col-start-2' : ''}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[320px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="max-w-xl">
                <item.icon className="w-10 h-10 text-green-600" />
                <h3 className="mt-5 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ===============================
         DELIVERY MODEL
      =============================== */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Defense Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House supports defense organizations
              from early-stage planning through turnkey
              delivery and lifecycle support of secure,
              mission-critical environments.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Operational analysis & secure masterplanning
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Systems engineering & accreditation
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Classified construction & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                AMC, cyber monitoring & managed services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/markets/military/services.jpg"
              alt="Defense Services"
              className="w-full h-[360px] object-cover rounded-2xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-green-600 py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Build Secure, Mission-Ready Environments
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to deliver
            next-generation defense infrastructure.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
