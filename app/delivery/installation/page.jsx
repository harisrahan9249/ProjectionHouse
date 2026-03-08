'use client';

import { useEffect } from 'react';
import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function SupplyInstallationIntegration() {

  /* ===============================
     SMART AOS
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
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();

  }, []);

  return (
    <>
      <Header />

      <style>{`
        [data-aos]{
          opacity:0;
          transform:translateY(32px);
          transition:opacity 900ms cubic-bezier(0.19,1,0.22,1),
          transform 900ms cubic-bezier(0.19,1,0.22,1);
        }
        .aos-active{
          opacity:1;
          transform:none;
        }
      `}</style>

      {/* HERO */}
      <section className="relative bg-gray-900 text-white py-36 overflow-hidden">

        <img
          src="/images/installation-hero.jpg"
          alt="AV Installation"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="max-w-3xl" data-aos="fade-up">

            <p className="text-xs tracking-[0.35em] uppercase text-gray-300 mb-6">
              Supply, Installation & Integration
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Professional AV & IT System
              Deployment and Integration
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Our experienced team provides end-to-end supply, installation,
              and integration services ensuring seamless operation of AV
              and IT systems with maximum reliability and performance.
            </p>

          </div>

        </div>

      </section>



      {/* IMAGE SHOWCASE */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Professional Installation Expertise
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              Our technicians deliver high-quality installations with
              precision, safety, and compliance with industry standards.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <img
              src="/images/av-installation.jpg"
              alt="AV Equipment Installation"
              data-aos="fade-up"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

            <img
              src="/images/server-room-installation.jpg"
              alt="Server Room Installation"
              data-aos="fade-up"
              style={{transitionDelay:"120ms"}}
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

            <img
              src="/images/system-integration.jpg"
              alt="System Integration"
              data-aos="fade-up"
              style={{transitionDelay:"240ms"}}
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

          </div>

        </div>

      </section>



      {/* SERVICE CAPABILITIES */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Installation & Integration Services
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Our team ensures that every AV and IT system is installed,
              configured and integrated to perform at its best.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                title:"Equipment Supply",
                text:"Procurement and supply of high-quality AV and IT equipment from trusted global manufacturers."
              },
              {
                title:"System Installation",
                text:"Professional installation of AV systems, networking infrastructure and control equipment."
              },
              {
                title:"System Integration",
                text:"Seamless integration between AV technologies, IT infrastructure and enterprise systems."
              },
              {
                title:"Configuration & Testing",
                text:"Complete system configuration, calibration and performance testing."
              },
              {
                title:"Rack Assembly",
                text:"Professional rack design, assembly and cable management for equipment rooms."
              },
              {
                title:"Commissioning",
                text:"Final system commissioning ensuring all systems operate according to project specifications."
              }

            ].map((item,i)=>(

              <div
                key={i}
                data-aos="fade-up"
                style={{transitionDelay:`${i*80}ms`}}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >

                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>



      {/* INSTALLATION PROCESS */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-20" data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Our Installation Process
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              We follow a structured installation process to ensure
              reliability, efficiency and high-quality delivery.
            </p>

          </div>


          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div className="grid md:grid-cols-2 gap-10">

              {[
                {
                  step:"01",
                  title:"Planning",
                  text:"Reviewing engineering drawings and preparing installation plans."
                },
                {
                  step:"02",
                  title:"Equipment Deployment",
                  text:"Installation of AV devices, networking systems and hardware."
                },
                {
                  step:"03",
                  title:"System Integration",
                  text:"Connecting and integrating systems with control platforms."
                },
                {
                  step:"04",
                  title:"Testing & Commissioning",
                  text:"Final testing to ensure optimal system performance."
                }
              ].map((item,i)=>(

                <div
                  key={i}
                  data-aos="fade-up"
                  style={{transitionDelay:`${i*120}ms`}}
                >

                  <span className="text-gray-400 text-3xl font-semibold">
                    {item.step}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-gray-600">
                    {item.text}
                  </p>

                </div>

              ))}

            </div>


            <img
              src="/images/equipment-installation.jpg"
              alt="Equipment Installation"
              data-aos="fade-left"
              className="rounded-xl shadow-xl"
            />

          </div>

        </div>

      </section>



      {/* CTA */}
      <section className="bg-gray-900 text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <div data-aos="fade-up">

            <h2 className="text-4xl font-semibold">
              Ready to Deploy Your AV & IT Systems?
            </h2>

            <p className="mt-6 text-lg text-gray-300">
              Our specialists ensure smooth installation and integration
              of advanced AV and IT systems tailored to your environment.
            </p>

            <a
              href="/contact"
              className="inline-block mt-10 px-8 py-4 bg-green-600 rounded-md hover:bg-green-700 transition"
            >
              Contact Our Team
            </a>

          </div>

        </div>

      </section>


      <Footer />
    </>
  );
}