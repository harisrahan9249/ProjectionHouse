'use client';

import { useEffect } from 'react';
import {
  CpuChipIcon,
  ChartBarSquareIcon,
  EyeIcon,
  SignalIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  ShoppingBagIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function AIAnalyticsPage() {

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
              Intelligent Data Platforms & Automation
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              AI &
              <span className="block text-green-600">
                Analytics
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House delivers advanced AI-driven
              analytics platforms that transform video,
              operational and sensor data into actionable
              intelligence for smarter decision-making.
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
              icon: EyeIcon,
              title: 'Computer Vision & Video Analytics',
              text: 'Object detection, behavior analysis, facial recognition and situational awareness.',
              image: '/image/ai/video.jpg',
            },
            {
              icon: ChartBarSquareIcon,
              title: 'Business Intelligence Dashboards',
              text: 'Real-time KPI visualization, operational reporting and predictive insights.',
              image: '/image/ai/dashboard.jpg',
            },
            {
              icon: SignalIcon,
              title: 'IoT Data Analytics',
              text: 'Processing sensor streams from buildings, infrastructure and retail environments.',
              image: '/image/ai/iot.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Edge AI & On-Prem Processing',
              text: 'Low-latency analytics deployed securely at the edge or in private clouds.',
              image: '/image/ai/edge.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'AI Governance & Cybersecurity',
              text: 'Model governance, compliance frameworks and secure AI pipelines.',
              image: '/image/ai/security.jpg',
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
            AI Solutions For
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BuildingOffice2Icon, label: 'Smart Cities & Utilities' },
              { icon: ShoppingBagIcon, label: 'Retail Analytics' },
              { icon: GlobeAltIcon, label: 'Transport Networks' },
              { icon: AcademicCapIcon, label: 'Education & Research' },
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
              End-to-End AI Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House manages AI programs from
              data strategy through deployment and
              lifecycle optimization.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Use-case discovery & feasibility studies
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Model training & system architecture
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Deployment, integration & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Governance, monitoring & support
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/ai/services.jpg"
              alt="AI Services"
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
            Turn Data Into Decisive Advantage
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to deploy trusted,
            enterprise-grade AI and analytics platforms.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
