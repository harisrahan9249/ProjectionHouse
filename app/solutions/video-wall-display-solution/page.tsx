'use client';

import { useEffect } from 'react';
import {
  Squares2X2Icon,
  TvIcon,
  EyeIcon,
  ChartBarIcon,
  BuildingOffice2Icon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function VideoWallDisplaySolution() {

  /* ===============================
     SMOOTH SHOWCASE AOS
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
          transform: translateY(30px) scale(0.98);
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
         HERO — TYPOGRAPHIC + VISUAL STRIP
      =============================== */}
      <section className="pt-44 pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
          <div data-aos className="max-w-xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">
              Large-Format Visualization
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Video Wall &
              <span className="block text-green-600">
                Display Solutions
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House delivers high-impact video wall and professional
              display solutions designed to inform, engage and immerse —
              across corporate, retail, control room and public environments.
            </p>
          </div>

          {/* VISUAL STRIP */}
          <div data-aos className="grid grid-cols-3 gap-4">
            <img
              src="/image/videowall/strip1.jpg"
              className="h-48 object-cover rounded-xl"
              alt=""
            />
            <img
              src="/image/videowall/strip2.jpg"
              className="h-48 object-cover rounded-xl"
              alt=""
            />
            <img
              src="/image/videowall/strip3.jpg"
              className="h-48 object-cover rounded-xl"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* ===============================
         EXPERIENCE BLOCK — SPLIT
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-16 items-center">
          
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/videowall/experience.jpg"
              alt="Video Wall Experience"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div data-aos className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Visual Experiences at Scale
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our video wall solutions combine seamless panels, advanced
              processing and intelligent content management to deliver
              immersive visual experiences — whether for monitoring,
              branding or storytelling.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• Ultra-narrow bezel LCD video walls</li>
              <li>• Fine-pitch LED video walls</li>
              <li>• 24/7 rated professional displays</li>
              <li>• Redundant controllers & processors</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTION TYPES — CARD GRID
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Video Wall & Display Solutions
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: Squares2X2Icon,
                title: 'LCD Video Walls',
                text: 'Ultra-narrow bezel LCD walls for control rooms and corporate environments.',
              },
              {
                icon: TvIcon,
                title: 'LED Video Walls',
                text: 'Seamless fine-pitch LED walls for premium and large-scale installations.',
              },
              {
                icon: EyeIcon,
                title: 'Control Room Displays',
                text: 'Mission-critical displays designed for continuous 24/7 operation.',
              },
              {
                icon: ChartBarIcon,
                title: 'Data Visualization Walls',
                text: 'Multi-source visualization for analytics, KPIs and monitoring.',
              },
              {
                icon: ShoppingBagIcon,
                title: 'Retail Experience Walls',
                text: 'Dynamic video walls enhancing customer engagement and branding.',
              },
              {
                icon: GlobeAltIcon,
                title: 'Public & Outdoor Displays',
                text: 'High-brightness displays for public spaces and outdoor visibility.',
              },
            ].map(item => (
              <div
                key={item.title}
                data-aos
                className="bg-gray-50 p-10 rounded-2xl hover:shadow-xl transition"
              >
                <item.icon className="w-12 h-12 text-green-600" />
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
         APPLICATIONS — ICON STRIP
      =============================== */}
      <section className="bg-green-600 py-24 text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { icon: ShieldCheckIcon, label: 'Control Rooms' },
              { icon: BuildingOffice2Icon, label: 'Corporate Lobbies' },
              { icon: ShoppingBagIcon, label: 'Retail & Malls' },
              { icon: GlobeAltIcon, label: 'Public Spaces' },
            ].map(item => (
              <div key={item.label} data-aos>
                <item.icon className="w-12 h-12 mx-auto text-white" />
                <p className="mt-4 font-medium">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         SERVICES — HORIZONTAL
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-4 gap-12">
          {[
            {
              icon: ClipboardDocumentCheckIcon,
              title: 'Design & Engineering',
              text: 'Layout design, pixel pitch selection and system engineering.',
            },
            {
              icon: WrenchScrewdriverIcon,
              title: 'Installation',
              text: 'Professional installation with precision alignment.',
            },
            {
              icon: TvIcon,
              title: 'Calibration & Testing',
              text: 'Brightness, color calibration and performance testing.',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Support & AMC',
              text: 'Ongoing support, maintenance and SLA-backed services.',
            },
          ].map(item => (
            <div key={item.title} data-aos className="text-center">
              <item.icon className="w-10 h-10 mx-auto text-green-600" />
              <h3 className="mt-4 font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===============================
         CTA — STRONG & CLEAN
      =============================== */}
      <section className="bg-gray-900 py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Bring Your Visual Story to Life
          </h2>
          <p className="mt-6 text-gray-400">
            Partner with Projection House for video wall and display
            solutions that scale beautifully and perform reliably.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
