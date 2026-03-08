'use client';

import { useEffect, useState } from 'react';
import Header from '../components/sHeader';
import Footer from '../components/Footer';

export default function ContactSection() {

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
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* ===============================
     FORM STATE
  =============================== */
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) throw data;

      setStatus('success');

      setForm({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch (err) {
      console.error('API ERROR:', err);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      <style>{`
        [data-aos] {
          opacity: 0;
          transform: translateY(32px);
          transition:
            opacity 900ms cubic-bezier(0.19,1,0.22,1),
            transform 900ms cubic-bezier(0.19,1,0.22,1);
        }
        .aos-active {
          opacity: 1;
          transform: none;
        }
      `}</style>

      <section className="bg-gray-50 py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          <div className="max-w-3xl mb-20" data-aos="fade-up">
            <p className="text-[11px] tracking-[0.35em] uppercase text-gray-500 mb-4">
              Contact Us
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
              Let’s Talk About Your Project
            </h2>
            <p className="mt-6 text-lg text-gray-700 leading-relaxed">
              Whether you’re planning a new AV & IT installation, upgrading
              existing systems, or seeking expert consultation, our team is
              ready to support you with reliable, future-ready solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20 items-start">

            <div data-aos="fade-up">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Projection House LLC
              </h3>

              <ul className="space-y-4 text-gray-700">
                <li>
                  <strong>Address:</strong><br />
                  Al Sharafi-1 Building, Mezzanine Floor,<br />
                  Al Karama, Dubai, UAE
                </li>
                <li>
                  <strong>Phone:</strong> +971 4 370 8901
                </li>
                <li>
                  <strong>Email:</strong> info@projectionhouse.ae
                </li>
                <li>
                  <strong>Working Hours:</strong><br />
                  Monday – Friday | 08:00 – 17:00
                </li>
              </ul>
            </div>

            {/* FORM */}
            <form
              onSubmit={handleSubmit}
              data-aos="fade-up"
              style={{ transitionDelay: '120ms' }}
              className="bg-white rounded-2xl shadow-lg p-8 md:p-10"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="border border-gray-200 px-4 py-3 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="border border-gray-200 px-4 py-3 rounded-md"
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={handleChange}
                  className="border border-gray-200 px-4 py-3 rounded-md"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                  className="border border-gray-200 px-4 py-3 rounded-md"
                />
              </div>

              <textarea
                name="message"
                placeholder="Tell us about your requirements"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="mt-6 w-full border border-gray-200 px-4 py-3 rounded-md"
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-6 px-6 py-3 bg-green-600 text-white rounded-md disabled:opacity-60"
              >
                {loading ? 'Sending...' : 'Submit Enquiry'}
              </button>

              {status === 'success' && (
                <p className="mt-4 text-green-600 text-sm">
                  ✅ Thank you! We’ll contact you shortly.
                </p>
              )}

              {status === 'error' && (
                <p className="mt-4 text-red-600 text-sm">
                  ❌ Something went wrong. Please try again.
                </p>
              )}
            </form>

          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}