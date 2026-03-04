'use client';

import { useEffect } from 'react';
import {
  SpeakerWaveIcon,
  MusicalNoteIcon,
  MicrophoneIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  ShoppingBagIcon,
  HomeModernIcon,
  FilmIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AudioSystemSolution() {

  /* ===============================
     SOFT & ELEGANT AOS
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
      { threshold: 0.15, rootMargin: '0px 0px -90px 0px' }
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
            opacity 1000ms ease,
            transform 1000ms ease;
        }
        .aos-on {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===============================
         HERO — LIGHT & CALM
      =============================== */}
      <section className="pt-44 pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div data-aos className="max-w-3xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">
              Professional Sound Solutions
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Audio System
              <span className="block text-green-600">
                Solutions
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House delivers high-performance audio system solutions
              designed for clarity, coverage and consistency — from background
              music and paging to large-scale sound reinforcement systems.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         AUDIO OVERVIEW
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div data-aos>
            <img
              src="/image/audio/overview.jpg"
              alt="Professional Audio Systems"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          <div data-aos className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-900">
              Sound That Is Clear, Balanced & Reliable
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our audio solutions are engineered to deliver consistent sound
              coverage, intelligible speech and immersive music — tailored to
              the acoustics and usage of each space.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• Even sound distribution</li>
              <li>• Speech clarity & intelligibility</li>
              <li>• Zoning & volume control</li>
              <li>• Integration with AV & control systems</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===============================
         AUDIO SOLUTION TYPES (PDF)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Our Audio System Solutions Include
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: MusicalNoteIcon,
                title: 'Background Music Systems',
                text: 'Distributed audio systems providing ambient music across commercial and hospitality spaces.',
              },
              {
                icon: SpeakerWaveIcon,
                title: 'Public Address & Paging',
                text: 'Clear and reliable PA systems for announcements, safety and emergency communication.',
              },
              {
                icon: MicrophoneIcon,
                title: 'Conference & Speech Systems',
                text: 'Microphones, mixers and DSP systems for meetings, presentations and conferences.',
              },
              {
                icon: FilmIcon,
                title: 'Auditorium & Event Audio',
                text: 'High-power sound reinforcement systems for auditoriums, halls and events.',
              },
              {
                icon: HomeModernIcon,
                title: 'Residential Audio Systems',
                text: 'Multi-room audio solutions for luxury homes and villas.',
              },
              {
                icon: SpeakerWaveIcon,
                title: 'Digital Signal Processing (DSP)',
                text: 'Advanced DSP tuning for optimal sound quality and control.',
              },
            ].map(item => (
              <div
                key={item.title}
                data-aos
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                <item.icon className="w-12 h-12 text-green-600" />
                <h3 className="mt-6 font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         APPLICATIONS
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Audio System Solutions For
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { icon: BuildingOffice2Icon, label: 'Corporate Offices' },
              { icon: AcademicCapIcon, label: 'Educational Institutions' },
              { icon: ShoppingBagIcon, label: 'Retail & Hospitality' },
              { icon: FilmIcon, label: 'Auditoriums & Event Spaces' },
            ].map(item => (
              <div
                key={item.label}
                data-aos
                className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl shadow-sm"
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
      <section className="bg-gray-50 py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24">
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Audio Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From consultation and design to tuning and long-term support,
              we deliver complete professional audio solutions.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Audio system design & drawings
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation & commissioning
              </li>
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                DSP tuning & calibration
              </li>
              <li className="flex gap-3">
                <BuildingOffice2Icon className="w-6 h-6 text-green-600" />
                AMC, SLA & ongoing support
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/audio/services.jpg"
              alt="Audio System Services"
              className="w-full h-[360px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         CTA — CLEAN & CONFIDENT
      =============================== */}
      <section className="bg-green-600 py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Deliver Sound That Truly Connects
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House for audio systems that
            deliver clarity, comfort and consistent performance.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
