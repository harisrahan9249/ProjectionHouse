'use client';

import { useEffect } from 'react';
import {
  WifiIcon,
  SignalIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  ShoppingBagIcon,
  HomeModernIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function WirelessSolution() {

  /* ===============================
     ULTRA-SMOOTH TECH AOS
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
          transform: translateY(30px);
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
         HERO — INFRASTRUCTURE-FIRST
      =============================== */}
      <section className="pt-44 pb-36 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          <div data-aos className="lg:col-span-7">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Enterprise Connectivity Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Wireless
              <span className="block text-green-600">
                Solutions
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-700 leading-relaxed max-w-2xl">
              Projection House delivers robust, secure and scalable wireless
              infrastructure solutions that power modern workplaces,
              campuses, retail environments and smart buildings —
              enabling seamless connectivity everywhere.
            </p>
          </div>

          <div data-aos className="lg:col-span-5">
            <img
              src="/image/wireless/hero.jpg"
              alt="Enterprise Wireless Network"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         WHY WIRELESS MATTERS
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-start">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Wireless Is the Backbone of Digital Transformation
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From video conferencing and IoT devices to mobile collaboration
              and cloud applications, reliable wireless connectivity is
              mission-critical. Our wireless solutions are engineered
              to deliver performance, security and scalability.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• High-density user environments</li>
              <li>• Seamless roaming & coverage optimization</li>
              <li>• Secure access & network segmentation</li>
              <li>• Future-ready Wi-Fi standards</li>
            </ul>
          </div>

          <div data-aos className="grid grid-cols-2 gap-6">
            <img src="/image/wireless/detail1.jpg" className="rounded-xl h-40 object-cover" />
            <img src="/image/wireless/detail2.jpg" className="rounded-xl h-40 object-cover" />
            <img src="/image/wireless/detail3.jpg" className="rounded-xl h-40 object-cover" />
            <img src="/image/wireless/detail4.jpg" className="rounded-xl h-40 object-cover" />
          </div>

        </div>
      </section>

      {/* ===============================
         WIRELESS SOLUTION STACK (PDF)
      =============================== */}
      <section className="bg-gray-50 py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Our Wireless Solution Stack
          </h2>

          <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {[
              {
                icon: WifiIcon,
                title: 'Enterprise Wi-Fi Networks',
                text: 'High-performance Wi-Fi 6 / 6E wireless networks for offices, campuses and public spaces.',
              },
              {
                icon: SignalIcon,
                title: 'High-Density Coverage',
                text: 'Optimized wireless design for auditoriums, classrooms, malls and event spaces.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Secure Wireless Access',
                text: 'Enterprise-grade security, authentication and policy-based access control.',
              },
              {
                icon: CpuChipIcon,
                title: 'Wireless Network Management',
                text: 'Centralized monitoring, analytics and proactive network management.',
              },
              {
                icon: GlobeAltIcon,
                title: 'Outdoor & Campus Wireless',
                text: 'Long-range outdoor wireless connectivity for campuses and large facilities.',
              },
              {
                icon: ChartBarIcon,
                title: 'Analytics & Performance Optimization',
                text: 'Real-time insights, usage analytics and performance tuning.',
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
         INDUSTRIES & USE CASES
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Wireless Solutions For
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: BuildingOffice2Icon, label: 'Corporate & Enterprise' },
              { icon: AcademicCapIcon, label: 'Education & Campuses' },
              { icon: ShoppingBagIcon, label: 'Retail & Hospitality' },
              { icon: HomeModernIcon, label: 'Smart Buildings & Residences' },
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
         SERVICES — FULL LIFECYCLE
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Wireless Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              We provide complete wireless lifecycle services —
              from RF planning and design to deployment, optimization
              and ongoing support.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                RF site survey & wireless design
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation & commissioning
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Network tuning & optimization
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Security, AMC & managed services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/wireless/services.jpg"
              alt="Wireless Network Services"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         CTA — FUTURE READY
      =============================== */}
      <section className="bg-green-600 py-36 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Power Your Spaces with Seamless Wireless
          </h2>
          <p className="mt-6 text-green-100">
            Build secure, scalable and high-performance wireless
            networks with Projection House.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
