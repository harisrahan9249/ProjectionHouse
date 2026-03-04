'use client';

import { useEffect } from 'react';
import {
  AcademicCapIcon,
  PresentationChartBarIcon,
  TvIcon,
  SpeakerWaveIcon,
  CpuChipIcon,
  UsersIcon,
  HandRaisedIcon,
  GlobeAltIcon,
  ClipboardDocumentCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ActiveClassroomSolution() {

  /* ===============================
     EDUCATION-FOCUSED AOS
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
         HERO — BRIGHT & ENERGETIC
      =============================== */}
      <section className="pt-44 pb-32 bg-gradient-to-b from-white via-green-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-20 items-center">

          <div data-aos className="lg:col-span-7">
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Education Technology Solutions
            </p>
            <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight">
              Active Classroom
              <span className="block text-green-600">
                Solutions
              </span>
            </h1>
            <p className="mt-8 text-xl text-gray-700 leading-relaxed max-w-2xl">
              Projection House delivers Active Classroom Solutions that
              transform traditional learning spaces into dynamic,
              collaborative and interactive environments — enhancing
              student engagement and teaching effectiveness.
            </p>
          </div>

          <div data-aos className="lg:col-span-5">
            <img
              src="/image/active-classroom/hero.jpg"
              alt="Active Classroom Solution"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         WHAT IS AN ACTIVE CLASSROOM
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <img
              src="/image/active-classroom/overview.jpg"
              alt="Interactive Classroom Environment"
              className="w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Learning That Encourages Participation
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Active classrooms promote collaboration, discussion and
              hands-on learning. By integrating interactive displays,
              audio systems, collaboration tools and flexible layouts,
              we enable educators to engage students more effectively.
            </p>

            <ul className="mt-8 space-y-3 text-gray-700">
              <li>• Student-centered learning environments</li>
              <li>• Interactive teaching & real-time feedback</li>
              <li>• Seamless hybrid & digital learning support</li>
              <li>• Flexible classroom configurations</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ===============================
         ACTIVE CLASSROOM TECHNOLOGY STACK
      =============================== */}
      <section className="bg-gray-50 py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Active Classroom Technology Solutions
          </h2>

          <div className="mt-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
            {[
              {
                icon: TvIcon,
                title: 'Interactive Displays & Smart Boards',
                text: 'Touch-enabled displays for annotation, collaboration and multimedia learning.',
              },
              {
                icon: SpeakerWaveIcon,
                title: 'Classroom Audio Systems',
                text: 'Clear, evenly distributed audio for enhanced speech intelligibility.',
              },
              {
                icon: PresentationChartBarIcon,
                title: 'Wireless Collaboration',
                text: 'Screen sharing and content collaboration from student and teacher devices.',
              },
              {
                icon: HandRaisedIcon,
                title: 'Student Response Systems',
                text: 'Real-time polling, quizzes and feedback tools.',
              },
              {
                icon: CpuChipIcon,
                title: 'Control & Automation',
                text: 'Simple control of AV, lighting and classroom technology.',
              },
              {
                icon: GlobeAltIcon,
                title: 'Hybrid Learning Enablement',
                text: 'Support for online, hybrid and remote learning environments.',
              },
            ].map(item => (
              <div
                key={item.title}
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
         WHO IT’S FOR
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 data-aos className="text-3xl font-semibold text-gray-900 text-center">
            Active Classroom Solutions For
          </h2>

          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: AcademicCapIcon, label: 'Schools & K-12 Education' },
              { icon: UsersIcon, label: 'Universities & Colleges' },
              { icon: PresentationChartBarIcon, label: 'Training & Skill Centers' },
              { icon: GlobeAltIcon, label: 'Hybrid & Digital Learning' },
            ].map(item => (
              <div
                key={item.label}
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
         SERVICES — EDUCATION READY
      =============================== */}
      <section className="bg-gray-50 py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">

          <div data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              End-to-End Active Classroom Services
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              Projection House delivers complete education technology
              solutions — from classroom design to implementation and
              long-term support.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li className="flex gap-3">
                <ClipboardDocumentCheckIcon className="w-6 h-6 text-green-600" />
                Classroom planning & solution design
              </li>
              <li className="flex gap-3">
                <WrenchScrewdriverIcon className="w-6 h-6 text-green-600" />
                Installation & commissioning
              </li>
              <li className="flex gap-3">
                <CpuChipIcon className="w-6 h-6 text-green-600" />
                Integration with LMS & IT systems
              </li>
              <li className="flex gap-3">
                <UsersIcon className="w-6 h-6 text-green-600" />
                Training, AMC & ongoing support
              </li>
            </ul>
          </div>

          <div data-aos>
            <img
              src="/image/active-classroom/services.jpg"
              alt="Active Classroom Services"
              className="w-full h-[420px] object-cover rounded-3xl shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ===============================
         CTA — INSPIRATIONAL
      =============================== */}
      <section className="bg-green-600 py-36 text-white">
        <div data-aos className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold">
            Create Classrooms That Inspire Learning
          </h2>
          <p className="mt-6 text-green-100">
            Transform education spaces with interactive, engaging and
            future-ready Active Classroom Solutions by Projection House.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
