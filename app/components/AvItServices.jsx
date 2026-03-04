'use client';

import { useEffect } from 'react';

export default function AvItServices() {
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
  const services = [
    {
      title: 'Project Design',
      description:
        'Expert planning and tailored AV system design that anticipates your needs and creates a foundation for success.',
      image: '/image/it/it.jpg',
    },
    {
      title: 'Programming',
      description:
        'Custom programming and control for AV & IT systems that ensures seamless automation and intuitive operation.',
      image: '/image/it/it1.jpg',
    },
    {
      title: 'Installation',
      description:
        'Professional AV & IT installation with meticulous planning and execution to guarantee reliable system performance.',
      image: '/image/it/it2.jpg',
    },
    {
      title: 'Product Supply',
      description:
        'Certified supply of premium AV & IT equipment from leading global brands to meet any project requirement.',
      image: '/image/it/it3.jpg',
    },
    {
      title: 'Support & AMC',
      description:
        'Comprehensive support services and Annual Maintenance Contracts to keep your systems running at peak performance.',
      image: '/image/it/it4.jpg',
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
          transform: scale(0.94);
        }

        .aos-active {
          opacity: 1;
          transform: none;
        }
      `}</style>

      {/* ===== AV & IT SERVICES SECTION ===== */}
      <section className="bg-gray-50 py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* HEADER */}
          <div
            className="text-center max-w-3xl mx-auto mb-20"
            data-aos="fade-up"
          >
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              AV & IT Services
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Our industry-leading, certified specialists have been providing
              audio visual and IT services across all sectors for many years,
              delivering reliable and future-ready solutions.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service, index) => (
              <article
                key={service.title}
                data-aos="fade-up"
                style={{ transitionDelay: `${index * 120}ms` }}
                className="
                  bg-white rounded-2xl overflow-hidden
                  shadow-md hover:shadow-xl
                  transition-all duration-500
                  hover:-translate-y-1
                "
              >
                {/* IMAGE */}
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="
                      w-full h-full object-cover
                      transition-transform duration-700
                      hover:scale-105
                    "
                  />
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
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
