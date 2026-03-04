'use client';

import { useEffect } from 'react';
import {
  SpeakerWaveIcon,
  PresentationChartBarIcon,
  VideoCameraIcon,
  TvIcon,
  CpuChipIcon,
  SignalIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  ShoppingBagIcon,
  HomeModernIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AVSolution() {

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
         HERO — TEXT FOCUSED
      =============================== */}
      <section className="pt-44 pb-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div data-aos className="max-w-4xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Audio Visual Systems Integration
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              AV
              <span className="block text-green-600">Solutions</span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House delivers professional Audio Visual solutions
              that enhance communication, engagement, and operational
              efficiency across diverse environments.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         AV PORTFOLIO — IMAGE + CONTENT
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {[
            {
              icon: TvIcon,
              title: 'Professional Displays & Video Walls',
              text: 'Large-format displays, LED screens and video walls designed for corporate spaces, retail, public venues and control rooms.',
              image: '/image/av/display.jpg',
            },
            {
              icon: SpeakerWaveIcon,
              title: 'Audio & Sound Reinforcement Systems',
              text: 'Public address systems, background music, surround sound and speech reinforcement solutions.',
              image: '/image/av/audio.jpg',
            },
            {
              icon: PresentationChartBarIcon,
              title: 'Presentation & Collaboration Systems',
              text: 'Interactive displays, wireless presentation and collaboration technologies.',
              image: '/image/av/presentation.jpg',
            },
            {
              icon: VideoCameraIcon,
              title: 'Video Conferencing Systems',
              text: 'Enterprise-grade conferencing systems supporting hybrid and remote collaboration.',
              image: '/image/av/conferencing.jpg',
            },
            {
              icon: SignalIcon,
              title: 'AV over IP & Signal Distribution',
              text: 'Scalable AV-over-IP solutions for flexible signal routing and distribution.',
              image: '/image/av/av-over-ip.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'AV Control & Automation',
              text: 'Centralized control of AV, lighting and room systems via intuitive interfaces.',
              image: '/image/av/control.jpg',
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
            AV Solutions For
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BuildingOffice2Icon, label: 'Corporate & Commercial' },
              { icon: AcademicCapIcon, label: 'Education & Training' },
              { icon: ShoppingBagIcon, label: 'Retail & Hospitality' },
              { icon: HomeModernIcon, label: 'Residential & Luxury Spaces' },
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
         SERVICES — PDF BASED
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24">
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End AV Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From design to commissioning and long-term support,
              Projection House delivers complete AV lifecycle services.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                AV design, drawings & approvals
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation, testing & commissioning
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                System integration & optimization
              </li>
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                AMC, SLA & managed AV services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/av/services.jpg"
              alt="AV Services"
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
            Build AV Systems That Communicate Clearly
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to deliver scalable,
            reliable and future-ready AV solutions.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
