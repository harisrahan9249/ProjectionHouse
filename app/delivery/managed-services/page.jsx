'use client';

import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TrainingAMCManagedServices() {

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
          src="/images/training-hero.jpg"
          alt="Training and Support"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="max-w-3xl" data-aos="fade-up">

            <p className="text-xs tracking-[0.35em] uppercase text-gray-300 mb-6">
              Training, AMC & Managed Services
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Reliable Support and
              Continuous System Performance
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Our training and managed service programs ensure your AV
              and IT systems continue operating efficiently long after
              installation. From user training to preventive maintenance
              and proactive monitoring, we provide long-term support.
            </p>

          </div>

        </div>

      </section>



      {/* IMAGE SHOWCASE */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Ongoing Support & Maintenance
            </h2>

            <p className="mt-6 text-gray-600 text-lg">
              Our team provides continuous operational support to ensure
              maximum uptime and optimal system performance.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <img
              src="/images/system-training.jpg"
              alt="System Training"
              data-aos="fade-up"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

            <img
              src="/images/technical-support.jpg"
              alt="Technical Support"
              data-aos="fade-up"
              style={{transitionDelay:"120ms"}}
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

            <img
              src="/images/monitoring-services.jpg"
              alt="Monitoring Services"
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
              Support & Managed Services
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Our comprehensive service programs ensure your systems
              remain reliable, efficient and up-to-date.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                title:"User Training",
                text:"Hands-on training sessions to help your team operate and manage AV and IT systems effectively."
              },
              {
                title:"Annual Maintenance Contracts",
                text:"Preventive maintenance programs ensuring long-term system performance and reliability."
              },
              {
                title:"Remote Monitoring",
                text:"Proactive monitoring services to identify issues before they impact operations."
              },
              {
                title:"Technical Support",
                text:"Dedicated support teams providing rapid troubleshooting and technical assistance."
              },
              {
                title:"System Upgrades",
                text:"Regular system updates and upgrades to keep technology current and secure."
              },
              {
                title:"Managed Services",
                text:"Complete operational management of AV and IT systems including monitoring, maintenance and reporting."
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



      {/* SUPPORT PROCESS */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-20" data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Our Support Process
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              We follow a proactive service model to maintain system
              performance and reduce downtime.
            </p>

          </div>


          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div className="grid md:grid-cols-2 gap-10">

              {[
                {
                  step:"01",
                  title:"System Assessment",
                  text:"Reviewing system performance and operational requirements."
                },
                {
                  step:"02",
                  title:"Maintenance Planning",
                  text:"Developing maintenance schedules and support plans."
                },
                {
                  step:"03",
                  title:"Monitoring & Support",
                  text:"Continuous monitoring and rapid technical assistance."
                },
                {
                  step:"04",
                  title:"Optimization",
                  text:"Improving system efficiency through upgrades and updates."
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
              src="/images/managed-services.jpg"
              alt="Managed Services"
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
              Keep Your Systems Running at Peak Performance
            </h2>

            <p className="mt-6 text-lg text-gray-300">
              Our training, maintenance and managed service programs
              ensure reliable and efficient operation of your AV and IT systems.
            </p>

            <a
              href="/contact"
              className="inline-block mt-10 px-8 py-4 bg-green-600 rounded-md hover:bg-green-700 transition"
            >
              Contact Our Support Team
            </a>

          </div>

        </div>

      </section>


      <Footer />
    </>
  );
}