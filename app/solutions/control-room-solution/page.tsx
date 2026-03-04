'use client';

import { useEffect } from 'react';
import {
  EyeIcon,
  Squares2X2Icon,
  ChartBarIcon,
  ShieldCheckIcon,
  ServerStackIcon,
  CpuChipIcon,
  BuildingOffice2Icon,
  TruckIcon,
  BoltIcon,
  GlobeAltIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ControlRoomSolution() {

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
      { threshold: 0.2, rootMargin: '0px 0px -120px 0px' }
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
          transform: translateY(40px);
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
         HERO — LARGE & CORPORATE
      =============================== */}
      <section className="pt-48 pb-44 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          <div data-aos className="max-w-4xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Mission-Critical Monitoring Environments
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Control Room
              <span className="block text-green-600">
                Solutions
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-700 leading-relaxed">
              Projection House delivers state-of-the-art Control Room Solutions
              that combine video wall technology, real-time data visualization,
              ergonomic design, and secure infrastructure to support
              mission-critical operations and decision-making.
            </p>
          </div>

          <div data-aos>
            <img
              src="/image/controlroom/hero.jpg"
              alt="Control Room Solutions"
              className="w-full h-[650px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         WHAT IS A CONTROL ROOM (PDF CONTEXT)
      =============================== */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-28 items-center">
          <div data-aos>
            <img
              src="/image/controlroom/overview.jpg"
              alt="Control Room Overview"
              className="w-full h-[560px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div data-aos className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-900">
              Intelligent Command & Monitoring Centers
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Control rooms are the operational heart of critical facilities.
              Our solutions enable centralized monitoring of video feeds,
              security systems, building management systems, and operational
              data through high-resolution video walls and unified platforms.
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Designed for continuous 24/7 operation, Projection House control
              rooms focus on reliability, operator comfort, and scalability —
              ensuring clarity, speed, and confidence during critical events.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         CORE CONTROL ROOM SOLUTIONS (PDF)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Core Control Room Solutions
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Squares2X2Icon,
                title: 'Video Wall & Display Systems',
                text: 'Large-format LED & LCD video walls delivering real-time visibility with high brightness, clarity and redundancy.',
              },
              {
                icon: EyeIcon,
                title: 'Centralized Monitoring',
                text: 'Live monitoring of CCTV, traffic systems, utilities, BMS, SCADA and operational platforms.',
              },
              {
                icon: ChartBarIcon,
                title: 'Data Visualization Platforms',
                text: 'Custom dashboards combining multiple data sources into a single operational view.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Security Operations Centers',
                text: 'Integrated SOC environments combining surveillance, access control and alerts.',
              },
              {
                icon: ServerStackIcon,
                title: 'Redundant Infrastructure',
                text: 'High-availability servers, network redundancy and fail-safe system architecture.',
              },
              {
                icon: CpuChipIcon,
                title: 'Unified Control Systems',
                text: 'Centralized control of AV, ELV, lighting and operational technologies.',
              },
            ].map(item => (
              <div
                key={item.title}
                data-aos
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                <item.icon className="w-12 h-12 text-green-600" />
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         INDUSTRIES & APPLICATIONS (PDF)
      =============================== */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Control Room Solutions For
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: ShieldCheckIcon, label: 'Government & Defense' },
              { icon: BuildingOffice2Icon, label: 'Corporate SOC & NOC' },
              { icon: TruckIcon, label: 'Transportation & Airports' },
              { icon: BoltIcon, label: 'Utilities & Energy' },
              { icon: GlobeAltIcon, label: 'Smart Cities' },
              { icon: ServerStackIcon, label: 'Data Centers' },
              { icon: EyeIcon, label: 'Security Command Centers' },
              { icon: ChartBarIcon, label: 'Monitoring & Operations Centers' },
            ].map(item => (
              <div
                key={item.label}
                data-aos
                className="text-center p-10 rounded-2xl bg-gray-50 shadow-sm hover:shadow-lg transition"
              >
                <item.icon className="w-14 h-14 mx-auto text-green-600" />
                <p className="mt-6 font-medium text-gray-900">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         END-TO-END SERVICES (PDF)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Control Room Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House delivers complete turnkey control room projects
              — from concept and visualization to implementation, testing and
              long-term support.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Control room design, drawings & approvals
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Supply, installation & commissioning
              </li>
              <li className="flex gap-3">
                <ServerStackIcon className="w-6 h-6 text-green-600" />
                System integration & redundancy planning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                AMC, SLA & managed support services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/controlroom/services.jpg"
              alt="Control Room Services"
              className="w-full h-[520px] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-green-600 py-36 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Design a Control Room That Delivers Clarity & Confidence
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House for control room solutions
            engineered for reliability, performance and long-term growth.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
