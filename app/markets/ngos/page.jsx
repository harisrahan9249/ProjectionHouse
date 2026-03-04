'use client';

import { useEffect } from 'react';
import {
  GlobeAltIcon,
  TvIcon,
  SpeakerWaveIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  PresentationChartBarIcon,
  BuildingOffice2Icon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NGOsPage() {

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
              Humanitarian & Development Organizations
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              NGOs
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House supports non-governmental
              organizations with secure, resilient and
              scalable technology environments — from
              headquarters and training facilities to
              remote field operations and emergency
              response centers.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTIONS FOR NGOs
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {[
            {
              icon: BuildingOffice2Icon,
              title: 'Headquarters & Regional Offices',
              text: 'Collaboration suites, boardrooms and hybrid working environments.',
              image: '/image/markets/ngos/offices.jpg',
            },
            {
              icon: GlobeAltIcon,
              title: 'Remote Operations & Field Connectivity',
              text: 'Satellite links, ruggedized networks and mobile command units.',
              image: '/image/markets/ngos/field.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Security & Monitoring Centers',
              text: 'Crisis rooms, surveillance platforms and emergency communications.',
              image: '/image/markets/ngos/security.jpg',
            },
            {
              icon: TvIcon,
              title: 'Awareness & Fundraising Spaces',
              text: 'Digital signage, experience centers and donor engagement facilities.',
              image: '/image/markets/ngos/experience.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'IT Infrastructure & Data Platforms',
              text: 'Secure networks, cloud connectivity and analytics platforms.',
              image: '/image/markets/ngos/it.jpg',
            },
            {
              icon: PresentationChartBarIcon,
              title: 'Program Analytics & Reporting',
              text: 'Dashboards, GIS visualization and impact-tracking systems.',
              image: '/image/markets/ngos/analytics.jpg',
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
              End-to-End NGO Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House works alongside NGOs to
              design, deploy and maintain resilient
              technology platforms for mission-critical
              operations across multiple regions.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Needs assessment & operational planning
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Secure systems architecture & approvals
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Deployment, commissioning & training
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                AMC, monitoring & lifecycle support
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/markets/ngos/services.jpg"
              alt="NGO Services"
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
            Power Your Mission With Technology
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to deliver secure,
            connected and resilient systems for humanitarian
            and development programs.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
