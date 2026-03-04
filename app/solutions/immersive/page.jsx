'use client';

import { useEffect } from 'react';
import {
  SparklesIcon,
  EyeIcon,
  CpuChipIcon,
  ArrowsPointingOutIcon,
  UsersIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ImmersiveExperiences() {

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
          transform: translateY(24px);
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
         HERO — ENTER THE EXPERIENCE
      =============================== */}
      <section className="pt-44 pb-36 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-6">
              Experiential Technology
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Immersive
              <span className="block text-green-500">
                Experiences
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-xl">
              Transform spaces into unforgettable experiences through
              immersive audio-visual environments that engage,
              inspire and connect people emotionally.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/immersive/hero.jpg"
              alt="Immersive Experience Environment"
              className="w-full h-[460px] object-cover rounded-[3rem] shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         WHAT MAKES IT IMMERSIVE
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            More Than Technology — It’s an Experience
          </h2>

          <div className="mt-20 grid lg:grid-cols-4 gap-12">

            {[
              {
                icon: EyeIcon,
                title: 'Visual Immersion',
                text: 'Large-scale displays, projection mapping and LED surfaces.',
              },
              {
                icon: SparklesIcon,
                title: 'Sensory Engagement',
                text: 'Light, sound and motion designed to trigger emotional response.',
              },
              {
                icon: ArrowsPointingOutIcon,
                title: 'Spatial Design',
                text: 'Technology blended seamlessly into architectural spaces.',
              },
              {
                icon: CpuChipIcon,
                title: 'Intelligent Control',
                text: 'Synchronized systems responding dynamically to content.',
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos
                className="p-10 rounded-2xl bg-gray-50
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
         EXPERIENCE IN ACTION
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/immersive/environment.jpg"
              alt="Immersive Digital Environment"
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>

          <div data-aos className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Designed to Captivate Audiences
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From museums and experience centers to brand activations
              and corporate showcases, immersive environments turn
              visitors into participants.
            </p>
          </div>

        </div>
      </section>

      {/* ===============================
         APPLICATIONS + IMAGE
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          <div data-aos className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Where Immersion Creates Impact
            </h2>

            <ul className="mt-10 space-y-5 text-gray-700">
              <li className="flex gap-3">
                <BuildingOffice2Icon className="w-6 h-6 text-green-600" />
                Brand experience centers & showrooms
              </li>
              <li className="flex gap-3">
                <AcademicCapIcon className="w-6 h-6 text-green-600" />
                Museums, exhibitions & education
              </li>
              <li className="flex gap-3">
                <UsersIcon className="w-6 h-6 text-green-600" />
                Entertainment & cultural venues
              </li>
              <li className="flex gap-3">
                <GlobeAltIcon className="w-6 h-6 text-green-600" />
                Public attractions & destination spaces
              </li>
            </ul>
          </div>

          {/* IMAGE 3 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/immersive/application.jpg"
              alt="Immersive Experience Installation"
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         CTA — EMOTIONAL CLOSE
      =============================== */}
      <section className="bg-black py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Create Experiences People Remember
          </h2>
          <p className="mt-6 text-gray-300">
            Bring stories to life through immersive environments that
            connect technology, space and emotion.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
