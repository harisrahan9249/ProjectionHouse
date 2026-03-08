'use client';

import { useEffect } from 'react';
import {
  ShieldCheckIcon,
  CpuChipIcon,
  PresentationChartBarIcon,
  TvIcon,
  SpeakerWaveIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function PoliceLawEnforcementPage() {

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
              Public Safety & Emergency Response Systems
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Police & Law Enforcement
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and delivers advanced
              policing environments — integrating command
              centers, surveillance platforms, forensic labs,
              secure networks and smart-city systems to help
              agencies respond faster, operate smarter and
              protect communities.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTIONS FOR POLICE
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {[
            {
              icon: PresentationChartBarIcon,
              title: 'Command & Control Centers',
              text: 'Real-time operations rooms integrating CCTV analytics, GIS and emergency dispatch systems.',
              image: '/image/markets/police/command.jpg',
            },
            {
              icon: TvIcon,
              title: 'Surveillance & Video Analytics',
              text: 'Citywide camera networks, ANPR/LPR systems and AI-driven monitoring platforms.',
              image: '/image/markets/police/surveillance.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Secure Evidence & Data Rooms',
              text: 'Digitally protected archives, chain-of-custody systems and accredited facilities.',
              image: '/image/markets/police/evidence.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Mission-Critical IT Infrastructure',
              text: 'Resilient networks, SOC integration and cyber-secure platforms.',
              image: '/image/markets/police/it.jpg',
            },
            {
              icon: SpeakerWaveIcon,
              title: 'Briefing Rooms & Training Facilities',
              text: 'Simulation spaces, AV-enabled classrooms and tactical rehearsal suites.',
              image: '/image/markets/police/training.jpg',
            },
            {
              icon: GlobeAltIcon,
              title: 'Smart Policing Platforms',
              text: 'Integrated city dashboards, predictive analytics and mobile command units.',
              image: '/image/markets/police/smart.jpg',
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
              End-to-End Policing Infrastructure Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House supports law-enforcement
              agencies from strategy through turnkey
              deployment and long-term managed services
              for mission-critical environments.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Operational assessments & masterplanning
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Secure systems engineering & approvals
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Turnkey delivery & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                AMC, SOC integration & lifecycle services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/markets/police/services.jpg"
              alt="Police Services"
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
            Empower Smarter Policing Operations
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to build secure,
            data-driven law-enforcement environments.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
