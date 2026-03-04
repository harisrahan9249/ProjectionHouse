'use client';

import { useEffect } from 'react';
import {
  ShieldCheckIcon,
  EyeIcon,
  LockClosedIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CybersecuritySOC() {

  /* ===============================
     AOS (SAME ENGINE)
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
         HERO — TRUST & CONTROL
      =============================== */}
      <section className="pt-44 pb-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Cybersecurity & Risk Management
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Cybersecurity &
              <span className="block text-green-600">
                SOC Integration
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-700 leading-relaxed max-w-xl">
              Projection House delivers enterprise-grade cybersecurity
              solutions with integrated Security Operations Centers (SOC)
              — enabling continuous threat detection, response and resilience.
            </p>
          </div>

          <div data-aos className="lg:col-span-6">
            <img
              src="/image/cybersecurity/hero.jpg"
              alt="Cybersecurity SOC Operations"
              className="w-full h-[460px] object-cover rounded-[2.75rem] shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         SECURITY REALITY (NEW STYLE)
      =============================== */}
      <section className="bg-gray-50 py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-16">

          {[
            {
              icon: ExclamationTriangleIcon,
              title: 'Rising Threat Landscape',
              text: 'Cyber threats are evolving rapidly, targeting networks, data and critical infrastructure.',
            },
            {
              icon: EyeIcon,
              title: 'Need for Visibility',
              text: 'Continuous monitoring and visibility are essential to detect and respond to threats early.',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Security by Design',
              text: 'Cybersecurity must be embedded into infrastructure, systems and operations.',
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
         SOC INTEGRATION SCOPE
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Cybersecurity & SOC Integration
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our cybersecurity solutions combine technology, processes
              and people — delivering continuous protection and
              operational security across your digital environment.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <EyeIcon className="w-6 h-6 text-green-600" />
                24/7 security monitoring & threat detection
              </li>
              <li className="flex gap-3">
                <LockClosedIcon className="w-6 h-6 text-green-600" />
                SIEM, SOC & log management integration
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Endpoint, network & cloud security
              </li>
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Compliance, policies & reporting
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/cybersecurity/overview.jpg"
              alt="SOC Monitoring Dashboard"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
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
            Cybersecurity Solutions For
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: UsersIcon, label: 'Enterprise Organizations' },
              { icon: GlobeAltIcon, label: 'Government & Public Sector' },
              { icon: CpuChipIcon, label: 'Critical Infrastructure' },
              { icon: ShieldCheckIcon, label: 'Regulated Industries' },
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
              src="/image/cybersecurity/services.jpg"
              alt="Cybersecurity Services"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Cybersecurity Services Lifecycle
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House provides comprehensive cybersecurity
              services — from assessment and design to SOC integration,
              monitoring and continuous improvement.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Security assessments & architecture design
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Implementation & SOC integration
              </li>
              <li className="flex gap-3">
                <EyeIcon className="w-6 h-6 text-green-600" />
                Continuous monitoring & incident response
              </li>
              <li className="flex gap-3">
                <UsersIcon className="w-6 h-6 text-green-600" />
                Managed security services & support
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
            Secure Your Digital Assets with Confidence
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House for integrated cybersecurity
            and SOC solutions that protect, detect and respond — 24/7.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
