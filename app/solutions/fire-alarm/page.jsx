'use client';

import { useEffect } from 'react';
import {
  FireIcon,
  BellAlertIcon,
  ShieldCheckIcon,
  HeartIcon,
  BuildingOffice2Icon,
  ClockIcon,
  CpuChipIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function FireAlarmLifeSafety() {

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
          transform: translateY(18px);
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
         HERO — LIFE SAFETY FIRST
      =============================== */}
      <section className="pt-44 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-5">
              Life Safety & Compliance Systems
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900">
              Fire Alarm &
              <span className="block text-red-600">
                Life Safety
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
              Protect lives, assets and operations with intelligent fire
              detection, alarm and life safety systems — designed to
              respond instantly and guide people safely.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/fire-alarm/hero.jpg"
              alt="Fire Alarm Life Safety System"
              className="w-full h-[440px] object-cover rounded-[3rem] shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         SAFETY PHILOSOPHY (VERTICAL)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Designed Around Human Safety
          </h2>

          <div className="mt-20 space-y-10">

            {[
              {
                icon: FireIcon,
                title: 'Early Fire Detection',
                text: 'Rapid identification of smoke, heat or fire conditions to initiate immediate response.',
              },
              {
                icon: BellAlertIcon,
                title: 'Clear Alarm & Notification',
                text: 'Audible and visual alerts guide occupants calmly and clearly during emergencies.',
              },
              {
                icon: HeartIcon,
                title: 'Safe Evacuation',
                text: 'Systems support orderly evacuation and life safety procedures.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Code Compliance',
                text: 'Designed and implemented in accordance with civil defense and international standards.',
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos
                className="flex gap-8 bg-white p-10 rounded-2xl
                           shadow-sm hover:shadow-lg transition"
              >
                <item.icon className="w-10 h-10 text-red-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===============================
         SYSTEMS & TECHNOLOGY
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Integrated Fire & Life Safety Systems
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House delivers fully integrated fire alarm
              and life safety solutions — combining intelligent detection,
              control panels, notification devices and system integration.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <FireIcon className="w-6 h-6 text-red-600" />
                Addressable & conventional fire alarm systems
              </li>
              <li className="flex gap-3">
                <BellAlertIcon className="w-6 h-6 text-red-600" />
                Voice evacuation & emergency notification
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-red-600" />
                System monitoring & BMS integration
              </li>
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-red-600" />
                Testing, commissioning & compliance reporting
              </li>
            </ul>
          </div>

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/fire-alarm/system.jpg"
              alt="Fire Alarm Control Panel"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         APPLICATIONS
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {[
            { icon: BuildingOffice2Icon, label: 'Commercial Buildings' },
            { icon: HeartIcon, label: 'Healthcare Facilities' },
            { icon: ClockIcon, label: 'Hospitality & Public Spaces' },
            { icon: ShieldCheckIcon, label: 'Industrial & High-Risk Sites' },
          ].map((item, index) => (
            <div
              key={index}
              data-aos
              className="text-center bg-white rounded-2xl
                         p-10 shadow-sm hover:shadow-lg transition"
            >
              <item.icon className="w-12 h-12 mx-auto text-red-600" />
              <p className="mt-6 font-medium text-gray-900">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ===============================
         CTA — CALM & TRUSTED
      =============================== */}
      <section className="bg-white py-32">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Safety You Can Trust When It Matters Most
          </h2>
          <p className="mt-6 text-gray-600">
            Implement reliable, compliant fire alarm and life safety
            systems that protect people and property.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
