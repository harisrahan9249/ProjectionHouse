'use client';

import { useEffect } from 'react';
import {
  CpuChipIcon,
  BuildingOffice2Icon,
  BoltIcon,
  ShieldCheckIcon,
  SignalIcon,
  ChartBarSquareIcon,
  AcademicCapIcon,
  HomeModernIcon,
  ShoppingBagIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function BMSPage() {

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
              Intelligent Building Management Platforms
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              BMS &
              <span className="block text-green-600">
                IBMS Solutions
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and deploys integrated
              Building Management Systems that centralize HVAC,
              lighting, power, safety and analytics into a single
              intelligent operational platform.
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
              icon: CpuChipIcon,
              title: 'Integrated Building Platforms',
              text: 'Unified dashboards connecting HVAC, lighting, metering, security and life-safety systems.',
              image: '/image/bms/platform.jpg',
            },
            {
              icon: BoltIcon,
              title: 'Energy Monitoring & Optimization',
              text: 'Real-time energy dashboards, peak demand management and carbon tracking.',
              image: '/image/bms/energy.jpg',
            },
            {
              icon: SignalIcon,
              title: 'Smart Sensors & IoT Networks',
              text: 'Environmental sensors, occupancy tracking and predictive automation systems.',
              image: '/image/bms/iot.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Safety & Compliance Integration',
              text: 'Fire alarms, evacuation systems and regulatory reporting dashboards.',
              image: '/image/bms/safety.jpg',
            },
            {
              icon: ChartBarSquareIcon,
              title: 'Analytics & Predictive Maintenance',
              text: 'AI-driven fault detection and asset lifecycle optimization.',
              image: '/image/bms/analytics.jpg',
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
              { icon: BuildingOffice2Icon, label: 'Commercial Towers' },
              { icon: AcademicCapIcon, label: 'Education Campuses' },
              { icon: ShoppingBagIcon, label: 'Retail Malls' },
              { icon: HomeModernIcon, label: 'Mixed-Use Developments' },
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
              End-to-End BMS Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House provides turnkey building automation
              projects from consultancy to commissioning and
              long-term managed services.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Consultancy, audits & compliance
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Controls engineering & integration
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation, testing & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                AMC, SLA & remote monitoring
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/bms/services.jpg"
              alt="BMS Services"
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
            Transform Buildings Into Smart Assets
          </h2>
          <p className="mt-6 text-green-100">
            Let Projection House help you deploy secure,
            scalable and data-driven building platforms.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
