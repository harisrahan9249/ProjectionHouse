'use client';

import { useEffect } from 'react';
import {
  HomeModernIcon,
  SparklesIcon,
  TvIcon,
  SpeakerWaveIcon,
  CpuChipIcon,
  UserGroupIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function HotelsHospitality() {

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
          transform: translateY(22px);
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
         HERO — THE GUEST EXPERIENCE
      =============================== */}
      <section className="pt-44 pb-36 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-6">
              Hospitality, Leisure & Entertainment
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Hotels &
              <span className="block text-green-600">
                Hospitality
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
              Create memorable guest experiences through intelligent
              hospitality technology that enhances comfort, ambiance
              and service — from arrival to departure.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/hospitality/hero.jpg"
              alt="Luxury Hotel Interior Technology"
              className="w-full h-[460px] object-cover rounded-[3rem] shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         THE HOSPITALITY JOURNEY
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Designed Around the Guest Journey
          </h2>

          <div className="mt-20 grid lg:grid-cols-4 gap-12">

            {[
              {
                icon: SparklesIcon,
                title: 'First Impressions',
                text: 'Immersive lobbies, digital signage and ambient lighting.',
              },
              {
                icon: HomeModernIcon,
                title: 'In-Room Comfort',
                text: 'Smart rooms with intuitive control and entertainment.',
              },
              {
                icon: UserGroupIcon,
                title: 'Shared Experiences',
                text: 'AV systems for lounges, restaurants and event spaces.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Safety & Reliability',
                text: 'Secure, compliant systems supporting 24/7 operations.',
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
         SOLUTIONS + IMAGE
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Integrated Hospitality Solutions
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House delivers end-to-end hospitality
              technology solutions that blend seamlessly into
              hotel environments — enhancing experience without
              disrupting aesthetics.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <TvIcon className="w-6 h-6 text-green-600" />
                In-room entertainment & IPTV
              </li>
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                Background music & public area AV
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Smart room control & automation
              </li>
              <li className="flex gap-3">
                <GlobeAltIcon className="w-6 h-6 text-green-600" />
                Network, Wi-Fi & guest connectivity
              </li>
            </ul>
          </div>

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/hospitality/room.jpg"
              alt="Smart Hotel Room Technology"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         HOSPITALITY SPACES
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          {/* IMAGE 3 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/hospitality/lounge.jpg"
              alt="Hotel Lounge and Public Area AV"
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>

          <div data-aos className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Spaces That Create Lasting Impressions
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From luxury hotels and resorts to serviced apartments
              and boutique hospitality venues, our solutions adapt
              to brand identity while delivering consistency,
              comfort and operational efficiency.
            </p>
          </div>

        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-green-600 py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Elevate Every Guest Experience
          </h2>
          <p className="mt-6 text-green-100">
            Deliver memorable hospitality environments powered
            by intelligent, discreet and reliable technology.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
