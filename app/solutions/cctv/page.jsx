'use client';

import { useEffect } from 'react';
import {
  VideoCameraIcon,
  EyeIcon,
  CpuChipIcon,
  ChartBarIcon,
  BuildingOffice2Icon,
  UsersIcon,
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function CCTVVideoAnalytics() {

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
            opacity 900ms cubic-bezier(0.19,1,0.22,1),
            transform 900ms cubic-bezier(0.19,1,0.22,1);
        }
        .aos-on {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===============================
         HERO — VISIBILITY & INSIGHT
      =============================== */}
      <section className="pt-44 pb-36 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-500 mb-4">
              Smart Surveillance Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              CCTV &
              <span className="block text-green-600">
                Video Analytics
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-700 leading-relaxed max-w-xl">
              Transform traditional surveillance into intelligent, data-driven
              security systems with AI-powered video analytics, real-time
              insights and centralized monitoring.
            </p>
          </div>

          <div data-aos className="lg:col-span-6">
            <img
              src="/image/cctv/hero.jpg"
              alt="CCTV Video Analytics"
              className="w-full h-[460px] object-cover rounded-[3rem] shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         WHY VIDEO ANALYTICS
      =============================== */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-3 gap-16">

          {[
            {
              icon: EyeIcon,
              title: 'Beyond Monitoring',
              text: 'Modern CCTV systems go beyond recording, delivering real-time intelligence and actionable insights.',
            },
            {
              icon: CpuChipIcon,
              title: 'AI-Powered Analysis',
              text: 'Advanced analytics identify patterns, anomalies, and behaviors automatically.',
            },
            {
              icon: ChartBarIcon,
              title: 'Operational Insights',
              text: 'Video data helps improve safety, efficiency, and decision-making across operations.',
            },
          ].map((item, index) => (
            <div
              key={index}
              data-aos
              className="p-12 rounded-3xl bg-gray-50 hover:bg-white
                         shadow-sm hover:shadow-xl transition"
            >
              <item.icon className="w-12 h-12 text-green-600" />
              <h3 className="mt-8 text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-700 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ===============================
         SOLUTION OVERVIEW
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Intelligent CCTV & Analytics Platform
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House designs and deploys scalable CCTV systems
              integrated with AI-driven analytics — enabling proactive
              surveillance, real-time alerts, and centralized visibility.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <VideoCameraIcon className="w-6 h-6 text-green-600" />
                High-definition IP & thermal cameras
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                AI-based video analytics & object detection
              </li>
              <li className="flex gap-3">
                <ClockIcon className="w-6 h-6 text-green-600" />
                Real-time alerts & incident tracking
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Secure storage, access control & compliance
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/cctv/overview.jpg"
              alt="Video Analytics Dashboard"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         USE CASES
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            CCTV & Video Analytics For
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: BuildingOffice2Icon, label: 'Commercial Buildings' },
              { icon: UsersIcon, label: 'Retail & Public Spaces' },
              { icon: TruckIcon, label: 'Logistics & Transportation' },
              { icon: ShieldCheckIcon, label: 'Critical Infrastructure' },
            ].map((item, index) => (
              <div
                key={index}
                data-aos
                className="text-center p-10 rounded-2xl
                           bg-gray-50 hover:bg-white
                           hover:shadow-lg transition"
              >
                <item.icon className="w-14 h-14 mx-auto text-green-600" />
                <p className="mt-6 font-medium text-gray-900">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         SERVICES LIFECYCLE
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <img
              src="/image/cctv/services.jpg"
              alt="CCTV Installation & Analytics"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End CCTV Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              From design and deployment to analytics tuning and ongoing
              support, Projection House delivers fully managed CCTV
              and video intelligence solutions.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ChartBarIcon className="w-6 h-6 text-green-600" />
                Site assessment & system design
              </li>
              <li className="flex gap-3">
                <VideoCameraIcon className="w-6 h-6 text-green-600" />
                Camera installation & integration
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Analytics configuration & optimization
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Monitoring, maintenance & support
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-white py-36">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Turn Surveillance Into Intelligence
          </h2>
          <p className="mt-6 text-gray-600">
            Discover how AI-powered CCTV and video analytics can enhance
            safety, efficiency and operational visibility across your spaces.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
