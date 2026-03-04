'use client';

import { useEffect } from 'react';

export default function OurSolutions() {
  /* ===============================
     SMART AOS (ALL-IN-ONE)
  =============================== */
  useEffect(() => {
    const prefersReducedMotion =
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const elements = document.querySelectorAll('[data-aos]');

    if (prefersReducedMotion) {
      elements.forEach((el) => el.classList.add('aos-active'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('aos-active');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ===============================
     DATA
  =============================== */
  const features = [
    {
      title: 'Innovative System Design',
      description:
        'Our expert designers craft AV & IT systems tailored to your environment, maximizing efficiency and usability.',
      image: '/image/solution/solution1.jpg',
    },
    {
      title: 'Seamless Integration',
      description:
        'We specialize in integrating cutting-edge AV and IT technologies to work together flawlessly.',
      image: '/image/solution/solution2.jpg',
    },
    {
      title: 'Immersive Experiences',
      description:
        'From presentation spaces to dynamic multimedia environments, we deliver solutions that captivate.',
      image: '/image/solution/solution3.jpg',
    },
    {
      title: 'Reliable Communication Systems',
      description:
        'Streamline communication and collaboration with robust and scalable solutions.',
      image: '/image/solution/solution4.jpg',
    },
    {
      title: 'Expert Support & Delivery',
      description:
        'From sales specialists to engineers, we support your project end-to-end with trusted expertise.',
      image: '/image/solution/solution5.jpg',
    },
  ];

  return (
    <>
      {/* ===== AOS STYLES (LOCAL) ===== */}
      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 900ms cubic-bezier(0.19, 1, 0.22, 1),
            transform 900ms cubic-bezier(0.19, 1, 0.22, 1);
          will-change: transform, opacity;
        }

        [data-aos="fade-up"] {
          transform: translateY(40px);
        }

        [data-aos="zoom-in"] {
          transform: scale(0.96);
        }

        .aos-active {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===== OUR SOLUTIONS SECTION ===== */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* HEADER */}
          <div
            className="text-center max-w-3xl mx-auto mb-24"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Our Solutions
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Welcome to our world of cutting-edge audio-visual solutions. At
              Projection House, our team of AV system designers, engineers,
              and specialists seamlessly integrate AV and IT technologies
              to enhance efficiency, reliability, engagement, and
              communication—transforming spaces into hubs of innovation
              and collaboration.
            </p>
          </div>

          {/* SOLUTIONS GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {features.map((feature, index) => (
              <article
                key={feature.title}
                data-aos="fade-up"
                style={{ transitionDelay: `${index * 120}ms` }}
                className="group"
              >
                {/* IMAGE */}
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-shadow duration-700">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    loading="lazy"
                    className="
                      absolute inset-0 w-full h-full object-cover
                      scale-[1.04]
                      transition-transform duration-[1400ms]
                      ease-[cubic-bezier(0.19,1,0.22,1)]
                      group-hover:scale-110
                    "
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>

                {/* CONTENT */}
                <div className="mt-6 px-2">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}
