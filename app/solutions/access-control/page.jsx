'use client';

import { useEffect } from 'react';
import {
  FingerPrintIcon,
  IdentificationIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  ClockIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function AccessControlBiometric() {

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
          transform: translateY(22px);
          transition:
            opacity 850ms cubic-bezier(0.19,1,0.22,1),
            transform 850ms cubic-bezier(0.19,1,0.22,1);
        }
        .aos-on {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===============================
         HERO — IDENTITY FLOW
      =============================== */}
      <section className="pt-44 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div data-aos className="max-w-3xl">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-5">
              Identity & Access Management
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900">
              Access Control &
              <span className="block text-green-600">
                Biometric Systems
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              Secure environments through intelligent identity verification —
              enabling seamless, controlled movement across people, spaces,
              and operations.
            </p>
          </div>

          <div
            data-aos
            className="mt-20 rounded-[2.5rem] overflow-hidden shadow-xl"
          >
            <img
              src="/image/access-control/hero.jpg"
              alt="Biometric Access Control"
              className="w-full h-[420px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         ACCESS FLOW (HORIZONTAL TIMELINE)
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            How Intelligent Access Works
          </h2>

          <div className="mt-20 grid lg:grid-cols-4 gap-12">

            {[
              {
                icon: IdentificationIcon,
                title: 'Identity Enrollment',
                text: 'Users are securely enrolled using biometric or credential-based identification.',
              },
              {
                icon: FingerPrintIcon,
                title: 'Authentication',
                text: 'Biometric or multi-factor authentication validates access in real time.',
              },
              {
                icon: CpuChipIcon,
                title: 'Decision Engine',
                text: 'Access rights are evaluated based on roles, zones, and schedules.',
              },
              {
                icon: ArrowRightIcon,
                title: 'Controlled Entry',
                text: 'Doors, gates, and turnstiles respond instantly and securely.',
              },
            ].map((step, index) => (
              <div
                key={index}
                data-aos
                className="relative bg-white p-10 rounded-2xl shadow-sm
                           hover:shadow-lg transition"
              >
                <step.icon className="w-10 h-10 text-green-600" />
                <h3 className="mt-6 font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-4 text-gray-600 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===============================
         TECHNOLOGIES (ICON GRID)
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Access Technologies We Integrate
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {[
              'Fingerprint & Palm Recognition',
              'Facial Recognition Systems',
              'RFID, Smart Cards & Mobile Access',
              'Turnstiles, Barriers & Smart Locks',
              'Visitor Management Systems',
              'Time Attendance Integration',
              'Multi-Site & Centralized Control',
              'Compliance & Audit Reporting',
            ].map((item, index) => (
              <div
                key={index}
                data-aos
                className="border border-gray-200 rounded-xl p-8
                           hover:border-green-600 transition"
              >
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                <p className="mt-4 text-gray-800 font-medium">
                  {item}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===============================
         WHO IT’S FOR (LIGHT BANDS)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Designed For
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

            {[
              { icon: BuildingOffice2Icon, label: 'Corporate Offices' },
              { icon: UserGroupIcon, label: 'Education & Campuses' },
              { icon: ShieldCheckIcon, label: 'Government Facilities' },
              { icon: ClockIcon, label: 'Healthcare & Laboratories' },
            ].map((item, index) => (
              <div
                key={index}
                data-aos
                className="flex items-center gap-6 bg-white
                           rounded-2xl p-8 shadow-sm hover:shadow-lg transition"
              >
                <item.icon className="w-10 h-10 text-green-600" />
                <p className="font-medium text-gray-900">
                  {item.label}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===============================
         CTA — MINIMAL
      =============================== */}
      <section className="bg-white py-32">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Redefine Secure Access with Intelligence
          </h2>
          <p className="mt-6 text-gray-600">
            Enable frictionless access, stronger security, and complete
            visibility with modern access control and biometric systems.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
