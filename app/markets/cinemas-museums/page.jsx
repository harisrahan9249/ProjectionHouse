'use client';

import { useEffect } from 'react';
import {
  FilmIcon,
  SparklesIcon,
  EyeIcon,
  SpeakerWaveIcon,
  CpuChipIcon,
  UserGroupIcon,
  AcademicCapIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function CinemasMuseumsAquariums() {

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
         HERO — ENTER THE STORY
      =============================== */}
      <section className="pt-44 pb-36 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-6">
              Hospitality, Leisure & Entertainment
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Cinemas, Museums
              <span className="block text-green-500">
                & Aquariums
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-300 leading-relaxed max-w-xl">
              Create powerful shared experiences through immersive
              audio-visual environments that educate, entertain
              and inspire audiences of all ages.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/culture/hero.jpg"
              alt="Immersive Cinema and Museum Experience"
              className="w-full h-[460px] object-cover rounded-[3rem] shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         THE EXPERIENCE FLOW
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Designed for Audience Engagement
          </h2>

          <div className="mt-20 grid lg:grid-cols-4 gap-12">

            {[
              {
                icon: EyeIcon,
                title: 'Visual Storytelling',
                text: 'High-resolution projection, LED displays and interactive visuals.',
              },
              {
                icon: SpeakerWaveIcon,
                title: 'Immersive Sound',
                text: 'Surround sound and acoustic design for emotional impact.',
              },
              {
                icon: SparklesIcon,
                title: 'Interactive Discovery',
                text: 'Hands-on exhibits and responsive digital installations.',
              },
              {
                icon: UserGroupIcon,
                title: 'Shared Moments',
                text: 'Spaces designed for collective experience and learning.',
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
         TECHNOLOGY + IMAGE
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Technology That Brings Stories to Life
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House delivers integrated AV and experience
              technologies that support cinematic presentation,
              educational storytelling and immersive environments.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <FilmIcon className="w-6 h-6 text-green-600" />
                Cinema projection & large-format displays
              </li>
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                Surround sound & spatial audio systems
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Interactive control & content systems
              </li>
              <li className="flex gap-3">
                <AcademicCapIcon className="w-6 h-6 text-green-600" />
                Educational & interpretive technologies
              </li>
            </ul>
          </div>

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/culture/exhibit.jpg"
              alt="Interactive Museum Exhibit"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         VENUE TYPES
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          {/* IMAGE 3 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/culture/aquarium.jpg"
              alt="Aquarium Immersive Display"
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>

          <div data-aos className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Spaces Designed to Inspire Wonder
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From cinemas and IMAX theaters to museums, galleries
              and aquariums, our solutions adapt to diverse venues
              while maintaining narrative clarity and emotional impact.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li className="flex gap-3">
                <FilmIcon className="w-5 h-5 text-green-600" />
                Cinemas & theaters
              </li>
              <li className="flex gap-3">
                <AcademicCapIcon className="w-5 h-5 text-green-600" />
                Museums & science centers
              </li>
              <li className="flex gap-3">
                <GlobeAltIcon className="w-5 h-5 text-green-600" />
                Aquariums & themed attractions
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===============================
         CTA — CULTURAL IMPACT
      =============================== */}
      <section className="bg-black py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Turn Every Visit into a Memorable Experience
          </h2>
          <p className="mt-6 text-gray-300">
            Design immersive cultural and entertainment spaces that
            educate, engage and inspire audiences.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
