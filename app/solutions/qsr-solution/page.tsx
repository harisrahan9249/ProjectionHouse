'use client';

import { useEffect } from 'react';
import {
  ShoppingBagIcon,
  TvIcon,
  DeviceTabletIcon,
  CpuChipIcon,
  WifiIcon,
  ChartBarIcon,
  ClockIcon,
  BuildingStorefrontIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function QSRsolution() {

  /* ===============================
     FAST RETAIL AOS
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
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
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
          transform: translateY(28px) scale(0.98);
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
         HERO — BOLD & RETAIL
      =============================== */}
      <section className="pt-44 pb-32 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          <div data-aos className="lg:col-span-7">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Quick Service Restaurant Technology
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              QSR
              <span className="block text-green-600">
                Solutions
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-700 leading-relaxed max-w-2xl">
              Projection House delivers end-to-end QSR technology solutions
              that accelerate ordering, enhance customer experience and
              optimize operations — designed for speed, scale and consistency.
            </p>
          </div>

          <div data-aos className="lg:col-span-5">
            <img
              src="/image/qsr/hero.jpg"
              alt="QSR Digital Solutions"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         WHY QSR NEEDS TECH
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-start">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Built for Speed, Accuracy & Scale
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              In high-volume QSR environments, every second matters.
              Our QSR solutions integrate digital displays, ordering
              systems, audio, networking and analytics — delivering
              faster service and consistent brand experiences.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• Faster order processing & reduced queues</li>
              <li>• Dynamic digital menu management</li>
              <li>• Centralized control across outlets</li>
              <li>• Data-driven operational insights</li>
            </ul>
          </div>

          <div data-aos className="grid grid-cols-2 gap-6">
            <img src="/image/qsr/detail1.jpg" className="rounded-xl h-40 object-cover" />
            <img src="/image/qsr/detail2.jpg" className="rounded-xl h-40 object-cover" />
            <img src="/image/qsr/detail3.jpg" className="rounded-xl h-40 object-cover" />
            <img src="/image/qsr/detail4.jpg" className="rounded-xl h-40 object-cover" />
          </div>

        </div>
      </section>

      {/* ===============================
         QSR SOLUTION STACK (PDF)
      =============================== */}
      <section className="bg-gray-50 py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Our QSR Technology Solutions
          </h2>

          <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {[
              {
                icon: TvIcon,
                title: 'Digital Menu Boards',
                text: 'High-brightness displays with centralized content management for menus and promotions.',
              },
              {
                icon: DeviceTabletIcon,
                title: 'Self-Ordering Kiosks',
                text: 'Touch-based kiosks that reduce queues and increase order accuracy.',
              },
              {
                icon: ShoppingBagIcon,
                title: 'Order Status & Pickup Displays',
                text: 'Real-time order tracking screens for customer transparency.',
              },
              {
                icon: CpuChipIcon,
                title: 'Centralized Control & CMS',
                text: 'Manage menus, pricing and content across multiple locations.',
              },
              {
                icon: WifiIcon,
                title: 'Network & Connectivity',
                text: 'Reliable wired and wireless infrastructure for uninterrupted operations.',
              },
              {
                icon: ChartBarIcon,
                title: 'Analytics & Performance',
                text: 'Sales insights, content performance and customer behavior analytics.',
              },
            ].map(item => (
              <div
                key={item.title}
                data-aos
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                <item.icon className="w-12 h-12 text-green-600" />
                <h3 className="mt-6 font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         QSR USE CASES
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Designed for Every QSR Format
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: BuildingStorefrontIcon, label: 'Quick Service Restaurants' },
              { icon: ClockIcon, label: 'High-Footfall Outlets' },
              { icon: ShoppingBagIcon, label: 'Food Courts & Malls' },
              { icon: TvIcon, label: 'Drive-Thru & Pickup Zones' },
            ].map(item => (
              <div
                key={item.label}
                data-aos
                className="text-center p-10 rounded-2xl bg-gray-50 hover:shadow-lg transition"
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
         SERVICES — ROLLOUT READY
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End QSR Deployment Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From pilot stores to nationwide rollouts, Projection House
              delivers standardized, scalable QSR technology deployments.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                QSR solution design & standardization
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation & rollout management
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Integration with POS & backend systems
              </li>
              <li className="flex gap-3">
                <ChartBarIcon className="w-6 h-6 text-green-600" />
                Monitoring, AMC & analytics support
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/qsr/services.jpg"
              alt="QSR Deployment Services"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         CTA — FAST & BOLD
      =============================== */}
      <section className="bg-green-600 py-36 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Build Faster, Smarter QSR Experiences
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to deploy scalable, high-performance
            QSR technology solutions across your outlets.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
