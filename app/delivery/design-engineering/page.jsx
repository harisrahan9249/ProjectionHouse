'use client';

import { useEffect } from 'react';
import Header from '../../components/sHeader';
import Footer from '../../components/Footer';

export default function ConceptDesignEngineering() {

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
          src="/images/engineering-hero.jpg"
          alt="Engineering Design"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="max-w-3xl" data-aos="fade-up">

            <p className="text-xs tracking-[0.35em] uppercase text-gray-300 mb-6">
              Concept Design & Engineering
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Intelligent AV & IT System Design
              for Modern Spaces
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Our engineering specialists transform ideas into
              scalable AV and IT solutions with advanced system
              architecture, technical precision and seamless integration.
            </p>

          </div>

        </div>

      </section>



      {/* IMAGE SHOWCASE */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Engineering & Design Expertise
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              Combining technical engineering with innovative design
              to deliver reliable AV and IT environments.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <img
              src="/images/av-design.jpg"
              alt="AV System Design"
              data-aos="fade-up"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

            <img
              src="/images/control-room-design.jpg"
              alt="Control Room Engineering"
              data-aos="fade-up"
              style={{transitionDelay:"120ms"}}
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

            <img
              src="/images/technical-drawing.jpg"
              alt="Technical Engineering Drawings"
              data-aos="fade-up"
              style={{transitionDelay:"240ms"}}
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

          </div>

        </div>

      </section>



      {/* ENGINEERING CAPABILITIES */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Engineering Capabilities
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Our engineering team ensures every system is designed
              for performance, reliability and long-term scalability.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                title:"Concept Development",
                text:"Transforming initial ideas into structured AV and IT system concepts."
              },
              {
                title:"System Architecture",
                text:"Detailed architecture planning including signal flow and infrastructure."
              },
              {
                title:"Technical Drawings",
                text:"CAD schematics, rack layouts and engineering diagrams."
              },
              {
                title:"Technology Selection",
                text:"Selecting best-in-class equipment for performance and compatibility."
              },
              {
                title:"Integration Engineering",
                text:"Ensuring seamless integration with enterprise IT systems."
              },
              {
                title:"Documentation",
                text:"Comprehensive engineering documentation and system guides."
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



      {/* DESIGN PROCESS */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-20" data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Our Design Process
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              A structured engineering workflow ensures every
              project is executed efficiently and accurately.
            </p>

          </div>


          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div className="grid md:grid-cols-2 gap-10">

              {[
                {
                  step:"01",
                  title:"Requirement Study",
                  text:"Understanding project goals and operational needs."
                },
                {
                  step:"02",
                  title:"Concept Design",
                  text:"Development of technology concepts and layouts."
                },
                {
                  step:"03",
                  title:"Engineering Design",
                  text:"Detailed drawings, architecture and equipment plans."
                },
                {
                  step:"04",
                  title:"Implementation Support",
                  text:"Technical guidance during installation and commissioning."
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
              src="/images/system-engineering.jpg"
              alt="Engineering Planning"
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
              Transform Your Vision Into Engineered Solutions
            </h2>

            <p className="mt-6 text-lg text-gray-300">
              Partner with our engineering team to design advanced
              AV and IT environments tailored to your organization.
            </p>

            <a
              href="/contact"
              className="inline-block mt-10 px-8 py-4 bg-green-600 rounded-md hover:bg-green-700 transition"
            >
              Speak With Our Engineers
            </a>

          </div>

        </div>

      </section>


      <Footer />
    </>
  );
}