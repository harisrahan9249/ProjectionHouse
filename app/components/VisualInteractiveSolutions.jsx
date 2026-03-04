'use client';

import { useEffect } from 'react';

export default function VisualInteractiveSolutions() {
  /* ===============================
     PREMIUM AOS (SAFE + SMOOTH)
  =============================== */
  useEffect(() => {
    const prefersReduced =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) return;

    const elements = document.querySelectorAll('[data-aos]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -120px 0px' }
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===== AOS STYLES ===== */}
      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(40px);
          transition:
            opacity 1100ms cubic-bezier(0.19,1,0.22,1),
            transform 1100ms cubic-bezier(0.19,1,0.22,1);
        }
        .aos-active {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===============================
         PAGE
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* ===============================
             INTRO
          =============================== */}
          <div className="max-w-3xl mb-24" data-aos>
            <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
              Solutions
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Visual & Interactive Solutions
            </h1>
            <p className="mt-8 text-lg text-gray-700 leading-relaxed">
              Projection House delivers innovative visual and interactive
              solutions designed to enhance communication, engagement, and
              information delivery across a wide range of environments.
              By combining advanced display technologies with intuitive
              interaction tools, we create impactful visual experiences
              that support business, education, and public sector needs.
            </p>
          </div>

          {/* ===============================
             DIGITAL SIGNAGE
          =============================== */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div data-aos>
              <img
                src="/image/visual-interactive/digital-signage.jpg"
                alt="Digital Signage Solutions"
                className="w-full h-[360px] object-cover rounded-2xl"
              />
            </div>
            <div data-aos>
              <h2 className="text-3xl font-semibold text-gray-900">
                Digital Signage Solutions
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Our digital signage solutions provide dynamic, real-time
                communication using high-quality displays and centralized
                content management platforms. Designed for both indoor and
                outdoor environments, these systems allow organisations to
                broadcast information, promotions, alerts, and branding
                with clarity and consistency.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Ideal for retail spaces, corporate lobbies, airports, hotels,
                healthcare facilities, and public venues, our signage
                solutions are scalable, reliable, and easy to manage.
              </p>
            </div>
          </div>

          {/* ===============================
             VIDEO WALLS
          =============================== */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="lg:order-2" data-aos>
              <img
                src="/image/visual-interactive/video-wall.jpg"
                alt="Video Wall Solutions"
                className="w-full h-[360px] object-cover rounded-2xl"
              />
            </div>
            <div className="lg:order-1" data-aos>
              <h2 className="text-3xl font-semibold text-gray-900">
                Video Wall Solutions
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                We design and integrate high-impact video wall systems using
                LCD and LED technologies to create large-scale visual
                displays. These solutions deliver exceptional brightness,
                resolution, and reliability for mission-critical and
                public-facing environments.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Video walls are commonly deployed in control rooms,
                command centres, retail environments, corporate experience
                centres, and public spaces where visual impact and
                information clarity are essential.
              </p>
            </div>
          </div>

          {/* ===============================
             INTERACTIVE DISPLAYS
          =============================== */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div data-aos>
              <img
                src="/image/visual-interactive/interactive-display.jpg"
                alt="Interactive Touch Displays"
                className="w-full h-[360px] object-cover rounded-2xl"
              />
            </div>
            <div data-aos>
              <h2 className="text-3xl font-semibold text-gray-900">
                Interactive Touch Displays & Smartboards
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Our interactive display and smartboard solutions enable
                collaborative and engaging experiences through intuitive
                touch-based technology. These systems support annotation,
                wireless content sharing, and real-time collaboration.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Widely used in education, corporate meeting rooms, training
                facilities, and experience centres, interactive displays
                enhance participation and improve communication outcomes.
              </p>
            </div>
          </div>

          {/* ===============================
             WAYFINDING & INFO SYSTEMS
          =============================== */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="lg:order-2" data-aos>
              <img
                src="/image/visual-interactive/wayfinding.jpg"
                alt="Wayfinding and Information Displays"
                className="w-full h-[360px] object-cover rounded-2xl"
              />
            </div>
            <div className="lg:order-1" data-aos>
              <h2 className="text-3xl font-semibold text-gray-900">
                Wayfinding & Information Displays
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                We deliver intelligent wayfinding and information display
                systems that guide visitors efficiently through complex
                environments. These solutions improve navigation,
                accessibility, and user experience.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Commonly implemented in hospitals, malls, airports,
                universities, and large commercial facilities, our
                wayfinding systems are intuitive, reliable, and visually
                consistent with your brand.
              </p>
            </div>
          </div>

          {/* ===============================
             CONTENT & CONTROL
          =============================== */}
          <div className="max-w-4xl" data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Content Management & Control
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              All visual and interactive solutions are supported by robust
              content management and control platforms, enabling centralized
              operation, scheduling, monitoring, and maintenance. This
              ensures consistent performance, simplified updates, and
              long-term reliability across all deployed systems.
            </p>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Our team designs each solution with scalability and future
              expansion in mind, ensuring your investment remains relevant
              and adaptable over time.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}
