'use client';

import { useEffect } from 'react';
import {
  AcademicCapIcon,
  TvIcon,
  SpeakerWaveIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  PresentationChartBarIcon,
  BuildingOffice2Icon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function SchoolsPage() {

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
              Education Technology Environments
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Schools
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and delivers integrated
              learning environments for K-12 schools —
              combining AV, smart campus systems, security
              and digital platforms that elevate teaching,
              collaboration and student safety.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTIONS FOR SCHOOLS
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {[
            {
              icon: TvIcon,
              title: 'Smart Classrooms & Lecture Spaces',
              text: 'Interactive displays, lecture capture, collaboration systems and hybrid learning technology.',
              image: '/image/markets/schools/classroom.jpg',
            },
            {
              icon: SpeakerWaveIcon,
              title: 'Auditoriums & Performance Halls',
              text: 'Professional audio systems, acoustics, lighting and stage AV integration.',
              image: '/image/markets/schools/auditorium.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Campus Safety & Security',
              text: 'CCTV, access control, visitor management and emergency communication platforms.',
              image: '/image/markets/schools/security.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Smart Campus & IT Infrastructure',
              text: 'Structured cabling, Wi-Fi networks, data centers and IoT-enabled facilities.',
              image: '/image/markets/schools/campus.jpg',
            },
            {
              icon: PresentationChartBarIcon,
              title: 'Digital Signage & Wayfinding',
              text: 'Information displays, event boards and emergency messaging across campuses.',
              image: '/image/markets/schools/signage.jpg',
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
              End-to-End Delivery for Schools
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              We partner with educators, developers and
              administrators to design, implement and
              support future-ready school campuses.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Educational consulting & master planning
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Systems engineering & approvals
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation, testing & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                AMC, training & lifecycle services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/markets/schools/services.jpg"
              alt="School Technology Services"
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
            Build Smarter Learning Environments
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to design safe,
            connected and future-ready schools.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
