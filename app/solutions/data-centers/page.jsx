'use client';

import { useEffect } from 'react';
import {
  CpuChipIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  BoltIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function DataCenterServerRoomSolution() {

  /* ===============================
     AOS (SAFE)
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
          transform: translateY(26px);
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
         HERO
      =============================== */}
      <section className="pt-44 pb-32 bg-gradient-to-b from-white via-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          <div data-aos className="lg:col-span-7">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              IT & ICT Infrastructure Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Data Centers &
              <span className="block text-green-600">
                Server Rooms
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-700 leading-relaxed max-w-2xl">
              Projection House designs and delivers secure, scalable and
              high-performance Data Center and Server Room solutions
              for mission-critical environments.
            </p>
          </div>

          <div data-aos className="lg:col-span-5">
            <img
              src="/image/data-centers/hero.jpg"
              alt="Data Center Infrastructure"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         OVERVIEW
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <img
              src="/image/data-centers/overview.jpg"
              alt="Server Room Design"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Built for Performance, Security & Continuity
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our solutions ensure high availability, optimized cooling,
              secure access and scalability — from compact server rooms
              to enterprise-grade data centers.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• High-availability infrastructure</li>
              <li>• Secure & compliant environments</li>
              <li>• Optimized power & cooling</li>
              <li>• Future-ready scalability</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===============================
         TECHNOLOGY STACK
      =============================== */}
      <section className="bg-gray-50 py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Data Center Technology Solutions
          </h2>

          <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {[
              {
                icon: ServerStackIcon,
                title: 'Server Racks & Containment',
                text: 'Structured rack systems with hot & cold aisle containment.',
              },
              {
                icon: BoltIcon,
                title: 'Power & UPS Systems',
                text: 'Redundant power distribution and backup solutions.',
              },
              {
                icon: CpuChipIcon,
                title: 'IT Infrastructure',
                text: 'Compute, storage and virtualization platforms.',
              },
              {
                icon: GlobeAltIcon,
                title: 'Network & Structured Cabling',
                text: 'Enterprise copper and fiber cabling.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Security Systems',
                text: 'Physical security, access control and monitoring.',
              },
              {
                icon: ClipboardDocumentCheckIcon,
                title: 'Monitoring & Compliance',
                text: 'Environmental monitoring and compliance reporting.',
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                <item.icon className="w-12 h-12 text-green-600" />
                <h3 className="mt-6 font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                  {item.text}
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
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Data Center Services
            </h2>

            <ul className="mt-10 space-y-4 text-gray-700">
              {[
                'Consultancy & design',
                'Supply, installation & integration',
                'Testing & commissioning',
                'Training, AMC & managed services',
              ].map((text, index) => (
                <li key={index} className="flex gap-3">
                  <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/data-centers/services.jpg"
              alt="Data Center Services"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-green-600 py-36 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Build Reliable, Future-Ready Data Centers
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House for secure and scalable
            Data Center & Server Room solutions.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
