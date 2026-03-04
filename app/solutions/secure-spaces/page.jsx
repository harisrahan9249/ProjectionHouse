'use client';

import { useEffect } from 'react';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  RectangleGroupIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SecureSpacesPage() {

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
              High-Security Construction & Mission-Critical Facilities
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Secure &
              <span className="block text-green-600">
                Classified Spaces
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and constructs secure,
              compliant and resilient facilities for government,
              defense, intelligence and critical infrastructure
              operations.
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
              icon: ShieldCheckIcon,
              title: 'SCIF & High-Security Room Construction',
              text: 'Shielded enclosures, controlled access zones and hardened structures for classified operations.',
              image: '/image/secure/scif.jpg',
            },
            {
              icon: LockClosedIcon,
              title: 'Physical & Electronic Security Layers',
              text: 'Blast-resistant walls, secure doors, biometric access and intrusion detection.',
              image: '/image/secure/security-layers.jpg',
            },
            {
              icon: RectangleGroupIcon,
              title: 'EMP & RF Shielding',
              text: 'Faraday cages, RF attenuation and electromagnetic protection for sensitive systems.',
              image: '/image/secure/emp.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Integrated Technology Infrastructure',
              text: 'AV, IT, surveillance and BMS coordinated within secure architectural environments.',
              image: '/image/secure/infrastructure.jpg',
            },
            {
              icon: ExclamationTriangleIcon,
              title: 'Redundancy & Crisis Resilience',
              text: 'Dual power feeds, UPS systems, fire suppression and disaster-ready designs.',
              image: '/image/secure/resilience.jpg',
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
            Secure Facilities For
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: GlobeAltIcon, label: 'Defense & Intelligence' },
              { icon: BuildingOffice2Icon, label: 'Government Agencies' },
              { icon: AcademicCapIcon, label: 'Research Institutions' },
              { icon: ShieldCheckIcon, label: 'Critical Infrastructure' },
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
              End-to-End Secure Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House manages secure construction
              programs from classified design coordination
              through commissioning and lifecycle support.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Risk assessments & regulatory approvals
              </li>
              <li className="flex gap-3">
                <RectangleGroupIcon className="w-6 h-6 text-green-600" />
                Hardened construction & shielding
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation, testing & certification
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                AMC, SLA & managed operations
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/secure/services.jpg"
              alt="Secure Construction Services"
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
            Build Facilities Where Security Is Paramount
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to deliver compliant,
            hardened and future-ready secure environments.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
