'use client';

import { useEffect } from 'react';
import {
  PresentationChartBarIcon,
  SpeakerWaveIcon,
  VideoCameraIcon,
  CpuChipIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  BuildingStorefrontIcon,
  HomeModernIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function MeetingRoomSolution() {

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
      { threshold: 0.18, rootMargin: '0px 0px -140px 0px' }
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
          transform: translateY(48px);
          transition:
            opacity 1200ms cubic-bezier(0.19,1,0.22,1),
            transform 1200ms cubic-bezier(0.19,1,0.22,1);
        }
        .aos-on {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===============================
         HERO
      =============================== */}
      <section className="pt-44 pb-36 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div data-aos>
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Smart Collaboration Spaces
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Meeting Room
              <span className="block text-green-600">Solutions</span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed max-w-xl">
              Smart, elegant and fully integrated meeting environments designed
              to elevate collaboration, productivity and decision-making.
              From huddle rooms to executive boardrooms, we deliver
              end-to-end AV excellence.
            </p>
          </div>

          <div data-aos>
            <img
              src="/image/meetingroom/hero.jpg"
              alt="Meeting Room Solutions"
              className="w-full h-[480px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTION ICON GRID
      =============================== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div data-aos className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-900">
              What Our Meeting Room Solutions Include
            </h2>
            <p className="mt-6 text-gray-700">
              Seamlessly integrated technologies delivering effortless
              collaboration and a premium meeting experience.
            </p>
          </div>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: PresentationChartBarIcon,
                title: 'Display & Projection',
                text: '4K displays, laser projectors and interactive presentation systems.',
              },
              {
                icon: SpeakerWaveIcon,
                title: 'Professional Audio',
                text: 'Crystal-clear speech with ceiling microphones and surround sound.',
              },
              {
                icon: VideoCameraIcon,
                title: 'Video Conferencing',
                text: 'AI-powered cameras and unified communication platforms.',
              },
              {
                icon: CpuChipIcon,
                title: 'Control & Automation',
                text: 'One-touch control of AV, lighting and conferencing systems.',
              },
            ].map((item) => (
              <div
                key={item.title}
                data-aos
                className="bg-gray-50 p-10 rounded-2xl shadow-sm hover:shadow-lg transition"
              >
                <item.icon className="w-10 h-10 text-green-600" />
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
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
         EXPERIENCE
      =============================== */}
      <section className="py-36 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div data-aos>
            <img
              src="/image/meetingroom/experience.jpg"
              alt="Meeting Room Experience"
              className="rounded-3xl shadow-xl"
            />
          </div>

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Designed for Effortless Collaboration
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our solutions combine advanced AV technology, acoustic
              optimization and ergonomic design to ensure every participant
              is heard, seen and engaged — whether in-room or remote.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li>• Wireless content sharing</li>
              <li>• Acoustic treatment for clarity</li>
              <li>• Secure and scalable infrastructure</li>
              <li>• Future-ready AV architecture</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===============================
         USE CASES
      =============================== */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Ideal For
          </h2>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              { icon: BuildingOffice2Icon, label: 'Corporate Offices' },
              { icon: BuildingStorefrontIcon, label: 'Business Centers' },
              { icon: HomeModernIcon, label: 'Hotels & Hospitality' },
              { icon: AcademicCapIcon, label: 'Education & Training' },
            ].map(item => (
              <div
                key={item.label}
                data-aos
                className="p-10 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition"
              >
                <item.icon className="w-10 h-10 mx-auto text-green-600" />
                <p className="mt-6 font-medium text-gray-900">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="py-32 bg-green-600 text-white">
        <div data-aos className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Let’s Build Your Smart Meeting Space
          </h2>
          <p className="mt-6 text-green-100">
            From design and integration to installation and support,
            Projection House delivers meeting room solutions that perform.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
