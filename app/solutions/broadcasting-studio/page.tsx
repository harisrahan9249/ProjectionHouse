'use client';

import { useEffect } from 'react';
import {
  VideoCameraIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  TvIcon,
  CpuChipIcon,
  Squares2X2Icon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  FilmIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  LightBulbIcon, // ✅ ADD THIS
} from '@heroicons/react/24/outline';


import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function BroadcastingStudioSolution() {

  /* ===============================
     CLEAN CREATIVE AOS
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
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
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
            opacity 1000ms cubic-bezier(0.19,1,0.22,1),
            transform 1000ms cubic-bezier(0.19,1,0.22,1);
        }
        .aos-on {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===============================
         HERO — BROADCAST IDENTITY
      =============================== */}
      <section className="pt-48 pb-36 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          
          <div data-aos className="max-w-xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Professional Media Production
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Broadcasting Studio
              <span className="block text-green-600">
                Solutions
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and integrates end-to-end broadcasting
              studio solutions for television, digital media, corporate
              communication and educational institutions — delivering
              broadcast-quality audio, video and control systems.
            </p>
          </div>

          <div data-aos>
            <img
              src="/image/broadcast/hero.jpg"
              alt="Broadcasting Studio Solution"
              className="w-full h-[460px] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         STUDIO DESIGN PHILOSOPHY
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">
          
          <div data-aos className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Designed for Precision, Control & Creativity
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Broadcasting studios demand absolute precision — from camera
              alignment and lighting consistency to clean audio capture
              and real-time control. Our solutions are engineered to meet
              professional broadcast standards while remaining intuitive
              for operators.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• Broadcast-grade audio & video quality</li>
              <li>• Optimized studio acoustics & lighting</li>
              <li>• Reliable live production workflows</li>
              <li>• Scalable & future-ready infrastructure</li>
            </ul>
          </div>

          <div data-aos className="lg:col-span-7 grid grid-cols-2 gap-6">
            <img
              src="/image/broadcast/studio1.jpg"
              alt="Broadcast Studio Setup"
              className="rounded-2xl object-cover h-48"
            />
            <img
              src="/image/broadcast/studio2.jpg"
              alt="Studio Cameras"
              className="rounded-2xl object-cover h-48"
            />
            <img
              src="/image/broadcast/control.jpg"
              alt="Broadcast Control Room"
              className="rounded-2xl object-cover h-48"
            />
            <img
              src="/image/broadcast/audio.jpg"
              alt="Broadcast Audio System"
              className="rounded-2xl object-cover h-48"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         BROADCAST SYSTEMS (PDF)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Core Broadcasting Studio Systems
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {[
              {
                icon: VideoCameraIcon,
                title: 'Broadcast Cameras & Lenses',
                text: 'Professional cameras, PTZ systems and lenses for live and recorded production.',
              },
              {
                icon: MicrophoneIcon,
                title: 'Studio Audio Systems',
                text: 'Broadcast microphones, mixers and DSP systems for clean audio capture.',
              },
              {
                icon: LightBulbIcon,
                title: 'Studio & Production Lighting',
                text: 'Key, fill and back lighting solutions optimized for broadcast environments.',
              },
              {
                icon: Squares2X2Icon,
                title: 'Video Switching & Production',
                text: 'Video switchers, mixers and production consoles for live workflows.',
              },
              {
                icon: TvIcon,
                title: 'Monitoring & Display',
                text: 'Reference monitors and multiview displays for production teams.',
              },
              {
                icon: CpuChipIcon,
                title: 'Control, Recording & Streaming',
                text: 'Centralized control, recording servers and streaming platforms.',
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
         APPLICATIONS
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Broadcasting Solutions For
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: FilmIcon, label: 'TV & Media Studios' },
              { icon: BuildingOffice2Icon, label: 'Corporate Studios' },
              { icon: AcademicCapIcon, label: 'Educational & Training Studios' },
              { icon: VideoCameraIcon, label: 'Digital & Online Content Creators' },
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
         SERVICES — TURNKEY
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Broadcasting Studio Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From concept to commissioning, Projection House delivers
              complete turnkey broadcasting studio solutions with
              long-term support.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Studio planning & system design
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation & commissioning
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Workflow integration & testing
              </li>
              <li className="flex gap-3">
                <VideoCameraIcon className="w-6 h-6 text-green-600" />
                Training, AMC & technical support
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/broadcast/services.jpg"
              alt="Broadcast Studio Services"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-green-600 py-36 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Build Studios That Broadcast with Confidence
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to design and deliver
            professional broadcasting studios that perform flawlessly.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
