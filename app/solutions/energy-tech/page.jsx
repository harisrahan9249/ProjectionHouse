'use client';

import { useEffect } from 'react';
import {
  BoltIcon,
  ChartBarSquareIcon,
  CpuChipIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  ShoppingBagIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  SunIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function EnergyTechPage() {

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
              Intelligent Energy & Green Infrastructure
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Energy Optimization &
              <span className="block text-green-600">
                Sustainability Tech
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House delivers advanced energy management
              platforms and sustainability technologies that reduce
              consumption, lower emissions and help organizations
              meet ESG and carbon-neutrality targets.
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
              icon: ChartBarSquareIcon,
              title: 'Energy Monitoring & Analytics',
              text: 'Real-time dashboards tracking consumption, peak loads and inefficiencies.',
              image: '/image/energy/monitoring.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'AI-Driven Optimization Engines',
              text: 'Predictive algorithms automatically tuning HVAC, lighting and equipment.',
              image: '/image/energy/ai.jpg',
            },
            {
              icon: SunIcon,
              title: 'Renewable Energy Integration',
              text: 'Solar PV systems, microgrids and battery storage integration.',
              image: '/image/energy/renewable.jpg',
            },
            {
              icon: BoltIcon,
              title: 'Demand Response & Load Management',
              text: 'Automated peak shaving and grid interaction platforms.',
              image: '/image/energy/demand.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Carbon Reporting & ESG Compliance',
              text: 'Sustainability dashboards, certification support and regulatory reporting.',
              image: '/image/energy/esg.jpg',
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
            Sustainability Solutions For
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BuildingOffice2Icon, label: 'Commercial Campuses' },
              { icon: ShoppingBagIcon, label: 'Retail Estates' },
              { icon: AcademicCapIcon, label: 'Universities' },
              { icon: GlobeAltIcon, label: 'Smart Cities' },
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
              End-to-End Energy Programs
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House manages sustainability initiatives
              from energy audits and system design through
              commissioning and long-term optimization.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Energy audits & carbon roadmaps
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Platform engineering & renewable integration
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Continuous optimization & ESG reporting
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/energy/services.jpg"
              alt="Energy Services"
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
            Power a Sustainable Future
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to deploy intelligent
            energy optimization and sustainability platforms.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
