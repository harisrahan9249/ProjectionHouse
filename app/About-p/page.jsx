'use client';

import { useEffect } from 'react';
import Header from '../components/sHeader';
import Footer from '../components/Footer';

export default function AboutPage() {

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
          src="/images/about-hero.jpg"
          alt="About Projection House"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="max-w-3xl" data-aos="fade-up">

            <p className="text-xs tracking-[0.35em] uppercase text-gray-300 mb-6">
              About Us
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Delivering Advanced AV & IT
              Technology Solutions
            </h1>

            <p className="mt-6 text-lg text-gray-200">
              Projection House LLC is a leading provider of advanced
              audiovisual and IT infrastructure solutions. We help
              organizations design, deploy and maintain reliable
              technology environments that enhance collaboration,
              communication and operational efficiency.
            </p>

          </div>

        </div>

      </section>



      {/* COMPANY OVERVIEW */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

          <div data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Our Company
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              With years of experience in the audiovisual and IT industry,
              Projection House provides professional technology solutions
              tailored to modern business environments. Our expertise spans
              system consultancy, engineering design, installation,
              integration and long-term managed services.
            </p>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Our team of engineers, consultants and technicians work
              closely with clients to ensure each project delivers reliable
              performance, scalability and long-term value.
            </p>

          </div>

          <img
            src="/images/company-team.jpg"
            alt="Company Team"
            data-aos="fade-left"
            className="rounded-xl shadow-xl"
          />

        </div>

      </section>



      {/* IMAGE GALLERY */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Our Work & Expertise
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              We deliver reliable AV and IT infrastructure solutions
              across corporate, government and enterprise environments.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-8">

            <img
              src="/images/av-installation-team.jpg"
              alt="AV Installation"
              data-aos="fade-up"
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

            <img
              src="/images/control-room-project.jpg"
              alt="Control Room Project"
              data-aos="fade-up"
              style={{transitionDelay:"120ms"}}
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

            <img
              src="/images/company-office.jpg"
              alt="Office Environment"
              data-aos="fade-up"
              style={{transitionDelay:"240ms"}}
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />

          </div>

        </div>

      </section>



      {/* MISSION & VISION */}
      <section className="py-28">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">

          <div data-aos="fade-up">

            <h3 className="text-2xl font-semibold text-gray-900">
              Our Mission
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed">
              To deliver reliable, innovative and future-ready AV
              and IT solutions that empower organizations to
              communicate, collaborate and operate more efficiently.
            </p>

          </div>

          <div data-aos="fade-up" style={{transitionDelay:"120ms"}}>

            <h3 className="text-2xl font-semibold text-gray-900">
              Our Vision
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed">
              To be a trusted technology partner recognized for
              engineering excellence, innovation and long-term
              client relationships across the region.
            </p>

          </div>

        </div>

      </section>



      {/* CORE SERVICES */}
      <section className="py-28 bg-gray-50">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">

            <h2 className="text-4xl font-semibold text-gray-900">
              Our Core Services
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Projection House provides a full range of AV and IT
              solutions covering the entire technology lifecycle.
            </p>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              "Consultancy & Assessment",
              "Concept Design & Engineering",
              "Supply, Installation & Integration",
              "Compliance, Testing & Commissioning",
              "Training & Managed Services",
              "Technology Support & Maintenance"
            ].map((service,i)=>(
              
              <div
                key={i}
                data-aos="fade-up"
                style={{transitionDelay:`${i*80}ms`}}
                className="bg-white p-8 rounded-xl shadow"
              >
                <p className="text-lg font-medium text-gray-800">
                  {service}
                </p>
              </div>

            ))}

          </div>

        </div>

      </section>



      {/* CTA */}
      <section className="bg-gray-900 text-white py-24">

        <div className="max-w-5xl mx-auto px-6 text-center">

          <div data-aos="fade-up">

            <h2 className="text-4xl font-semibold">
              Partner With Our Technology Experts
            </h2>

            <p className="mt-6 text-lg text-gray-300">
              Let us help you design and implement advanced AV and
              IT solutions tailored to your organization.
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