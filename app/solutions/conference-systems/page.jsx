'use client';

import { useEffect } from 'react';
import {
  PresentationChartLineIcon,
  MicrophoneIcon,
  VideoCameraIcon,
  SpeakerWaveIcon,
  CpuChipIcon,
  UserGroupIcon,
  BuildingOffice2Icon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ConferenceSystems() {

  /* ===============================
     AOS (SAME ENGINE)
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
          transform: translateY(20px);
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
         HERO — MODERN COLLABORATION
      =============================== */}
      <section className="pt-44 pb-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-5">
              Collaboration Technology
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900">
              Conference
              <span className="block text-green-600">
                Systems
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
              Enable seamless communication and collaboration with
              intelligent conference systems — designed for clarity,
              productivity and hybrid work environments.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/conference/hero.jpg"
              alt="Modern Conference Room"
              className="w-full h-[440px] object-cover rounded-[3rem] shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         MEETING EXPERIENCE (HORIZONTAL FLOW)
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Designed for Productive Meetings
          </h2>

          <div className="mt-20 grid lg:grid-cols-4 gap-12">

            {[
              {
                icon: PresentationChartLineIcon,
                title: 'Clear Visuals',
                text: 'High-resolution displays and wireless presentation systems.',
              },
              {
                icon: MicrophoneIcon,
                title: 'Natural Audio',
                text: 'Crystal-clear microphones and intelligent audio processing.',
              },
              {
                icon: VideoCameraIcon,
                title: 'Smart Video',
                text: 'AI-enabled cameras with auto-framing and speaker tracking.',
              },
              {
                icon: CpuChipIcon,
                title: 'Seamless Control',
                text: 'One-touch control and integration with collaboration platforms.',
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos
                className="bg-gray-50 p-10 rounded-2xl
                           hover:bg-white hover:shadow-lg transition"
              >
                <item.icon className="w-10 h-10 text-green-600" />
                <h3 className="mt-6 font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ===============================
         SYSTEMS + IMAGE (SPLIT)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/conference/system.jpg"
              alt="Conference System Technology"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          <div data-aos className="lg:col-span-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Integrated Conference Solutions
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House delivers end-to-end conference systems
              integrating audio, video, control and collaboration tools
              into a unified, user-friendly experience.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                Professional microphones & speakers
              </li>
              <li className="flex gap-3">
                <VideoCameraIcon className="w-6 h-6 text-green-600" />
                PTZ & AI-driven conference cameras
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Room control & automation
              </li>
              <li className="flex gap-3">
                <PresentationChartLineIcon className="w-6 h-6 text-green-600" />
                Integration with Teams, Zoom & UC platforms
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===============================
         WHERE IT’S USED
      =============================== */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {[
            { icon: BuildingOffice2Icon, label: 'Corporate Boardrooms' },
            { icon: UserGroupIcon, label: 'Training & Collaboration Spaces' },
            { icon: GlobeAltIcon, label: 'Hybrid & Remote Workplaces' },
            { icon: PresentationChartLineIcon, label: 'Executive Meeting Rooms' },
          ].map((item, index) => (
            <div
              key={index}
              data-aos
              className="text-center bg-gray-50 rounded-2xl
                         p-10 hover:bg-white hover:shadow-lg transition"
            >
              <item.icon className="w-12 h-12 mx-auto text-green-600" />
              <p className="mt-6 font-medium text-gray-900">
                {item.label}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-green-600 py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Make Every Meeting More Effective
          </h2>
          <p className="mt-6 text-green-100">
            Empower teams with intelligent conference systems built for
            clarity, collaboration and productivity.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
