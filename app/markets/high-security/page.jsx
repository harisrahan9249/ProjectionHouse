'use client';

import { useEffect } from 'react';
import {
  ShieldCheckIcon,
  LockClosedIcon,
  CpuChipIcon,
  PresentationChartBarIcon,
  BuildingOffice2Icon,
  TvIcon,
  SpeakerWaveIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function HighSecurityFitOutsPage() {

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
              Secure Construction & Classified Environments
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              High-Security Fit-Outs
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House delivers specialist high-security
              interior fit-outs for government, defense,
              financial institutions and critical infrastructure —
              integrating accredited construction methods,
              physical security systems and hardened
              technology environments.
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
              icon: LockClosedIcon,
              title: 'SCIF & Classified Rooms',
              text: 'Shielded spaces, acoustic isolation, TEMPEST mitigation and controlled access environments.',
              image: '/image/markets/high-security/scif.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Security Operations Centers (SOC)',
              text: '24/7 monitoring facilities integrating cyber and physical security platforms.',
              image: '/image/markets/high-security/soc.jpg',
            },
            {
              icon: PresentationChartBarIcon,
              title: 'Vaults & Secure Archives',
              text: 'Hardened storage areas, digital evidence rooms and controlled document repositories.',
              image: '/image/markets/high-security/vault.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Secure IT & Data Rooms',
              text: 'Isolated networks, EMP-resistant designs and accredited server environments.',
              image: '/image/markets/high-security/data.jpg',
            },
            {
              icon: BuildingOffice2Icon,
              title: 'Controlled Access Interiors',
              text: 'Mantraps, biometric portals and zoned circulation layouts.',
              image: '/image/markets/high-security/access.jpg',
            },
            {
              icon: TvIcon,
              title: 'Briefing & Decision Suites',
              text: 'Secure AV environments for executive and operational command.',
              image: '/image/markets/high-security/briefing.jpg',
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
         DELIVERY MODEL
      =============================== */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Secure Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From threat modeling and accreditation
              planning through turnkey construction
              and lifecycle support, Projection House
              delivers compliant high-security facilities.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Risk assessment & security masterplanning
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Secure engineering & certifications
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Classified construction & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                AMC, audits & lifecycle services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/markets/high-security/services.jpg"
              alt="High Security Services"
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
            Build Accredited Secure Facilities
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to design and
            construct mission-critical environments
            that meet the highest security standards.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
