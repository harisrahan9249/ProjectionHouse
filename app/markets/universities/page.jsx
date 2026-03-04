'use client';

import { useEffect } from 'react';
import {
  AcademicCapIcon,
  TvIcon,
  SpeakerWaveIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  PresentationChartBarIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function UniversitiesPage() {

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
              Higher Education Technology Environments
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Universities
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and delivers advanced
              digital campus ecosystems for universities —
              combining smart classrooms, research facilities,
              cybersecurity, AV, IoT and data platforms to
              support teaching, innovation and collaboration.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTIONS FOR UNIVERSITIES
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {[
            {
              icon: TvIcon,
              title: 'Lecture Halls & Hybrid Learning',
              text: 'Large-format displays, lecture capture, streaming platforms and interactive teaching tools.',
              image: '/image/markets/universities/lecture.jpg',
            },
            {
              icon: SpeakerWaveIcon,
              title: 'Auditoriums & Event Spaces',
              text: 'Professional acoustics, PA systems, lighting control and performance AV integration.',
              image: '/image/markets/universities/auditorium.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Research & Innovation Labs',
              text: 'High-performance networks, simulation suites, VR labs and data-intensive environments.',
              image: '/image/markets/universities/labs.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Campus Security & SOC Integration',
              text: 'Access control, CCTV, emergency communications and cybersecurity monitoring.',
              image: '/image/markets/universities/security.jpg',
            },
            {
              icon: PresentationChartBarIcon,
              title: 'Digital Signage & Student Experience',
              text: 'Wayfinding, scheduling systems, event communications and campus engagement platforms.',
              image: '/image/markets/universities/signage.jpg',
            },
            {
              icon: GlobeAltIcon,
              title: 'Smart Campuses & Sustainability',
              text: 'IoT sensors, energy optimization platforms and ESG reporting tools.',
              image: '/image/markets/universities/smart-campus.jpg',
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
         DELIVERY MODEL
      =============================== */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Campus Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From digital masterplanning to long-term
              managed services, Projection House partners
              with universities to deliver future-ready
              learning and research environments.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Campus technology strategy & consulting
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Engineering, BIM & authority approvals
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation, testing & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Training, AMC & lifecycle services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/markets/universities/services.jpg"
              alt="University Technology Services"
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
            Build the Digital Campus of Tomorrow
          </h2>
          <p className="mt-6 text-green-100">
            Work with Projection House to create secure,
            sustainable and technology-driven university
            environments.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
