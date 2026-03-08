'use client';

import { useEffect } from 'react';
import {
  FilmIcon,
  SpeakerWaveIcon,
  TvIcon,
  CpuChipIcon,
  HomeModernIcon,
  WifiIcon,
  MusicalNoteIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function HomeEntertainmentSolution() {

  /* ===============================
     SOFT LIFESTYLE AOS
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
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      {/* ===== AOS STYLES (SOFT & LUXURY) ===== */}
      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(28px);
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
         HERO — IMMERSIVE LIFESTYLE
      =============================== */}
      <section className="pt-48 pb-40 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          
          <div data-aos className="max-w-xl">
            <p className="text-xs tracking-[0.4em] uppercase text-green-400 mb-4">
              Luxury Residential Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Home Entertainment
              <span className="block text-green-400">
                Solutions
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-300 leading-relaxed">
              Transform your living space into an immersive entertainment
              experience. Projection House designs bespoke home entertainment
              solutions that bring cinema-quality visuals, rich audio and
              intelligent control into the comfort of your home.
            </p>
          </div>

          <div data-aos>
            <img
              src="/image/home-entertainment/hero.jpg"
              alt="Luxury Home Entertainment"
              className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         EXPERIENCE — STORYTELLING
      =============================== */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">
          
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/home-entertainment/experience.jpg"
              alt="Home Cinema Experience"
              className="w-full h-[460px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div data-aos className="lg:col-span-6 max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-900">
              Entertainment That Feels Personal
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Every home is unique — and so is every entertainment system
              we design. From private home cinemas to living room AV
              systems and whole-home audio, our solutions are tailored
              to your lifestyle, interior design and personal preferences.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• Bespoke home cinema rooms</li>
              <li>• Living room & lounge AV systems</li>
              <li>• Multi-room audio & video</li>
              <li>• Seamless integration with interiors</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTION SECTIONS — SOFT CARDS
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Our Home Entertainment Solutions
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {[
              {
                icon: FilmIcon,
                title: 'Home Cinema Rooms',
                text: 'Dedicated cinema rooms with projection, surround sound and acoustic treatment.',
                image: '/image/home-entertainment/cinema.jpg',
              },
              {
                icon: TvIcon,
                title: 'Premium Displays & Projectors',
                text: 'Large-format TVs, laser projectors and hidden display solutions.',
                image: '/image/home-entertainment/display.jpg',
              },
              {
                icon: SpeakerWaveIcon,
                title: 'Surround Sound & Audio Systems',
                text: 'Immersive Dolby Atmos and multi-channel audio systems.',
                image: '/image/home-entertainment/audio.jpg',
              },
              {
                icon: MusicalNoteIcon,
                title: 'Multi-Room Audio',
                text: 'Music throughout your home with zoned control.',
                image: '/image/home-entertainment/multiroom.jpg',
              },
              {
                icon: CpuChipIcon,
                title: 'Smart Control & Automation',
                text: 'One-touch control of entertainment, lighting and ambience.',
                image: '/image/home-entertainment/control.jpg',
              },
              {
                icon: WifiIcon,
                title: 'Network & Streaming',
                text: 'High-performance networks supporting streaming and gaming.',
                image: '/image/home-entertainment/network.jpg',
              },
            ].map(item => (
              <div
                key={item.title}
                data-aos
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />
                <div className="p-8">
                  <item.icon className="w-10 h-10 text-green-600" />
                  <h3 className="mt-4 font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         WHY US — TRUST & QUALITY
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Designed. Integrated. Perfected.
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              With deep expertise in AV, acoustics and smart technologies,
              Projection House delivers home entertainment systems that
              are intuitive, reliable and future-ready.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li>• Consultation & lifestyle assessment</li>
              <li>• Custom design & visualization</li>
              <li>• Professional installation & calibration</li>
              <li>• Ongoing support & upgrades</li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-6" data-aos>
            <img
              src="/image/home-entertainment/detail1.jpg"
              alt="Luxury home AV"
              className="rounded-2xl object-cover h-40"
            />
            <img
              src="/image/home-entertainment/detail2.jpg"
              alt="Home cinema seating"
              className="rounded-2xl object-cover h-40"
            />
            <img
              src="/image/home-entertainment/detail3.jpg"
              alt="Hidden speakers"
              className="rounded-2xl object-cover h-40"
            />
            <img
              src="/image/home-entertainment/detail4.jpg"
              alt="Smart home control"
              className="rounded-2xl object-cover h-40"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         SERVICES — RESIDENTIAL
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            End-to-End Home Entertainment Services
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: ClipboardDocumentCheckIcon,
                title: 'Design & Planning',
                text: 'System design aligned with architecture and interiors.',
              },
              {
                icon: WrenchScrewdriverIcon,
                title: 'Installation',
                text: 'Clean, precise installation with attention to detail.',
              },
              {
                icon: CpuChipIcon,
                title: 'Calibration',
                text: 'Audio & video tuning for optimal performance.',
              },
              {
                icon: HomeModernIcon,
                title: 'Support',
                text: 'Maintenance, upgrades and ongoing assistance.',
              },
            ].map(item => (
              <div key={item.title} data-aos className="bg-white p-8 rounded-xl shadow-sm">
                <item.icon className="w-10 h-10 text-green-600" />
                <h3 className="mt-4 font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-700">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         CTA — LUXURY TONE
      =============================== */}
      <section className="bg-black py-36 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Elevate Entertainment at Home
          </h2>
          <p className="mt-6 text-gray-400">
            Experience cinema, music and smart living — perfectly
            integrated by Projection House.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
