'use client';

import { useEffect } from 'react';
import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ChartBarSquareIcon,
  RectangleGroupIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  ShoppingBagIcon,
  HomeModernIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AcousticControlPage() {

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
              Specialist Acoustic Engineering & Noise Mitigation
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Acoustic &
              <span className="block text-green-600">
                Sound Control
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and installs advanced
              acoustic environments that optimize speech
              intelligibility, control reverberation and
              mitigate noise and vibration across demanding
              architectural spaces.
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
              icon: RectangleGroupIcon,
              title: 'Architectural Acoustic Treatments',
              text: 'Absorptive panels, diffusers, ceiling systems and decorative acoustic finishes.',
              image: '/image/acoustics/treatment.jpg',
            },
            {
              icon: SpeakerXMarkIcon,
              title: 'Soundproofing & Isolation',
              text: 'Floating floors, double walls, acoustic doors and vibration isolation systems.',
              image: '/image/acoustics/isolation.jpg',
            },
            {
              icon: ChartBarSquareIcon,
              title: 'Acoustic Modelling & Simulation',
              text: 'Predictive RT60 modelling, speech intelligibility studies and noise mapping.',
              image: '/image/acoustics/modelling.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Measurement & Commissioning',
              text: 'On-site testing, calibration and certification to international standards.',
              image: '/image/acoustics/testing.jpg',
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
            Acoustic Solutions For
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BuildingOffice2Icon, label: 'Corporate Offices' },
              { icon: AcademicCapIcon, label: 'Auditoriums & Theatres' },
              { icon: ShoppingBagIcon, label: 'Retail & Hospitality' },
              { icon: HomeModernIcon, label: 'Luxury Residences' },
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
              End-to-End Acoustic Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House provides turnkey acoustic
              solutions from early-stage modelling through
              installation and final certification.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Acoustic studies & design coordination
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Specialist installation & detailing
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Testing, tuning & commissioning
              </li>
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                AMC & performance optimization
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/acoustics/services.jpg"
              alt="Acoustic Services"
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
            Engineer Spaces That Sound Perfect
          </h2>
          <p className="mt-6 text-green-100">
            Work with Projection House to create acoustically
            optimized environments that perform flawlessly.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
