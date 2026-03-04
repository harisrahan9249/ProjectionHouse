'use client';

import { useEffect } from 'react';
import {
  GlobeAltIcon,
  WifiIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  PresentationChartBarIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function NetworkDesignSolution() {

  /* ===============================
     AOS (CONSISTENT)
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
          transform: translateY(26px);
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
         HERO — STRATEGIC & CLEAN
      =============================== */}
      <section className="pt-44 pb-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Network Architecture & Connectivity
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Network
              <span className="block text-green-600">
                Design Solutions
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-700 leading-relaxed max-w-xl">
              Projection House designs robust, secure and scalable
              network architectures — enabling seamless connectivity
              across LAN, WAN, Wi-Fi and cloud environments.
            </p>
          </div>

          <div data-aos className="lg:col-span-6">
            <img
              src="/image/network-design/hero.jpg"
              alt="Network Design Architecture"
              className="w-full h-[460px] object-cover rounded-[2.5rem] shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         DESIGN PHILOSOPHY (NEW STYLE)
      =============================== */}
      <section className="bg-gray-50 py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-16">

          {[
            {
              icon: PresentationChartBarIcon,
              title: 'Performance Driven',
              text: 'Optimized network topologies designed for speed, reliability and low latency.',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Security by Design',
              text: 'Built-in network security, segmentation and compliance from day one.',
            },
            {
              icon: CpuChipIcon,
              title: 'Future Ready',
              text: 'Scalable architectures supporting growth, cloud and emerging technologies.',
            },
          ].map((item, index) => (
            <div
              key={index}
              data-aos
              className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-xl transition"
            >
              <item.icon className="w-12 h-12 text-green-600" />
              <h3 className="mt-8 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ===============================
         NETWORK SOLUTION SCOPE
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Comprehensive Network Design Scope
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our network design services cover the complete connectivity
              lifecycle — from assessment and planning to optimization
              and ongoing support.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <GlobeAltIcon className="w-6 h-6 text-green-600" />
                LAN & WAN network architecture
              </li>
              <li className="flex gap-3">
                <WifiIcon className="w-6 h-6 text-green-600" />
                Enterprise Wi-Fi & wireless design
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Network security & segmentation
              </li>
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Documentation, testing & validation
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/network-design/overview.jpg"
              alt="Enterprise Network Planning"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         WHO IT’S FOR
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Network Design Solutions For
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: UsersIcon, label: 'Corporate Enterprises' },
              { icon: CpuChipIcon, label: 'Data Centers' },
              { icon: GlobeAltIcon, label: 'Education & Healthcare' },
              { icon: ShieldCheckIcon, label: 'Government & Public Sector' },
            ].map((item, index) => (
              <div
                key={index}
                data-aos
                className="text-center p-10 rounded-2xl bg-white hover:shadow-lg transition"
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
         SERVICES
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <img
              src="/image/network-design/services.jpg"
              alt="Network Implementation Services"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Network Design Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              We deliver complete network solutions — from design
              and deployment to optimization and long-term support.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Network assessment & architecture design
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Deployment, configuration & integration
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Security hardening & optimization
              </li>
              <li className="flex gap-3">
                <UsersIcon className="w-6 h-6 text-green-600" />
                Managed services & support
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-green-600 py-36 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Design Networks That Power Your Business
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to build secure, scalable
            and future-ready network infrastructures.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
