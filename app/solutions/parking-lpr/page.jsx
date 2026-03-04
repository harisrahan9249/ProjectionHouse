'use client';

import { useEffect } from 'react';
import {
  CameraIcon,
  TruckIcon,
  CpuChipIcon,
  SignalIcon,
  ChartBarSquareIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  ShoppingBagIcon,
  HomeModernIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ParkingLPRPage() {

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
              Smart Mobility & Access Technologies
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Parking Management &
              <span className="block text-green-600">
                LPR Systems
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and deploys intelligent parking
              management platforms using license plate recognition,
              automation and analytics to streamline access, maximize
              utilization and enhance security.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTIONS
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {[
            {
              icon: CameraIcon,
              title: 'License Plate Recognition (LPR)',
              text: 'AI-powered cameras delivering high-accuracy vehicle identification for seamless entry, exit and enforcement.',
              image: '/image/parking/lpr.jpg',
            },
            {
              icon: TruckIcon,
              title: 'Barrierless & Automated Access',
              text: 'Touchless entry/exit systems integrated with payment gateways and access rules.',
              image: '/image/parking/barrierless.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Centralized Parking Platforms',
              text: 'Unified dashboards for multi-site operations, occupancy tracking and revenue management.',
              image: '/image/parking/platform.jpg',
            },
            {
              icon: SignalIcon,
              title: 'Guidance & Wayfinding Systems',
              text: 'Digital signage and bay indicators to reduce congestion and improve driver experience.',
              image: '/image/parking/guidance.jpg',
            },
            {
              icon: ChartBarSquareIcon,
              title: 'Analytics & Optimization',
              text: 'AI-driven reports on dwell time, utilization, demand forecasting and enforcement.',
              image: '/image/parking/analytics.jpg',
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
         INDUSTRIES
      =============================== */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Ideal For
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShoppingBagIcon, label: 'Retail Malls' },
              { icon: BuildingOffice2Icon, label: 'Commercial Towers' },
              { icon: AcademicCapIcon, label: 'Universities & Campuses' },
              { icon: HomeModernIcon, label: 'Residential Communities' },
            ].map(item => (
              <div
                key={item.label}
                data-aos
                className="flex items-center gap-4 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
              >
                <item.icon className="w-8 h-8 text-green-600" />
                <p className="font-medium text-gray-900">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         SERVICES
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24">
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Parking Solutions
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House provides turnkey parking automation
              projects from consultancy through long-term operations.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Feasibility studies & system design
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Platform integration & payments
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation, testing & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                AMC, SLA & enforcement services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/parking/services.jpg"
              alt="Parking Services"
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
            Make Parking Seamless & Intelligent
          </h2>
          <p className="mt-6 text-green-100">
            Let Projection House help you deploy automated,
            data-driven parking systems across your portfolio.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
