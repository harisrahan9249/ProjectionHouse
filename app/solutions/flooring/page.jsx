'use client';

import { useEffect } from 'react';
import {
  Squares2X2Icon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  ShoppingBagIcon,
  HomeModernIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  PaintBrushIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function FlooringWallSystemsPage() {

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
              Performance Surfaces & Architectural Finishes
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Specialized Flooring &
              <span className="block text-green-600">
                Wall Systems
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and installs specialist
              flooring and wall systems engineered for durability,
              hygiene, acoustics, static control and aesthetics
              across demanding environments.
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
              icon: Squares2X2Icon,
              title: 'Raised Access Flooring',
              text: 'Modular access floors for data centers, control rooms and high-density IT environments.',
              image: '/image/flooring/raised.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Anti-Static & Cleanroom Systems',
              text: 'ESD-safe floors and seamless hygienic wall finishes for labs and healthcare.',
              image: '/image/flooring/cleanroom.jpg',
            },
            {
              icon: PaintBrushIcon,
              title: 'Decorative Architectural Wall Panels',
              text: 'Timber, fabric, metal and composite panels integrating acoustics and branding.',
              image: '/image/flooring/walls.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Impact & Fire-Rated Solutions',
              text: 'High-durability, fire-resistant wall systems for mission-critical spaces.',
              image: '/image/flooring/fire.jpg',
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
            Ideal For
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BuildingOffice2Icon, label: 'Commercial Offices' },
              { icon: AcademicCapIcon, label: 'Education & Labs' },
              { icon: ShoppingBagIcon, label: 'Retail & Hospitality' },
              { icon: HomeModernIcon, label: 'Luxury Interiors' },
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
              End-to-End Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House manages specialist surface
              installations from design coordination through
              commissioning and handover.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Design detailing & approvals
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation & QA/QC
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Integration with MEP & IT
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Testing, compliance & handover
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/flooring/services.jpg"
              alt="Flooring Services"
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
            Engineer Surfaces That Perform
          </h2>
          <p className="mt-6 text-green-100">
            Work with Projection House to deploy durable,
            technically advanced flooring and wall systems.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
