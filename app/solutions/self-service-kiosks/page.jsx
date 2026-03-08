'use client';

import { useEffect } from 'react';
import {
  DevicePhoneMobileIcon,
  CursorArrowRaysIcon,
  CreditCardIcon,
  CpuChipIcon,
  ClockIcon,
  UserGroupIcon,
  BuildingStorefrontIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function SelfServiceKiosks() {

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
            opacity 900ms cubic-bezier(0.19,1,0.22,1),
            transform 900ms cubic-bezier(0.19,1,0.22,1);
        }
        .aos-on {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===============================
         HERO — SELF-SERVICE FREEDOM
      =============================== */}
      <section className="pt-44 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-5">
              Interactive Customer Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900">
              Self-Service
              <span className="block text-green-600">
                Kiosks
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
              Empower customers with intuitive self-service kiosks
              designed to reduce wait times, improve efficiency
              and deliver seamless digital experiences.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/kiosk/hero.jpg"
              alt="Self Service Kiosk"
              className="w-full h-[440px] object-cover rounded-[3rem] shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         USER JOURNEY — HOW IT WORKS
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Designed for Effortless Interaction
          </h2>

          <div className="mt-20 grid lg:grid-cols-4 gap-12">

            {[
              {
                icon: CursorArrowRaysIcon,
                title: 'Touch & Select',
                text: 'Users interact through intuitive touch-based interfaces.',
              },
              {
                icon: DevicePhoneMobileIcon,
                title: 'Personalized Flow',
                text: 'Smart interfaces adapt to user choices and language.',
              },
              {
                icon: CreditCardIcon,
                title: 'Secure Transactions',
                text: 'Integrated payment, QR and ticketing options.',
              },
              {
                icon: ClockIcon,
                title: 'Faster Service',
                text: 'Reduced queues and quicker customer turnaround.',
              },
            ].map((step, index) => (
              <div
                key={index}
                data-aos
                className="bg-white p-10 rounded-2xl
                           shadow-sm hover:shadow-lg transition"
              >
                <step.icon className="w-10 h-10 text-green-600" />
                <h3 className="mt-6 font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===============================
         TECHNOLOGY + IMAGE
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/kiosk/system.jpg"
              alt="Kiosk Technology"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          <div data-aos className="lg:col-span-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Smart Kiosk Technology
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our self-service kiosks integrate robust hardware,
              secure software and intelligent backend systems
              to ensure reliability and scalability.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Industrial-grade touch displays
              </li>
              <li className="flex gap-3">
                <CreditCardIcon className="w-6 h-6 text-green-600" />
                Payment, ticketing & ID integration
              </li>
              <li className="flex gap-3">
                <DevicePhoneMobileIcon className="w-6 h-6 text-green-600" />
                Remote management & monitoring
              </li>
              <li className="flex gap-3">
                <ClockIcon className="w-6 h-6 text-green-600" />
                High availability & uptime
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===============================
         WHERE IT’S USED
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {[
            { icon: BuildingStorefrontIcon, label: 'Retail & QSR' },
            { icon: GlobeAltIcon, label: 'Airports & Transport' },
            { icon: UserGroupIcon, label: 'Government & Public Services' },
            { icon: DevicePhoneMobileIcon, label: 'Hospitality & Events' },
          ].map((item, index) => (
            <div
              key={index}
              data-aos
              className="text-center bg-white rounded-2xl
                         p-10 shadow-sm hover:shadow-lg transition"
            >
              <item.icon className="w-12 h-12 mx-auto text-green-600" />
              <p className="mt-6 font-medium text-gray-900">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-green-600 py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Let Customers Serve Themselves — Seamlessly
          </h2>
          <p className="mt-6 text-green-100">
            Deploy intelligent self-service kiosks that improve
            efficiency, satisfaction and operational performance.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
