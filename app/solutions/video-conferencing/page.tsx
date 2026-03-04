'use client';

import { useEffect } from 'react';
import {
  VideoCameraIcon,
  MicrophoneIcon,
  SpeakerWaveIcon,
  WifiIcon,
  CpuChipIcon,
  PresentationChartBarIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function VideoConferencingSolution() {

  /* ===============================
     MODERN MOTION
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
          transform: translateY(24px);
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
         HERO — TEXT-LED, MODERN
      =============================== */}
      <section className="pt-44 pb-32 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div data-aos className="max-w-3xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">
              Hybrid Collaboration Solutions
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Video Conferencing
              <span className="block text-green-600">
                Solutions
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House delivers enterprise-grade video conferencing
              solutions that enable seamless communication, collaboration
              and productivity — connecting teams, classrooms and
              organizations anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         WHY VIDEO CONFERENCING
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Built for Hybrid Work & Learning
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Modern organizations demand reliable, intuitive and secure
              video conferencing experiences. Our solutions integrate
              advanced cameras, microphones, displays and collaboration
              platforms to ensure every participant is seen and heard
              clearly.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• High-definition video & crystal-clear audio</li>
              <li>• Wireless content sharing & collaboration</li>
              <li>• Secure, enterprise-grade platforms</li>
              <li>• Scalable for rooms of all sizes</li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/videoconf/overview.jpg"
              alt="Video Conferencing Setup"
              className="w-full h-[380px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTION COMPONENTS (PDF)
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Core Video Conferencing Components
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: VideoCameraIcon,
                title: 'Cameras & Visuals',
                text: 'Auto-framing cameras, PTZ systems and AI-powered tracking for natural meetings.',
              },
              {
                icon: MicrophoneIcon,
                title: 'Microphones & Audio',
                text: 'Beamforming microphones and DSP audio processing for clarity.',
              },
              {
                icon: SpeakerWaveIcon,
                title: 'Speakers & Sound',
                text: 'Optimized speaker systems for even sound coverage.',
              },
              {
                icon: PresentationChartBarIcon,
                title: 'Wireless Collaboration',
                text: 'Seamless content sharing and interactive collaboration.',
              },
              {
                icon: WifiIcon,
                title: 'Network & Security',
                text: 'Reliable connectivity with enterprise-grade security.',
              },
              {
                icon: CpuChipIcon,
                title: 'Control & Management',
                text: 'Centralized control, monitoring and room scheduling.',
              },
            ].map(item => (
              <div
                key={item.title}
                data-aos
                className="bg-gray-50 p-10 rounded-2xl hover:shadow-xl transition"
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
         ROOM TYPES
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Solutions for Every Space
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: BuildingOffice2Icon, label: 'Meeting & Board Rooms' },
              { icon: AcademicCapIcon, label: 'Classrooms & Training Rooms' },
              { icon: GlobeAltIcon, label: 'Enterprise Collaboration Spaces' },
              { icon: VideoCameraIcon, label: 'Remote & Hybrid Workspaces' },
            ].map(item => (
              <div
                key={item.label}
                data-aos
                className="text-center p-10 rounded-2xl bg-gray-50 hover:shadow-lg transition"
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
         SERVICES
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Video Conferencing Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House provides complete video conferencing solutions
              — from system design and integration to ongoing support.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Solution design & platform selection
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation & commissioning
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Integration with AV & IT systems
              </li>
              <li className="flex gap-3">
                <VideoCameraIcon className="w-6 h-6 text-green-600" />
                Training, AMC & technical support
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/videoconf/services.jpg"
              alt="Video Conferencing Services"
              className="w-full h-[400px] object-cover rounded-3xl shadow-lg"
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
            Connect Teams Without Boundaries
          </h2>
          <p className="mt-6 text-green-100">
            Build reliable, secure and engaging video conferencing
            experiences with Projection House.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
