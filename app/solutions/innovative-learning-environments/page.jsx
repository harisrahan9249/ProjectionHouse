'use client';

import { useEffect } from 'react';
import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function InnovativeLearningEnvironments() {

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
      { threshold: 0.18, rootMargin: '0px 0px -140px 0px' }
    );

    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: 'Interactive Kiosks & Digital Posters',
      text: 'Dynamic platforms that transform school lobbies, corridors, and common areas into interactive information hubs—enhancing communication, engagement, and institutional branding.',
      image: '/image/innovativelearning/kios.jpg',
    },
    {
      title: 'Interactive LED Displays & Smartboards',
      text: 'Touch-enabled displays that support real-time collaboration, annotation, and multimedia learning—designed to elevate classroom participation and teaching effectiveness.',
      image: '/image/innovativelearning/interactive-led.jpg',
    },
    {
      title: 'Interactive Whiteboards',
      text: 'Advanced whiteboard solutions enabling seamless content sharing, annotation, and multi-user interaction—bridging traditional teaching with digital innovation.',
      image: '/image/innovativelearning/whiteboard.jpg',
    },
    {
      title: 'Document Cameras',
      text: 'High-definition document cameras that project books, objects, and handwritten content with exceptional clarity—ideal for demonstrations and visual learning.',
      image: '/image/innovativelearning/document-camera.jpg',
    },
    {
      title: 'Classroom Software Platforms',
      text: 'Integrated learning and classroom management software supporting hybrid, remote, and in-person education through collaboration, analytics, and assessment tools.',
      image: '/image/innovativelearning/classroom-software.jpg',
    },
    {
      title: 'Tablets & Learning Devices',
      text: 'Education-ready tablets and laptops enabling mobile, personalized learning—securely configured for institutional control and long-term scalability.',
      image: '/image/innovativelearning/tablets-laptops.jpg',
    },
    {
      title: 'Auditorium & Lecture Hall AV',
      text: 'High-performance AV systems for auditoriums and large learning spaces, integrating projection, sound, lighting, and streaming for impactful presentations.',
      image: '/image/innovativelearning/auditorium.jpg',
    },
    {
      title: 'Smart Sensors & Safety Systems',
      text: 'Intelligent monitoring solutions such as air-quality and safety sensors that enhance campus wellbeing and provide real-time alerts to administrators.',
      image: '/image/innovativelearning/smart-sensors.jpg',
    },
    {
      title: 'Class VR (Virtual Reality)',
      text: 'Immersive, curriculum-aligned VR experiences that allow students to explore complex concepts through simulation, storytelling, and experiential learning.',
      image: '/image/innovativelearning/class-vr.jpg',
    },
    {
      title: 'Swivl Camera Systems',
      text: 'AI-powered camera systems that track educators, enabling high-quality lesson capture, live streaming, and professional development.',
      image: '/image/innovativelearning/swivl.jpg',
    },
    {
      title: 'Active Floor Learning',
      text: 'Interactive floor projection solutions that encourage movement-based learning, collaboration, and sensory engagement—ideal for early education environments.',
      image: '/image/innovativelearning/active-floor.jpg',
    },
  ];

  return (
    <>
      <Header />

      {/* ===== AOS STYLES ===== */}
      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(48px);
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
         HERO — LUXURY & LIGHT
      =============================== */}
      <section className="pt-44 pb-36 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-24 items-center">
          <div data-aos>
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Education Solutions
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
              Innovative Learning
              <span className="block text-green-600 font-semibold">
                Environments
              </span>
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              We design future-ready learning environments that empower
              educators, engage students, and support institutional
              transformation through intelligent AV, interactive, and
              digital technologies.
            </p>
          </div>

          <div data-aos>
            <img
              src="/image/innovativelearning/hero.jpg"
              alt="Innovative Learning Environments"
              className="w-full h-[460px] object-cover rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* ===============================
         FEATURE SECTIONS — EDITORIAL
      =============================== */}
      <section className="bg-white py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-40">

          {features.map((item, index) => (
            <div
              key={item.title}
              data-aos
              className={`grid lg:grid-cols-2 gap-24 items-center ${
                index % 2 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              <div className={index % 2 ? 'lg:col-start-2' : ''}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[380px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              <div className="max-w-xl">
                <h2 className="text-3xl font-semibold text-gray-900">
                  {item.title}
                </h2>
                <p className="mt-6 text-gray-700 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* ===============================
         FOOTER
      =============================== */}
      <Footer />
    </>
  );
}
