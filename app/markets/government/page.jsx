'use client';

import { useEffect } from 'react';
import {
  BuildingLibraryIcon,
  TvIcon,
  SpeakerWaveIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  PresentationChartBarIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function GovernmentPage() {

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
              Civic Infrastructure & Digital Government
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Government & Public Offices
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House partners with ministries,
              municipalities and public agencies to design
              and deliver secure, connected and future-ready
              government environments — from council chambers
              and command centers to smart-city platforms.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTIONS FOR GOVERNMENT
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {[
            {
              icon: TvIcon,
              title: 'Council Chambers & Conference Suites',
              text: 'Debate halls, meeting rooms and hybrid collaboration environments.',
              image: '/image/markets/government/chambers.jpg',
            },
            {
              icon: SpeakerWaveIcon,
              title: 'Auditoriums & Public Engagement Spaces',
              text: 'Speech reinforcement, interpretation systems and civic forums.',
              image: '/image/markets/government/auditorium.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Security Operations & Crisis Centers',
              text: 'Command rooms, surveillance integration and emergency response hubs.',
              image: '/image/markets/government/command.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Digital Government Infrastructure',
              text: 'Secure networks, data centers and hybrid cloud platforms.',
              image: '/image/markets/government/infrastructure.jpg',
            },
            {
              icon: PresentationChartBarIcon,
              title: 'Public Information & Smart City Platforms',
              text: 'Wayfinding, dashboards and urban intelligence systems.',
              image: '/image/markets/government/smart-city.jpg',
            },
            {
              icon: GlobeAltIcon,
              title: 'Citizen Experience Centers',
              text: 'Service halls, digital kiosks and e-government portals.',
              image: '/image/markets/government/citizen.jpg',
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
              End-to-End Public Sector Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From feasibility and stakeholder workshops
              to commissioning and long-term support,
              Projection House delivers compliant,
              secure government environments.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Digital strategy & civic masterplanning
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Engineering, BIM & approvals
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Turnkey implementation & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Training, AMC & managed services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/markets/government/services.jpg"
              alt="Government Services"
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
            Build the Digital Government of Tomorrow
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to deliver secure,
            citizen-focused and technology-driven public facilities.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
