'use client';

import { useEffect } from 'react';
import {
  TvIcon,
  SpeakerWaveIcon,
  CpuChipIcon,
  SignalIcon,
  PresentationChartBarIcon,
  BuildingOffice2Icon,
  ShoppingBagIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
  TruckIcon,
  BoltIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function DriveThruPage() {

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
              Quick-Service Retail Technologies
            </p>
            <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
              Drive-Thru
              <span className="block text-green-600">
                Solutions
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House designs and delivers intelligent
              drive-thru systems that increase order accuracy,
              throughput and customer satisfaction for modern
              QSR and retail brands.
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
              icon: TvIcon,
              title: 'Digital Menu Boards',
              text: 'High-brightness outdoor LED displays with dynamic pricing, promotions and real-time menu updates.',
              image: '/image/drivethru/menu.jpg',
            },
            {
              icon: SpeakerWaveIcon,
              title: 'Order Point Audio Systems',
              text: 'Crystal-clear intercoms and noise-cancelling microphones for flawless customer communication.',
              image: '/image/drivethru/audio.jpg',
            },
            {
              icon: CpuChipIcon,
              title: 'AI Ordering & Recognition',
              text: 'Voice AI, license plate recognition and predictive upselling to optimize speed and revenue.',
              image: '/image/drivethru/ai.jpg',
            },
            {
              icon: SignalIcon,
              title: 'Lane Management & AV-over-IP',
              text: 'Multi-lane routing, queue analytics and centralized system control platforms.',
              image: '/image/drivethru/lane.jpg',
            },
            {
              icon: PresentationChartBarIcon,
              title: 'Analytics & POS Integration',
              text: 'Real-time dashboards tracking throughput, conversion and service performance.',
              image: '/image/drivethru/analytics.jpg',
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
            Designed For
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShoppingBagIcon, label: 'Quick-Service Restaurants' },
              { icon: TruckIcon, label: 'Multi-Lane Drive-Thrus' },
              { icon: BuildingOffice2Icon, label: 'Retail & Fuel Stations' },
              { icon: BoltIcon, label: 'High-Volume Locations' },
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
              End-to-End Delivery
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House provides turnkey drive-thru
              technology programs from concept design through
              rollout and long-term support.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Consultancy, lane planning & approvals
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Systems architecture & POS integration
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation, testing & commissioning
              </li>
              <li className="flex gap-3">
                <SpeakerWaveIcon className="w-6 h-6 text-green-600" />
                AMC, SLA & managed services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/drivethru/services.jpg"
              alt="Drive-Thru Services"
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
            Build Faster, Smarter Drive-Thru Experiences
          </h2>
          <p className="mt-6 text-green-100">
            Let Projection House help you deploy scalable,
            data-driven drive-thru systems across your network.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
