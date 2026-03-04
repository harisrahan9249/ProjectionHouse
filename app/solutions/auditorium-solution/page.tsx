'use client';

import { useEffect } from 'react';
import {
  SpeakerWaveIcon,
  LightBulbIcon,
  TvIcon,
  FilmIcon,
  CpuChipIcon,
  AcademicCapIcon,
  BuildingOffice2Icon,
  UsersIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AuditoriumSolution() {

  /* ===============================
     MODERN AOS
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
      { threshold: 0.18, rootMargin: '0px 0px -100px 0px' }
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
          transform: translateY(34px);
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
         HERO — MODERN & SPACIOUS
      =============================== */}
      <section className="pt-48 pb-40 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          <div data-aos className="max-w-4xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Performance & Presentation Spaces
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Auditorium
              <span className="block text-green-600">
                Solutions
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-700 leading-relaxed">
              Projection House designs and delivers advanced auditorium
              solutions that combine audio, visual, lighting, acoustics
              and control technologies — creating immersive, reliable
              and future-ready performance environments.
            </p>
          </div>

          <div data-aos>
            <img
              src="/image/auditorium/hero.jpg"
              alt="Auditorium Solutions"
              className="w-full h-[560px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         WHAT MAKES A GREAT AUDITORIUM (PDF)
      =============================== */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-28 items-center">
          <div data-aos>
            <img
              src="/image/auditorium/design.jpg"
              alt="Auditorium Design"
              className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div data-aos className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-900">
              Designed for Performance, Visibility & Clarity
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              A successful auditorium requires precise coordination of
              acoustics, sightlines, sound reinforcement, display systems
              and lighting. Our solutions are engineered to ensure every
              seat delivers an optimal experience.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• Balanced acoustics and controlled reverberation</li>
              <li>• Clear visibility from all seating positions</li>
              <li>• High-impact audio and visual systems</li>
              <li>• Intelligent lighting and control</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===============================
         CORE AUDITORIUM SYSTEMS (PDF)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Core Auditorium Systems We Deliver
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {[
              {
                icon: SpeakerWaveIcon,
                title: 'Sound Reinforcement Systems',
                text: 'High-performance loudspeakers, amplifiers and DSP delivering clear and powerful sound.',
              },
              {
                icon: TvIcon,
                title: 'Projection & Display Systems',
                text: 'Large-format displays, laser projectors and LED screens for presentations and performances.',
              },
              {
                icon: LightBulbIcon,
                title: 'Stage & Architectural Lighting',
                text: 'Dynamic lighting systems enhancing performances and presentations.',
              },
              {
                icon: FilmIcon,
                title: 'Cinema & Multimedia Systems',
                text: 'Immersive audiovisual solutions for film screenings and multimedia events.',
              },
              {
                icon: CpuChipIcon,
                title: 'Control & Automation',
                text: 'Centralized control of AV, lighting and stage systems.',
              },
              {
                icon: UsersIcon,
                title: 'Seating & Sightline Integration',
                text: 'Coordination with seating layouts to ensure optimal viewing and acoustics.',
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
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         APPLICATIONS & USE CASES
      =============================== */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Auditorium Solutions For
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: AcademicCapIcon, label: 'Educational Institutions' },
              { icon: BuildingOffice2Icon, label: 'Corporate Auditoriums' },
              { icon: FilmIcon, label: 'Cultural & Performing Arts Centers' },
              { icon: UsersIcon, label: 'Convention & Event Halls' },
            ].map(item => (
              <div
                key={item.label}
                data-aos
                className="text-center p-10 rounded-2xl bg-gray-50 shadow-sm hover:shadow-lg transition"
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
         SERVICES — TURNKEY (PDF)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Turnkey Auditorium Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House provides complete end-to-end auditorium
              solutions — from concept design to installation, testing
              and ongoing support.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Auditorium design & acoustic planning
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Supply, installation & commissioning
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                System integration & tuning
              </li>
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                AMC, SLA & technical support
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/auditorium/services.jpg"
              alt="Auditorium Services"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         CTA — INSPIRATIONAL
      =============================== */}
      <section className="bg-green-600 py-36 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Create Auditoriums That Inspire & Perform
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to deliver auditorium solutions
            that elevate every performance, presentation and experience.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
