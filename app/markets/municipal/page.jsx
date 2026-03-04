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
  BuildingOffice2Icon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function MunicipalFacilitiesPage() {

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
              Smart City & Civic Infrastructure
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Municipal Facilities
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House partners with municipalities
              and local authorities to design and deliver
              connected, secure and citizen-centric
              facilities — from town halls and service
              centers to smart-city operations hubs and
              utilities infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTIONS FOR MUNICIPALITIES
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {[
            {
              icon: BuildingLibraryIcon,
              title: 'Town Halls & Civic Buildings',
              text: 'Council chambers, meeting rooms and public-facing AV environments.',
              image: '/image/markets/municipal/townhall.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'City Operations & Control Centers',
              text: 'Integrated command rooms, CCTV analytics and emergency coordination platforms.',
              image: '/image/markets/municipal/operations.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Municipal IT & Networks',
              text: 'Secure fiber networks, data centers and hybrid cloud infrastructure.',
              image: '/image/markets/municipal/it.jpg',
            },
            {
              icon: PresentationChartBarIcon,
              title: 'Urban Dashboards & Smart City Platforms',
              text: 'Real-time monitoring for traffic, utilities, waste and environmental systems.',
              image: '/image/markets/municipal/smart-city.jpg',
            },
            {
              icon: TvIcon,
              title: 'Citizen Service Centers',
              text: 'Digital kiosks, queue management and information displays.',
              image: '/image/markets/municipal/citizen.jpg',
            },
            {
              icon: GlobeAltIcon,
              title: 'Utilities & Infrastructure Monitoring',
              text: 'SCADA visualization, asset tracking and field connectivity systems.',
              image: '/image/markets/municipal/utilities.jpg',
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
              End-to-End Municipal Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House supports municipalities
              through planning, deployment and long-term
              managed services for critical civic
              infrastructure.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Smart city consulting & feasibility studies
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Engineering, BIM & regulatory approvals
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Turnkey implementation & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                AMC, monitoring & lifecycle services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/markets/municipal/services.jpg"
              alt="Municipal Services"
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
            Build Smarter Cities & Civic Services
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to deploy
            technology-driven municipal facilities
            that improve urban life.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
