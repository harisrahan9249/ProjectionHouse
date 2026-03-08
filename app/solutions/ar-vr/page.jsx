'use client';

import { useEffect } from 'react';
import {
  CubeTransparentIcon,
  CpuChipIcon,
  PresentationChartBarIcon,
  EyeIcon,
  GlobeAltIcon,
  BuildingOffice2Icon,
  AcademicCapIcon,
  ShoppingBagIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function ARVRPage() {

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
          transform: translateY(32px);
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
         HERO
      =============================== */}
      <section className="pt-44 pb-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div data-aos className="max-w-4xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Immersive Training & Visualization Technologies
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              AR / VR /
              <span className="block text-green-600">
                Simulation Systems
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and deploys immersive
              augmented reality, virtual reality and simulation
              platforms that transform training, operations,
              visualization and customer engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         SOLUTIONS
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {[
            {
              icon: EyeIcon,
              title: 'Virtual Reality Training Simulators',
              text: 'High-fidelity VR environments for safety drills, industrial training and emergency response.',
              image: '/image/arvr/vr-training.jpg',
            },
            {
              icon: CubeTransparentIcon,
              title: 'Augmented Reality Workflows',
              text: 'Overlay digital instructions, BIM data and remote assistance onto physical spaces.',
              image: '/image/arvr/ar-overlay.jpg',
            },
            {
              icon: PresentationChartBarIcon,
              title: 'Immersive Visualization Suites',
              text: 'CAVE systems, immersive rooms and domes for design reviews and data exploration.',
              image: '/image/arvr/visualization.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'Simulation Engines & Digital Twins',
              text: 'Physics-based environments modeling real-world operations and infrastructure.',
              image: '/image/arvr/simulation.jpg',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Secure Enterprise XR Platforms',
              text: 'Private-cloud deployments, cybersecurity-hardened XR networks and access controls.',
              image: '/image/arvr/security.jpg',
            },
          ].map((item, index) => (
            <div
              key={item.title}
              data-aos
              className={`grid lg:grid-cols-2 gap-20 items-center ${
                index % 2 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 ? 'lg:col-start-2' : ''}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[320px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="max-w-xl">
                <item.icon className="w-10 h-10 text-green-600" />
                <h3 className="mt-5 text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ===============================
         INDUSTRIES
      =============================== */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900">
            Immersive Solutions For
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: AcademicCapIcon, label: 'Training & Education' },
              { icon: GlobeAltIcon, label: 'Defense & Emergency Response' },
              { icon: BuildingOffice2Icon, label: 'Engineering & Construction' },
              { icon: ShoppingBagIcon, label: 'Retail Experiences' },
            ].map(item => (
              <div
                key={item.label}
                data-aos
                className="flex items-center gap-4 p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
              >
                <item.icon className="w-8 h-8 text-green-600" />
                <p className="font-medium text-gray-900">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===============================
         SERVICES
      =============================== */}
      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24">
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End XR Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House manages immersive programs
              from use-case definition through deployment
              and long-term operational support.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Experience design & feasibility studies
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Platform engineering & integration
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Hardware installation & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Cybersecurity, AMC & lifecycle services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/arvr/services.jpg"
              alt="AR VR Services"
              className="w-full h-[360px] object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-green-600 py-32 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Build the Future With Immersive Technology
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House to deploy enterprise-grade
            AR, VR and simulation platforms.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
