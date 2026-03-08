'use client';

import { useEffect } from 'react';
import {
  SpeakerWaveIcon,
  MusicalNoteIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  ShoppingBagIcon,
  HomeModernIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  CpuChipIcon,
  ChartBarSquareIcon,
  SpeakerXMarkIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function AudioAcousticsPage() {

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
              Acoustic Engineering & Sound Control
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Audio &
              <span className="block text-green-600">Acoustics</span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and delivers high-performance
              acoustic environments that enhance speech clarity,
              musical fidelity, comfort and privacy across commercial,
              cultural and residential spaces.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTIONS GRID
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {[
            {
              icon: MusicalNoteIcon,
              title: 'Architectural Acoustic Design',
              text: 'Room shaping, absorption, diffusion and reverberation control engineered to meet international acoustic standards.',
              image: '/image/acoustics/design.jpg',
            },
            {
              icon: SpeakerXMarkIcon,
              title: 'Noise & Vibration Control',
              text: 'Isolation systems, floating floors, resilient mounts and vibration damping for sensitive environments.',
              image: '/image/acoustics/noise.jpg',
            },
            {
              icon: SpeakerWaveIcon,
              title: 'Sound Reinforcement Systems',
              text: 'High-fidelity PA, distributed audio and performance sound systems for speech and music.',
              image: '/image/acoustics/sound.jpg',
            },
            {
              icon: ChartBarSquareIcon,
              title: 'Simulation & Acoustic Modelling',
              text: '3D acoustic modelling, RT60 prediction and noise mapping during design stages.',
              image: '/image/acoustics/modelling.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Measurement & Commissioning',
              text: 'Post-installation testing, tuning and certification to ensure real-world acoustic performance.',
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
              { icon: AcademicCapIcon, label: 'Education & Auditoriums' },
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
              End-to-End Acoustic Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From concept modelling to final tuning and certification,
              Projection House delivers complete acoustic engineering
              and installation services.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Acoustic studies & predictive modelling
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Specialist installation & isolation systems
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Calibration, tuning & commissioning
              </li>
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                Maintenance contracts & upgrades
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
            Engineer Spaces That Sound Exceptional
          </h2>
          <p className="mt-6 text-green-100">
            Work with Projection House to create acoustically optimized
            environments designed for performance, clarity and comfort.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
