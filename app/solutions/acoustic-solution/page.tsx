'use client';

import { useEffect } from 'react';
import {
  SpeakerWaveIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  HeartIcon,
  HomeModernIcon,
  FilmIcon,
  WrenchScrewdriverIcon,
  ClipboardDocumentCheckIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function AcousticSolution() {

  /* ===============================
     SOFT AOS (CALM MOTION)
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
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      {/* ===== AOS STYLES (SOFT) ===== */}
      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 1200ms ease,
            transform 1200ms ease;
        }
        .aos-on {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===============================
         HERO — TEXT ONLY (CALM)
      =============================== */}
      <section className="pt-44 pb-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div data-aos className="max-w-3xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">
              Acoustic Design & Sound Control
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Acoustic
              <span className="block text-green-600">
                Solutions
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House provides advanced acoustic solutions that
              control noise, enhance speech clarity, and improve sound
              quality across commercial, institutional, and residential
              environments.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         WHY ACOUSTICS MATTER (PDF)
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-start">
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Why Acoustic Design Matters
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Poor acoustics can cause noise distractions, echo, speech
              distortion, and fatigue. Our acoustic solutions are designed
              to create balanced sound environments that improve comfort,
              communication, and productivity.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• Reduce unwanted noise & echoes</li>
              <li>• Improve speech intelligibility</li>
              <li>• Enhance audio quality</li>
              <li>• Meet international acoustic standards</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6" data-aos>
            <img
              src="/image/acoustic/panel-wall.jpg"
              alt="Acoustic wall panels"
              className="rounded-xl object-cover h-40 shadow-sm"
            />
            <img
              src="/image/acoustic/panel-ceiling.jpg"
              alt="Ceiling acoustic panels"
              className="rounded-xl object-cover h-40 shadow-sm"
            />
            <img
              src="/image/acoustic/studio.jpg"
              alt="Studio acoustic treatment"
              className="rounded-xl object-cover h-40 shadow-sm"
            />
            <img
              src="/image/acoustic/office.jpg"
              alt="Office acoustic solution"
              className="rounded-xl object-cover h-40 shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         ACOUSTIC SOLUTION TYPES (PDF)
      =============================== */}
      <section className="bg-white py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Our Acoustic Solutions Include
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                title: 'Acoustic Panels (Wall & Ceiling)',
                text: 'Sound-absorbing panels that reduce reverberation and improve clarity.',
                image: '/image/acoustic/panel.jpg',
              },
              {
                title: 'Soundproofing & Isolation',
                text: 'Isolation systems to prevent sound leakage between spaces.',
                image: '/image/acoustic/isolation.jpg',
              },
              {
                title: 'Noise Barriers & Enclosures',
                text: 'Noise control solutions for industrial and mechanical environments.',
                image: '/image/acoustic/enclosure.jpg',
              },
              {
                title: 'Acoustic Flooring Solutions',
                text: 'Flooring systems designed to reduce impact and airborne noise.',
                image: '/image/acoustic/flooring.jpg',
              },
              {
                title: 'Louvers & Sound Attenuators',
                text: 'Airflow-friendly solutions that reduce noise transmission.',
                image: '/image/acoustic/louver.jpg',
              },
              {
                title: 'Cinema & Auditorium Acoustics',
                text: 'Precision acoustic treatment for immersive audio experiences.',
                image: '/image/acoustic/cinema.jpg',
              },
            ].map(item => (
              <div
                key={item.title}
                data-aos
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover rounded-xl"
                />
                <h3 className="mt-4 font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         APPLICATIONS (PDF)
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Acoustic Solutions For
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: BuildingOffice2Icon, label: 'Corporate Offices & Boardrooms' },
              { icon: AcademicCapIcon, label: 'Educational Institutions' },
              { icon: HeartIcon, label: 'Healthcare Facilities' },
              { icon: FilmIcon, label: 'Auditoriums & Cinemas' },
              { icon: HomeModernIcon, label: 'Luxury Residences' },
              { icon: SpeakerWaveIcon, label: 'Studios & Media Rooms' },
            ].map(item => (
              <div
                key={item.label}
                data-aos
                className="flex items-center gap-4 bg-white p-6 rounded-xl shadow-sm"
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
         SERVICES (PDF)
      =============================== */}
      <section className="bg-white py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24">
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Acoustic Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our acoustic services cover the complete project lifecycle —
              ensuring optimal performance and compliance.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Acoustic consulting & design
              </li>
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                Noise measurement & analysis
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation & implementation
              </li>
              <li className="flex gap-3">
                <BuildingOffice2Icon className="w-6 h-6 text-green-600" />
                Testing, tuning & maintenance
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6" data-aos>
            <img
              src="/image/acoustic/testing.jpg"
              alt="Acoustic testing"
              className="rounded-xl object-cover h-44"
            />
            <img
              src="/image/acoustic/consulting.jpg"
              alt="Acoustic consulting"
              className="rounded-xl object-cover h-44"
            />
            <img
              src="/image/acoustic/installation.jpg"
              alt="Acoustic installation"
              className="rounded-xl object-cover h-44"
            />
            <img
              src="/image/acoustic/maintenance.jpg"
              alt="Acoustic maintenance"
              className="rounded-xl object-cover h-44"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         CTA — QUIET CONFIDENCE
      =============================== */}
      <section className="bg-green-600 py-32 text-white">
        <div data-aos className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Design Spaces That Sound Right
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House for acoustic solutions
            that bring clarity, comfort and control to every space.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
