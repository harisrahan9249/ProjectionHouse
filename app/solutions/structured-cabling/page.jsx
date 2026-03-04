'use client';

import { useEffect } from 'react';
import {
  GlobeAltIcon,
  CpuChipIcon,
  BoltIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function StructuredCablingSolution() {

  /* ===============================
     AOS (SAME SYSTEM)
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
         HERO — CLEAN & BRIGHT
      =============================== */}
      <section className="pt-44 pb-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          <div data-aos className="lg:col-span-7">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Network & Infrastructure Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Structured
              <span className="block text-green-600">
                Cabling Solutions
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-700 leading-relaxed max-w-2xl">
              Projection House delivers structured cabling solutions that
              form the backbone of reliable, scalable and high-performance
              IT networks — supporting today’s connectivity and tomorrow’s
              growth.
            </p>
          </div>

          <div data-aos className="lg:col-span-5">
            <img
              src="/image/structured-cabling/hero.jpg"
              alt="Structured Cabling Infrastructure"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         OVERVIEW
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <img
              src="/image/structured-cabling/overview.jpg"
              alt="Network Cabling System"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              The Foundation of Every Reliable Network
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              A well-designed structured cabling system ensures consistent
              performance, simplified management and long-term flexibility.
              Our solutions support voice, data, video and security systems
              across diverse environments.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• Copper & fiber cabling systems</li>
              <li>• Standards-compliant network design</li>
              <li>• High bandwidth & low latency performance</li>
              <li>• Scalable and future-ready infrastructure</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===============================
         CABLING TECHNOLOGY STACK
      =============================== */}
      <section className="bg-gray-50 py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Structured Cabling Technologies
          </h2>

          <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {[
              {
                icon: CpuChipIcon,
                title: 'Copper Cabling (Cat 6 / 6A)',
                text: 'High-performance copper cabling for enterprise LAN environments.',
              },
              {
                icon: GlobeAltIcon,
                title: 'Fiber Optic Cabling',
                text: 'Single-mode and multi-mode fiber for backbone and high-speed networks.',
              },
              {
                icon: BoltIcon,
                title: 'Data Center Cabling',
                text: 'Structured cabling designed for server rooms and data centers.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Testing & Certification',
                text: 'Comprehensive testing to ensure compliance and performance.',
              },
              {
                icon: ClipboardDocumentCheckIcon,
                title: 'Labeling & Documentation',
                text: 'Clear labeling and as-built documentation for easy management.',
              },
              {
                icon: WrenchScrewdriverIcon,
                title: 'Moves, Adds & Changes',
                text: 'Flexible solutions supporting future expansion and upgrades.',
              },
            ].map((item, index) => (
              <div
                key={index}
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
         WHO IT’S FOR
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Structured Cabling Solutions For
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: UsersIcon, label: 'Corporate Offices' },
              { icon: CpuChipIcon, label: 'Data Centers & Server Rooms' },
              { icon: GlobeAltIcon, label: 'Education & Healthcare' },
              { icon: ShieldCheckIcon, label: 'Government & Public Sector' },
            ].map((item, index) => (
              <div
                key={index}
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
         SERVICES
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Structured Cabling Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From initial assessment to final certification, Projection
              House delivers complete structured cabling services —
              ensuring reliability, compliance and long-term value.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Network assessment & cabling design
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation & termination
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Testing, certification & handover
              </li>
              <li className="flex gap-3">
                <UsersIcon className="w-6 h-6 text-green-600" />
                Maintenance, upgrades & AMC
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/structured-cabling/services.jpg"
              alt="Structured Cabling Services"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
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
            Build a Network You Can Rely On
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House for structured cabling solutions
            that deliver performance, scalability and long-term reliability.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
