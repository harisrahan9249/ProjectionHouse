'use client';

import { useEffect } from 'react';
import {
  TvIcon,
  Squares2X2Icon,
  SunIcon,
  PresentationChartBarIcon,
  BuildingStorefrontIcon,
  BuildingOffice2Icon,
  TruckIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function LEDDisplaySolution() {

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
          transform: translateY(36px);
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
         HERO — LED IMPACT
      =============================== */}
      <section className="pt-48 pb-40 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-20">
          <div data-aos className="max-w-4xl">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Large-Scale Visual Communication
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              LED Display
              <span className="block text-green-600">
                Solutions
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-700 leading-relaxed">
              Projection House delivers state-of-the-art LED Display Solutions
              that transform visual communication across indoor and outdoor
              environments — delivering unmatched brightness, clarity,
              scalability and reliability.
            </p>
          </div>

          <div data-aos>
            <img
              src="/image/led/hero.jpg"
              alt="LED Display Solutions"
              className="w-full h-[620px] object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         LED SOLUTIONS OVERVIEW (PDF)
      =============================== */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-28 items-center">
          <div data-aos>
            <img
              src="/image/led/overview.jpg"
              alt="Indoor and Outdoor LED Displays"
              className="w-full h-[520px] object-cover rounded-3xl shadow-xl"
            />
          </div>

          <div data-aos className="max-w-xl">
            <h2 className="text-3xl font-semibold text-gray-900">
              Indoor & Outdoor LED Display Solutions
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Our LED display solutions are designed for a wide range of
              applications — from corporate environments and retail spaces
              to control rooms, hospitality venues, events and outdoor
              advertising.
            </p>

            <p className="mt-6 text-gray-700 leading-relaxed">
              Using high-resolution LED panels with seamless modular design,
              we deliver displays that offer vibrant colors, wide viewing
              angles, high brightness and long operational life.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
         LED DISPLAY TYPES (PDF CONTENT)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Our LED Display Solutions Include
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: TvIcon,
                title: 'Indoor LED Displays',
                text: 'Fine-pitch LED displays for corporate lobbies, meeting spaces, retail interiors and control rooms.',
              },
              {
                icon: SunIcon,
                title: 'Outdoor LED Displays',
                text: 'Weather-resistant, high-brightness LED displays for outdoor advertising and public venues.',
              },
              {
                icon: Squares2X2Icon,
                title: 'LED Video Walls',
                text: 'Large-scale seamless LED video walls for command centers, events and auditoriums.',
              },
              {
                icon: PresentationChartBarIcon,
                title: 'Digital Signage & Advertising',
                text: 'Dynamic LED signage for retail, hospitality and commercial branding.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Control Room LED Walls',
                text: 'Mission-critical LED walls designed for 24/7 operation and continuous monitoring.',
              },
              {
                icon: GlobeAltIcon,
                title: 'Custom LED Installations',
                text: 'Bespoke LED solutions tailored to architectural and operational requirements.',
              },
            ].map(item => (
              <div
                key={item.title}
                data-aos
                className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                <item.icon className="w-12 h-12 text-green-600" />
                <h3 className="mt-6 text-lg font-semibold text-gray-900">
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
         INDUSTRIES & APPLICATIONS (PDF)
      =============================== */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            LED Display Solutions For
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: BuildingStorefrontIcon, label: 'Retail & Shopping Malls' },
              { icon: BuildingOffice2Icon, label: 'Corporate & Business Centers' },
              { icon: TruckIcon, label: 'Airports & Transportation Hubs' },
              { icon: GlobeAltIcon, label: 'Outdoor Advertising & Public Spaces' },
              { icon: ShieldCheckIcon, label: 'Control Rooms & Command Centers' },
              { icon: PresentationChartBarIcon, label: 'Events & Exhibition Centers' },
              { icon: TvIcon, label: 'Hospitality & Entertainment Venues' },
              { icon: Squares2X2Icon, label: 'Museums & Experience Centers' },
            ].map(item => (
              <div
                key={item.label}
                data-aos
                className="text-center p-10 rounded-2xl bg-gray-50 shadow-sm hover:shadow-lg transition"
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
         END-TO-END SERVICES (PDF)
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End LED Display Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House delivers complete LED display projects —
              from design and engineering to installation, testing and
              long-term maintenance.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                LED design, layout & technical approvals
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Supply, installation & commissioning
              </li>
              <li className="flex gap-3">
                <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                Brightness calibration & performance testing
              </li>
              <li className="flex gap-3">
                <TvIcon className="w-6 h-6 text-green-600" />
                AMC, SLA & managed display services
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/led/services.jpg"
              alt="LED Display Services"
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
            Make Your Message Unmissable
          </h2>
          <p className="mt-6 text-green-100">
            Partner with Projection House for LED display solutions
            that captivate, inform and perform — indoors and outdoors.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
