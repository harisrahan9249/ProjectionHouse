'use client';

import { useEffect } from 'react';
import {
  BuildingOffice2Icon,
  UserGroupIcon,
  PresentationChartLineIcon,
  CpuChipIcon,
  VideoCameraIcon,
  SpeakerWaveIcon,
  ShieldCheckIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CorporateOffices() {

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
         HERO — SMART WORKPLACES
      =============================== */}
      <section className="pt-44 pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-5">
              Corporate & Enterprise Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900">
              Corporate
              <span className="block text-green-600">
                Offices
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-xl">
              Create intelligent, connected workplaces that enhance
              collaboration, productivity and employee experience
              across modern corporate environments.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/corporate/hero.jpg"
              alt="Modern Corporate Office Technology"
              className="w-full h-[460px] object-cover rounded-[3rem] shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         WORKPLACE EXPERIENCE
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">

          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Designed for the Modern Workplace
          </h2>

          <div className="mt-20 grid lg:grid-cols-4 gap-12">

            {[
              {
                icon: UserGroupIcon,
                title: 'Collaboration',
                text: 'Technology that brings teams together seamlessly.',
              },
              {
                icon: PresentationChartLineIcon,
                title: 'Productivity',
                text: 'Tools that support focused work and efficient meetings.',
              },
              {
                icon: GlobeAltIcon,
                title: 'Hybrid Work',
                text: 'Enable remote and in-office teams to work as one.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Secure Operations',
                text: 'Enterprise-grade security and access control.',
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

          {/* IMAGE 2 */}
          <div data-aos className="lg:col-span-6">
            <img
              src="/image/corporate/solutions.jpg"
              alt="Corporate Office AV & Collaboration"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          <div data-aos className="lg:col-span-6">
            <h2 className="text-3xl font-semibold text-gray-900">
              Integrated Corporate Solutions
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House delivers fully integrated office
              technology solutions — combining AV, IT, collaboration
              and security systems into a unified workplace experience.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <VideoCameraIcon className="w-6 h-6 text-green-600" />
                Conference & meeting room systems
              </li>
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                Audio, video & presentation technologies
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Smart workplace automation & control
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Access control, surveillance & compliance
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===============================
         CORPORATE SPACES
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          {/* IMAGE 3 */}
          <div data-aos className="lg:col-span-7">
            <img
              src="/image/corporate/workspace.jpg"
              alt="Corporate Office Workspace"
              className="w-full h-[420px] object-cover rounded-[2.5rem] shadow-xl"
            />
          </div>

          <div data-aos className="lg:col-span-5">
            <h2 className="text-3xl font-semibold text-gray-900">
              Spaces That Support Performance
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From boardrooms and collaboration areas to executive
              offices and open workspaces, our solutions are tailored
              to support performance, comfort and scalability.
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
            Build Smarter, More Connected Offices
          </h2>
          <p className="mt-6 text-green-100">
            Transform corporate workplaces with technology designed
            to support collaboration, productivity and growth.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
