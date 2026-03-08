'use client';

import { useEffect } from 'react';
import {
  TicketIcon,
  UsersIcon,
  CpuChipIcon,
  SignalIcon,
  ChartBarSquareIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  AcademicCapIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function SmartTicketingPage() {

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
              Intelligent Access & Flow Optimization
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Smart Ticketing &
              <span className="block text-green-600">
                Crowd Management
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House delivers digital ticketing
              platforms and crowd intelligence systems that
              enhance visitor experience, improve safety
              and optimize throughput at high-traffic venues.
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
              icon: TicketIcon,
              title: 'Digital & Contactless Ticketing',
              text: 'Mobile tickets, QR codes, NFC and biometric validation systems.',
              image: '/image/ticketing/digital.jpg',
            },
            {
              icon: UsersIcon,
              title: 'Real-Time Crowd Monitoring',
              text: 'AI-powered cameras and sensors to track density, flow and anomalies.',
              image: '/image/ticketing/crowd.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Integrated Access Control',
              text: 'Turnstiles, gates and barrier systems synchronized with ticketing engines.',
              image: '/image/ticketing/access.jpg',
            },
            {
              icon: SignalIcon,
              title: 'Queue Management & Wayfinding',
              text: 'Dynamic signage, alerts and routing for smooth visitor journeys.',
              image: '/image/ticketing/queue.jpg',
            },
            {
              icon: ChartBarSquareIcon,
              title: 'Analytics & Operational Dashboards',
              text: 'Event performance reporting, dwell analysis and demand forecasting.',
              image: '/image/ticketing/analytics.jpg',
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
              { icon: GlobeAltIcon, label: 'Transport Hubs' },
              { icon: ShoppingBagIcon, label: 'Retail Malls' },
              { icon: AcademicCapIcon, label: 'Campuses & Attractions' },
              { icon: BuildingOffice2Icon, label: 'Stadiums & Arenas' },
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
              End-to-End Deployment
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House provides turnkey crowd
              management programs from design to
              operations and analytics.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Journey mapping & system architecture
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Platform integration & ticketing engines
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Hardware installation & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                SOC monitoring, AMC & lifecycle services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/ticketing/services.jpg"
              alt="Ticketing Services"
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
            Manage Crowds With Confidence
          </h2>
          <p className="mt-6 text-green-100">
            Let Projection House design intelligent
            ticketing and flow systems for your venues.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
