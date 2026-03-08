'use client';

import { useEffect } from 'react';
import {
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  BellAlertIcon,
  RectangleGroupIcon,
  CpuChipIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
  SignalIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function IntrusionPerimeterSecurity() {

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
          transform: translateY(20px);
          transition:
            opacity 800ms cubic-bezier(0.19,1,0.22,1),
            transform 800ms cubic-bezier(0.19,1,0.22,1);
        }
        .aos-on {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===============================
         HERO — PERIMETER FIRST
      =============================== */}
      <section className="pt-44 pb-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          <div data-aos className="lg:col-span-5">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-5">
              Early Threat Detection
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900">
              Intrusion &
              <span className="block text-green-600">
                Perimeter Security
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed">
              Protect assets at the outermost layer with intelligent
              intrusion detection and perimeter security systems —
              stopping threats before they reach critical zones.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/perimeter/hero.jpg"
              alt="Perimeter Intrusion Detection"
              className="w-full h-[420px] object-cover rounded-[2.75rem] shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         LAYERED DEFENSE
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Layered Security from Outside In
          </h2>

          <div className="mt-20 space-y-10">

            {[
              {
                icon: SignalIcon,
                title: 'Outer Perimeter Detection',
                text: 'Early detection using fence sensors, ground systems, IR beams and perimeter analytics.',
              },
              {
                icon: RectangleGroupIcon,
                title: 'Boundary Protection',
                text: 'Secured fences, barriers and walls integrated with intrusion alarms.',
              },
              {
                icon: BellAlertIcon,
                title: 'Intrusion Alerting',
                text: 'Immediate alerts and escalation through centralized security platforms.',
              },
              {
                icon: CpuChipIcon,
                title: 'System Intelligence',
                text: 'Smart filtering to reduce false alarms and identify real threats.',
              },
            ].map((layer, index) => (
              <div
                key={index}
                data-aos
                className="flex gap-8 items-start bg-white
                           rounded-2xl p-10 shadow-sm hover:shadow-lg transition"
              >
                <layer.icon className="w-10 h-10 text-green-600 shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {layer.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {layer.text}
                  </p>
                </div>
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

          <div data-aos className="lg:col-span-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Integrated Intrusion Technologies
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our perimeter security solutions combine physical detection
              and intelligent systems to ensure accurate threat detection
              with minimal disruption.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ExclamationTriangleIcon className="w-6 h-6 text-green-600" />
                Fence-mounted vibration & fiber sensors
              </li>
              <li className="flex gap-3">
                <ExclamationTriangleIcon className="w-6 h-6 text-green-600" />
                Infrared beams & microwave barriers
              </li>
              <li className="flex gap-3">
                <ExclamationTriangleIcon className="w-6 h-6 text-green-600" />
                Ground sensors & buried cable detection
              </li>
              <li className="flex gap-3">
                <ExclamationTriangleIcon className="w-6 h-6 text-green-600" />
                Centralized alarms & system integration
              </li>
            </ul>
          </div>

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/perimeter/technology.jpg"
              alt="Perimeter Security Sensors"
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
            { icon: BuildingOffice2Icon, label: 'Critical Infrastructure' },
            { icon: ShieldCheckIcon, label: 'High-Security Facilities' },
            { icon: GlobeAltIcon, label: 'Industrial & Utilities' },
            { icon: ExclamationTriangleIcon, label: 'Restricted Zones' },
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
      <section className="bg-white py-32">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Detect Early. Protect Completely.”
          </h2>
          <p className="mt-6 text-gray-600">
            Strengthen your first line of defense with intelligent
            intrusion and perimeter security solutions.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
