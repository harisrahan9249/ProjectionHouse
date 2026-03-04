'use client';

import { useEffect } from 'react';
import {
  CloudIcon,
  GlobeAltIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  ArrowsRightLeftIcon,
  ClipboardDocumentCheckIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function CloudHybridConnectivity() {

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
          transform: translateY(28px);
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
         HERO — CLOUD FIRST
      =============================== */}
      <section className="pt-44 pb-36 bg-gradient-to-b from-white via-blue-50/40 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-24 items-center">

          <div data-aos className="lg:col-span-6">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Cloud & Connectivity Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Cloud & Hybrid
              <span className="block text-green-600">
                Connectivity
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-700 leading-relaxed max-w-xl">
              Projection House enables secure, scalable and high-performance
              cloud and hybrid connectivity — seamlessly integrating on-premise
              infrastructure with public and private cloud environments.
            </p>
          </div>

          <div data-aos className="lg:col-span-6">
            <img
              src="/image/cloud-hybrid/hero.jpg"
              alt="Cloud and Hybrid Connectivity"
              className="w-full h-[460px] object-cover rounded-[2.75rem] shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         WHAT MAKES HYBRID POWERFUL (NEW STYLE)
      =============================== */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-24">

          {[
            {
              icon: CloudIcon,
              title: 'Cloud Agility',
              text: 'Rapid scalability, flexibility and access to modern cloud services without compromising performance.',
            },
            {
              icon: ArrowsRightLeftIcon,
              title: 'Hybrid Integration',
              text: 'Seamless connectivity between on-premise systems and cloud platforms for optimized workloads.',
            },
            {
              icon: ShieldCheckIcon,
              title: 'Secure Connectivity',
              text: 'End-to-end encryption, secure tunnels and compliance-ready network architectures.',
            },
          ].map((item, index) => (
            <div
              key={index}
              data-aos
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              <div className="lg:col-span-4">
                <item.icon className="w-14 h-14 text-green-600" />
              </div>
              <div className="lg:col-span-8">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-700 leading-relaxed max-w-2xl">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ===============================
         SOLUTION SCOPE
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Comprehensive Cloud & Hybrid Connectivity
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our solutions enable organizations to modernize their
              IT environments while maintaining control, security
              and performance across distributed infrastructures.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <CloudIcon className="w-6 h-6 text-green-600" />
                Public, private & hybrid cloud integration
              </li>
              <li className="flex gap-3">
                <GlobeAltIcon className="w-6 h-6 text-green-600" />
                Secure WAN, SD-WAN & VPN connectivity
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Cloud workload optimization
              </li>
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Architecture design & documentation
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/cloud-hybrid/overview.jpg"
              alt="Hybrid Cloud Architecture"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         WHO IT’S FOR
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Cloud & Hybrid Connectivity For
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: UsersIcon, label: 'Enterprise Organizations' },
              { icon: CpuChipIcon, label: 'Data Centers & IT Environments' },
              { icon: GlobeAltIcon, label: 'Multi-Site Businesses' },
              { icon: ShieldCheckIcon, label: 'Government & Regulated Sectors' },
            ].map((item, index) => (
              <div
                key={index}
                data-aos
                className="text-center p-10 rounded-2xl bg-gray-50 hover:shadow-lg transition"
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
         SERVICES
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <img
              src="/image/cloud-hybrid/services.jpg"
              alt="Cloud Connectivity Services"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Cloud Connectivity Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House delivers complete cloud and hybrid
              connectivity solutions — from strategy and design
              to deployment, optimization and managed services.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Cloud readiness assessment & architecture
              </li>
              <li className="flex gap-3">
                <ArrowsRightLeftIcon className="w-6 h-6 text-green-600" />
                Hybrid integration & migration
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Security, compliance & optimization
              </li>
              <li className="flex gap-3">
                <UsersIcon className="w-6 h-6 text-green-600" />
                Managed services & ongoing support
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===============================
         CTA
      =============================== */}
      <section className="bg-green-600 py-36 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Connect Your Infrastructure to the Cloud — Securely
          </h2>
          <p className="mt-6 text-green-100">
            Transform your IT environment with flexible, secure and
            future-ready cloud and hybrid connectivity solutions.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
