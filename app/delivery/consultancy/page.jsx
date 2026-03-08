'use client';

import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function ConsultancyPage() {

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
            entry.target.classList.add("aos-active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
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
      <section className="bg-gray-900 text-white py-32">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl" data-aos="fade-up">
            <p className="text-xs tracking-[0.35em] uppercase text-gray-400 mb-6">
              Consultancy & Assessment
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
              Strategic AV & IT Consultancy for
              Future-Ready Infrastructure
            </h1>

            <p className="mt-6 text-lg text-gray-300">
              Our consultancy and assessment services help organizations plan,
              design and optimize their audiovisual and IT infrastructure.
              From concept to implementation, we ensure every solution is
              efficient, scalable and aligned with your operational goals.
            </p>
          </div>

        </div>
      </section>


      {/* SERVICES */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto mb-20" data-aos="fade-up">
            <h2 className="text-4xl font-semibold text-gray-900">
              Consultancy Services
            </h2>
            <p className="mt-6 text-gray-600 text-lg">
              We provide expert advisory services to help organizations
              implement reliable AV and IT environments that enhance
              productivity, collaboration and performance.
            </p>
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {[
              {
                title: "Technology Assessment",
                text: "Evaluation of your current AV & IT infrastructure to identify performance gaps, risks and upgrade opportunities."
              },
              {
                title: "System Design Planning",
                text: "Professional system architecture and technology design tailored to your operational requirements."
              },
              {
                title: "Infrastructure Strategy",
                text: "Long-term strategic planning to ensure scalable and future-proof technology investments."
              },
              {
                title: "Integration Consultancy",
                text: "Expert guidance on integrating AV systems, collaboration platforms and enterprise IT infrastructure."
              },
              {
                title: "Cost & ROI Analysis",
                text: "Detailed budget planning and ROI evaluation to help decision makers invest in the right technology."
              },
              {
                title: "Project Advisory",
                text: "Independent consultancy during project lifecycle to ensure quality, efficiency and compliance."
              }
            ].map((service, i) => (

              <div
                key={i}
                data-aos="fade-up"
                style={{ transitionDelay: `${i * 80}ms` }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >

                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.text}
                </p>

              </div>

            ))}

          </div>
        </div>
      </section>


      {/* PROCESS */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">

          <div className="max-w-3xl mb-20" data-aos="fade-up">
            <h2 className="text-4xl font-semibold text-gray-900">
              Our Consultancy Process
            </h2>
            <p className="mt-6 text-gray-600 text-lg">
              We follow a structured approach to ensure every project delivers
              maximum efficiency, reliability and long-term value.
            </p>
          </div>


          <div className="grid md:grid-cols-4 gap-12">

            {[
              {step:"01",title:"Assessment",text:"Detailed evaluation of infrastructure, requirements and challenges."},
              {step:"02",title:"Analysis",text:"Technical analysis to identify performance gaps and improvement areas."},
              {step:"03",title:"Strategy",text:"Development of optimized AV & IT solution strategies."},
              {step:"04",title:"Implementation Guidance",text:"Expert advisory during system deployment and integration."},
            ].map((item,i)=>(
              
              <div key={i} data-aos="fade-up" style={{transitionDelay:`${i*120}ms`}}>

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

        </div>
      </section>


      {/* CTA */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <div data-aos="fade-up">

            <h2 className="text-4xl font-semibold">
              Start Your Technology Transformation
            </h2>

            <p className="mt-6 text-gray-300 text-lg">
              Partner with our consultancy team to design efficient,
              scalable and future-ready AV & IT environments.
            </p>

            <a
              href="/contact"
              className="inline-block mt-10 px-8 py-4 bg-green-600 rounded-md hover:bg-green-700 transition"
            >
              Contact Our Experts
            </a>

          </div>

        </div>
      </section>


      <Footer />
    </>
  );
}