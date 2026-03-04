'use client';

import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -120px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ===============================
         HEADER
      =============================== */}
      <Header />

      {/* ===============================
         AOS STYLES
      =============================== */}
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
         HERO (NEW – PREMIUM)
      =============================== */}
      <section className="pt-40 pb-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div data-aos>
              <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">
                Solutions
              </p>
              <h1 className="text-4xl md:text-5xl font-semibold text-gray-900">
                Visual & Interactive Solutions
              </h1>
              <p className="mt-8 text-lg text-gray-700 leading-relaxed">
                We design and deliver immersive visual and interactive
                environments that elevate communication, engagement,
                and information delivery across corporate, education,
                retail, hospitality, and public sector spaces.
              </p>
            </div>

            <div data-aos>
              <img
                src="/image/visual-interactive/hero.jpg"
                alt="Visual & Interactive Solutions"
                className="w-full h-[420px] object-cover rounded-3xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* ===============================
         CONTENT SECTIONS
      =============================== */}
      <section className="bg-white py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* DIGITAL SIGNAGE */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-36">
            <img
              data-aos
              src="/image/visual-interactive/digital-signage.jpg"
              alt="Digital Signage Solutions"
              className="w-full h-[360px] object-cover rounded-2xl"
            />
            <div data-aos>
              <h2 className="text-3xl font-semibold text-gray-900">
                Digital Signage Solutions
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Our digital signage solutions enable dynamic, real-time
                communication using professional-grade displays and
                centralized content management platforms. Ideal for
                indoor and outdoor environments.
              </p>
            </div>
          </div>

          {/* VIDEO WALLS */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-36">
            <div data-aos>
              <h2 className="text-3xl font-semibold text-gray-900">
                Video Wall Solutions
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                We design and integrate high-impact LED and LCD video
                walls for control rooms, experience centres, retail
                environments, and public venues where visual clarity
                and reliability are critical.
              </p>
            </div>
            <img
              data-aos
              src="/image/visual-interactive/video-wall.jpg"
              alt="Video Wall Solutions"
              className="w-full h-[360px] object-cover rounded-2xl"
            />
          </div>

          {/* INTERACTIVE DISPLAYS */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-36">
            <img
              data-aos
              src="/image/visual-interactive/interactive-display.jpg"
              alt="Interactive Displays"
              className="w-full h-[360px] object-cover rounded-2xl"
            />
            <div data-aos>
              <h2 className="text-3xl font-semibold text-gray-900">
                Interactive Touch Displays & Smartboards
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Interactive displays and smartboards enhance collaboration,
                training, and learning by enabling intuitive touch-based
                interaction, wireless sharing, and real-time engagement.
              </p>
            </div>
          </div>

          {/* WAYFINDING */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-36">
            <div data-aos>
              <h2 className="text-3xl font-semibold text-gray-900">
                Wayfinding & Information Systems
              </h2>
              <p className="mt-6 text-gray-700 leading-relaxed">
                Intelligent wayfinding solutions improve navigation and
                visitor experience across complex environments such as
                hospitals, airports, malls, and campuses.
              </p>
            </div>
            <img
              data-aos
              src="/image/visual-interactive/wayfinding.jpg"
              alt="Wayfinding Systems"
              className="w-full h-[360px] object-cover rounded-2xl"
            />
          </div>

          {/* CONTENT MANAGEMENT */}
          <div className="max-w-4xl" data-aos>
            <h2 className="text-3xl font-semibold text-gray-900">
              Content Management & Control
            </h2>
            <p className="mt-6 text-gray-700 leading-relaxed">
              All visual and interactive solutions are supported by
              enterprise-grade content management and control platforms,
              enabling centralized scheduling, monitoring, and maintenance
              for long-term performance and scalability.
            </p>
          </div>

        </div>
      </section>

      {/* ===============================
         FOOTER
      =============================== */}
      <Footer />
    </>
  );
}
