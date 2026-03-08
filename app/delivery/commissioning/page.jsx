'use client';

import { useEffect } from 'react';
import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function ComplianceTestingCommissioning() {

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
          src="/images/compliance-hero.jpg"
          alt="System Compliance Testing"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="max-w-3xl" data-aos="fade-up">

            <p className="text-xs tracking-[0.35em] uppercase text-gray-300 mb-6">
              Compliance, Testing, Commissioning & Handover
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Ensuring System Performance,
              Compliance and Reliability
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Our team ensures every AV and IT system is thoroughly tested,
              compliant with industry standards, and fully optimized before
              project handover. We verify performance, reliability and
              operational readiness.
            </p>

          </div>

        </div>

      </section>



      {/* IMAGE SHOWCASE */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Testing & Quality Assurance
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              Comprehensive testing ensures systems perform according
              to design specifications and operational standards.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <img
              src="/images/system-testing.jpg"
              alt="System Testing"
              data-aos="fade-up"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

            <img
              src="/images/av-calibration.jpg"
              alt="AV Calibration"
              data-aos="fade-up"
              style={{transitionDelay:"120ms"}}
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

            <img
              src="/images/network-testing.jpg"
              alt="Network Testing"
              data-aos="fade-up"
              style={{transitionDelay:"240ms"}}
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

          </div>

        </div>

      </section>



      {/* SERVICES */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Compliance & Testing Services
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Our structured testing and commissioning process ensures
              all systems operate efficiently and meet project standards.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                title:"System Testing",
                text:"Detailed functional testing of AV and IT systems to ensure performance and reliability."
              },
              {
                title:"Performance Verification",
                text:"Verifying system performance against engineering specifications."
              },
              {
                title:"Compliance Checks",
                text:"Ensuring systems meet industry regulations and safety standards."
              },
              {
                title:"Calibration & Optimization",
                text:"Calibration of audio, video and networking systems for optimal performance."
              },
              {
                title:"User Training",
                text:"Training client teams on system operation and management."
              },
              {
                title:"Documentation & Handover",
                text:"Complete project documentation, as-built drawings and handover reports."
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



      {/* COMMISSIONING PROCESS */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-20" data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Our Commissioning Process
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              A structured approach ensures smooth system validation,
              performance testing and final project delivery.
            </p>

          </div>


          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div className="grid md:grid-cols-2 gap-10">

              {[
                {
                  step:"01",
                  title:"System Verification",
                  text:"Ensuring equipment is installed correctly and safely."
                },
                {
                  step:"02",
                  title:"Functional Testing",
                  text:"Testing system functionality and operational performance."
                },
                {
                  step:"03",
                  title:"Performance Optimization",
                  text:"Calibrating and optimizing systems for best results."
                },
                {
                  step:"04",
                  title:"Final Handover",
                  text:"Delivering documentation, reports and user training."
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
              src="/images/commissioning-process.jpg"
              alt="Commissioning Process"
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
              Delivering Systems Ready for Operation
            </h2>

            <p className="mt-6 text-lg text-gray-300">
              Our compliance, testing and commissioning services ensure
              every system is fully optimized and ready for use.
            </p>

            <a
              href="/contact"
              className="inline-block mt-10 px-8 py-4 bg-green-600 rounded-md hover:bg-green-700 transition"
            >
              Speak With Our Experts
            </a>

          </div>

        </div>

      </section>


      <Footer />
    </>
  );
}