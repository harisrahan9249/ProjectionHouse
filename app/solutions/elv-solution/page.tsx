'use client';

import { useEffect } from 'react';
import {
  ShieldCheckIcon,
  CameraIcon,
  FingerPrintIcon,
  WifiIcon,
  ServerStackIcon,
  BoltIcon,
  BuildingOffice2Icon,
  HomeModernIcon,
  HeartIcon,
  AcademicCapIcon,
  ShoppingBagIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function ELVSolution() {

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
      { threshold: 0.18, rootMargin: '0px 0px -140px 0px' }
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
         HERO — ELV INFRASTRUCTURE
      =============================== */}
      <section className="pt-44 pb-40 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div data-aos>
            <p className="text-xs tracking-[0.4em] uppercase text-green-400 mb-4">
              Extra Low Voltage Systems
            </p>
            <h1 className="text-5xl font-semibold leading-tight">
              ELV
              <span className="block text-green-400">Solutions</span>
            </h1>
            <p className="mt-8 text-lg text-gray-300 leading-relaxed max-w-xl">
              Projection House delivers comprehensive ELV solutions covering
              security, networking, automation, and communication systems.
              From design to commissioning, we provide fully compliant,
              scalable and future-ready ELV infrastructures.
            </p>
          </div>

          <div data-aos>
            <img
              src="/image/elv/hero.jpg"
              alt="ELV Infrastructure Solutions"
              className="w-full h-[480px] object-cover rounded-3xl shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         CORE ELV SYSTEMS (FROM PDF)
      =============================== */}
      <section className="bg-black text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-center">
            Core ELV Systems We Deliver
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: CameraIcon,
                title: 'CCTV & Surveillance Systems',
                text: 'IP-based CCTV, video analytics, centralized monitoring, and secure recording solutions for commercial and critical environments.',
              },
              {
                icon: FingerPrintIcon,
                title: 'Access Control & Attendance',
                text: 'Biometric, card-based and ANPR access control systems integrated with attendance and visitor management platforms.',
              },
              {
                icon: WifiIcon,
                title: 'Structured Cabling & Networking',
                text: 'Data, voice and fiber cabling solutions designed to international standards for reliability and scalability.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Security & Gate Barrier Systems',
                text: 'Perimeter security, gate barriers, bollards and intrusion detection for controlled access facilities.',
              },
              {
                icon: ServerStackIcon,
                title: 'Data Centers & Network Rooms',
                text: 'Complete ELV infrastructure for server rooms including racks, power, cooling and structured cabling.',
              },
              {
                icon: BoltIcon,
                title: 'ELV System Integration',
                text: 'Unified integration of multiple ELV platforms into a centralized, manageable ecosystem.',
              },
            ].map(item => (
              <div
                key={item.title}
                data-aos
                className="bg-gray-900 p-10 rounded-2xl border border-white/10"
              >
                <item.icon className="w-10 h-10 text-green-400" />
                <h3 className="mt-6 text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         ELV SOLUTIONS FOR — INDUSTRY SPECIFIC
      =============================== */}
      <section className="bg-gray-100 py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div data-aos className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900">
              ELV Solutions For
            </h2>
            <p className="mt-6 text-gray-700">
              Industry-specific ELV infrastructures aligned with operational,
              security, and compliance requirements.
            </p>
          </div>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: BuildingOffice2Icon,
                title: 'Corporate & Commercial',
                text: 'Integrated ELV systems for offices, business parks and commercial towers.',
              },
              {
                icon: HomeModernIcon,
                title: 'Residential & Mixed-Use',
                text: 'Smart ELV infrastructure for villas, apartments and mixed-use developments.',
              },
              {
                icon: HeartIcon,
                title: 'Healthcare Facilities',
                text: 'ELV systems supporting patient safety, monitoring and compliance.',
              },
              {
                icon: AcademicCapIcon,
                title: 'Education Campuses',
                text: 'Campus-wide ELV networks for security, data and communication.',
              },
              {
                icon: ShoppingBagIcon,
                title: 'Retail & Hospitality',
                text: 'Security, networking and guest-facing ELV systems for retail and hotels.',
              },
              {
                icon: TruckIcon,
                title: 'Airports & Transport',
                text: 'Mission-critical ELV solutions for transport hubs and infrastructure.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Government & Defense',
                text: 'High-security ELV systems meeting regulatory and defense standards.',
              },
              {
                icon: ServerStackIcon,
                title: 'Industrial & Data Centers',
                text: 'Robust ELV infrastructure for industrial facilities and data centers.',
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
                <p className="mt-3 text-sm text-gray-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         SERVICES & COMPLIANCE (FROM PDF)
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End ELV Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our ELV services span the entire project lifecycle — ensuring
              quality, compliance, and long-term system performance.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                ELV design, drawings & approvals
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation, testing & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Compliance with local & international standards
              </li>
              <li className="flex gap-3">
                <ServerStackIcon className="w-6 h-6 text-green-600" />
                AMC, SLA & managed services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/elv/services.jpg"
              alt="ELV Services"
              className="rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-black py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Secure, Scalable ELV Infrastructure Starts Here
          </h2>
          <p className="mt-6 text-gray-400">
            Partner with Projection House for ELV solutions engineered
            to protect, connect and scale your operations.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
