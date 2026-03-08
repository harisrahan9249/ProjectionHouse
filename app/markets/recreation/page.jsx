'use client';

import { useEffect } from 'react';
import {
  BoltIcon,
  HeartIcon,
  SpeakerWaveIcon,
  TvIcon,
  CpuChipIcon,
  UserGroupIcon,
  ClockIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function RecreationGyms() {

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
          transform: translateY(18px);
          transition:
            opacity 850ms cubic-bezier(0.19,1,0.22,1),
            transform 850ms cubic-bezier(0.19,1,0.22,1);
        }
        .aos-on {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===============================
         HERO — ACTIVE & BRIGHT
      =============================== */}
      <section className="pt-44 pb-36 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-6">
              Hospitality, Leisure & Entertainment
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Recreational Centers
              <span className="block text-green-600">
                & Gyms
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
              Create motivating, connected and immersive fitness
              environments where technology enhances performance,
              energy and member experience.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/recreation/hero.jpg"
              alt="Modern Fitness Center Technology"
              className="w-full h-[460px] object-cover rounded-[3rem] shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         FITNESS EXPERIENCE
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Designed to Energize Every Workout
          </h2>

          <div className="mt-20 grid lg:grid-cols-4 gap-12">

            {[
              {
                icon: BoltIcon,
                title: 'High-Energy Atmosphere',
                text: 'Music, visuals and lighting that motivate movement.',
              },
              {
                icon: HeartIcon,
                title: 'Wellness Focus',
                text: 'Balanced environments supporting health and recovery.',
              },
              {
                icon: UserGroupIcon,
                title: 'Group Engagement',
                text: 'Immersive AV for classes, studios and training zones.',
              },
              {
                icon: ClockIcon,
                title: 'Operational Efficiency',
                text: 'Scheduling, displays and system automation.',
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos
                className="bg-white p-10 rounded-2xl
                           shadow-sm hover:shadow-lg transition"
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
         TECHNOLOGY + IMAGE
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Smart Technology for Active Spaces
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House delivers integrated technology
              solutions that enhance fitness experiences while
              supporting smooth day-to-day operations.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                Zoned audio & motivational sound systems
              </li>
              <li className="flex gap-3">
                <TvIcon className="w-6 h-6 text-green-600" />
                Digital displays, class schedules & video walls
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Centralized control & automation
              </li>
              <li className="flex gap-3">
                <GlobeAltIcon className="w-6 h-6 text-green-600" />
                Network & connectivity infrastructure
              </li>
            </ul>
          </div>

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/recreation/technology.jpg"
              alt="Gym Audio Visual Systems"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         ACTIVE SPACES
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          {/* IMAGE 3 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/recreation/space.jpg"
              alt="Group Fitness Studio Technology"
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>

          <div data-aos className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Spaces Built for Performance
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From fitness studios and training zones to
              multi-purpose recreational centers, our solutions
              scale effortlessly while supporting motivation,
              safety and operational reliability.
            </p>
          </div>

        </div>
      </section>

      {/* ===============================
         CTA — POSITIVE ENERGY
      =============================== */}
      <section className="bg-green-600 py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Power Better Fitness Experiences
          </h2>
          <p className="mt-6 text-green-100">
            Create recreational and gym environments that
            inspire movement, energy and lasting engagement.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
