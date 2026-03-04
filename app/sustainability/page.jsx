'use client';

import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/outline';

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen bg-[#071b10] text-white overflow-hidden relative">

      {/* ================= HOME ICON ================= */}
      <Link
        href="/"
        aria-label="Back to home"
        className="fixed top-24 left-6 z-50
                   flex items-center justify-center
                   w-11 h-11 rounded-full
                   bg-white/10 backdrop-blur
                   border border-white/20
                   text-green-400
                   hover:bg-green-500 hover:text-black
                   transition-all duration-300"
      >
        <HomeIcon className="w-5 h-5" />
      </Link>

      {/* ================= HERO ================= */}
      <section className="relative max-w-7xl mx-auto px-8 pt-32 pb-28 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[2px] bg-green-500" />
            <span className="uppercase tracking-widest text-green-400 text-sm">
              Sustainability
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-light leading-tight mb-8">
            Sustainably Living <br />
            Today for a <br />
            <span className="font-semibold text-green-400">
              Greener Tomorrow
            </span>
          </h1>

          <p className="text-gray-300 max-w-xl leading-relaxed mb-10">
            At Projection House, sustainability is built on the principle that
            harmony with nature is essential for long-term growth. Our approach
            is forward-looking, adaptive, and integrated into the way we think,
            operate, and deliver value to our stakeholders.
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/contact"
              className="px-7 py-3 rounded-full bg-green-500 text-black font-medium hover:bg-green-400 transition"
            >
              Get in Touch
            </Link>

            <Link
              href="/about"
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-green-400 transition"
            >
              Learn more →
            </Link>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative h-[520px] rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/image/sustainability-bg.jpg)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#071b10]/90 via-[#0b2a18]/70 to-transparent" />

          <div className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 w-72 shadow-xl">
            <p className="text-sm text-gray-300 mb-4">
              Sustainability Pillars
            </p>
            <ul className="space-y-2 text-sm">
              {[
                'Environmental Responsibility',
                'Social Well-Being',
                'Governance & Ethics',
                'Long-Term Value Creation',
              ].map(i => (
                <li key={i} className="flex justify-between">
                  <span>{i}</span>
                  <span className="text-green-400">✔</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ================= IMAGE STRIP ================= */}
      <section className="relative h-64 my-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/image/sustainability-strip.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071b10] via-[#071b10]/60 to-[#071b10]" />
      </section>

      {/* ================= STRATEGY ================= */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <h2 className="text-3xl font-light mb-6">
          Our Sustainability Strategy
        </h2>
        <p className="text-gray-300 leading-relaxed max-w-5xl">
          Projection House follows a structured Environmental, Social, and
          Governance (ESG) approach to sustainability. Our strategy is aligned
          with internationally recognized frameworks including the Task Force on
          Climate-Related Financial Disclosures (TCFD), Sustainability Accounting
          Standards Board (SASB), and the United Nations Sustainable Development
          Goals (SDGs).
        </p>
      </section>

      {/* ================= INITIATIVES ================= */}
      <section className="max-w-7xl mx-auto px-8 py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              t: 'Energy-Efficient Infrastructure',
              d: 'Design and delivery of IT, ELV, and AV systems optimized for reduced energy consumption and operational efficiency.',
              img: 'sustainability-1.jpg',
            },
            {
              t: 'Smart & Green Technologies',
              d: 'Adoption of intelligent automation and monitoring systems to reduce carbon footprint.',
              img: 'sustainability-2.jpg',
            },
            {
              t: 'Responsible Procurement',
              d: 'Partnering with ethical vendors committed to environmental and social responsibility.',
              img: 'sustainability-3.jpg',
            },
            {
              t: 'Lifecycle Asset Management',
              d: 'Sustainable design, upgrades, reuse, and responsible end-of-life disposal.',
              img: 'sustainability-4.jpg',
            },
            {
              t: 'Compliance & Governance',
              d: 'Strong governance frameworks ensuring regulatory compliance and ethical operations.',
              img: 'sustainability-5.jpg',
            },
            {
              t: 'Operational Transparency',
              d: 'Clear reporting, accountability, and data-driven sustainability decisions.',
              img: 'sustainability-6.jpg',
            },
          ].map(item => (
            <div
              key={item.t}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden"
            >
              <div className="relative h-40">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(/image/${item.img})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium mb-2">{item.t}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= YEAR-ROUND CIRCLE ================= */}
      <section className="bg-black/40">
        <div className="max-w-7xl mx-auto px-8 py-24">
          <h2 className="text-3xl font-light mb-10 text-center">
            Year-Round Circle of Sustainability
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-gray-300">
            {[
              'Stay Hydrated – Reduce Plastic Usage',
              'Eye Care & Employee Well-Being',
              'Support for Global Water Crisis',
              'Community Engagement & CPR Training',
              'Financial Awareness & Investment Habits',
              'News Awareness & SDG Education',
              'Healthy Lifestyle & Nutrition',
              'Skills Swapping & Innovation Culture',
              'Community Stories & Inclusion',
              'Tree Planting & Climate Action',
              'Small Acts for Inclusive Societies',
              'Today for Tomorrow – Continuous Progress',
            ].map(item => (
              <div
                key={item}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-5"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= COMMITMENT ================= */}
      <section className="max-w-5xl mx-auto px-8 py-28 text-center">
        <h2 className="text-3xl font-light mb-8">
          Our Commitment
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Sustainability at Projection House is not a one-time initiative.
          It is a continuous journey of improvement. We remain committed to
          protecting the environment, supporting communities, and maintaining
          strong governance practices to create lasting value for future
          generations.
        </p>
      </section>

    </main>
  );
}
