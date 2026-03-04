'use client';

import { useEffect } from 'react';
import {
  AcademicCapIcon,
  TvIcon,
  SpeakerWaveIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  CubeTransparentIcon,
  PresentationChartBarIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TrainingCentersPage() {

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
              Professional Learning & Simulation Facilities
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Training Centers
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and delivers immersive
              training environments for corporate academies,
              technical institutes, aviation, oil & gas and
              public-sector programs — integrating AV,
              simulation, security, IoT and digital platforms
              for skills development and certification.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTIONS FOR TRAINING CENTERS
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {[
            {
              icon: TvIcon,
              title: 'Smart Training Rooms & Classrooms',
              text: 'Interactive displays, lecture capture, collaboration tools and hybrid instruction systems.',
              image: '/image/markets/training/classroom.jpg',
            },
            {
              icon: CubeTransparentIcon,
              title: 'Simulation & VR Labs',
              text: 'High-fidelity simulators, immersive XR rooms and digital twins for hands-on learning.',
              image: '/image/markets/training/simulation.jpg',
            },
            {
              icon: SpeakerWaveIcon,
              title: 'Auditoriums & Assessment Spaces',
              text: 'Professional audio, acoustics and recording systems for evaluations and presentations.',
              image: '/image/markets/training/auditorium.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'IT Infrastructure & Networks',
              text: 'High-performance Wi-Fi, structured cabling, data platforms and cybersecurity.',
              image: '/image/markets/training/network.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Security & Access Management',
              text: 'CCTV, biometric access, visitor systems and emergency communications.',
              image: '/image/markets/training/security.jpg',
            },
            {
              icon: PresentationChartBarIcon,
              title: 'Learning Analytics & Dashboards',
              text: 'Performance tracking, attendance systems and operational intelligence platforms.',
              image: '/image/markets/training/analytics.jpg',
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
              End-to-End Training Facility Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From needs analysis to ongoing managed
              services, Projection House partners with
              organizations to deliver future-ready
              learning centers.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Training strategy & facility planning
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Systems engineering & simulations design
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation, testing & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Instructor enablement, AMC & lifecycle support
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/markets/training/services.jpg"
              alt="Training Center Services"
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
            Build World-Class Training Facilities
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to design immersive,
            secure and technology-driven learning centers.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
