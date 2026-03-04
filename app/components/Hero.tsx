export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">

      {/* SUBTLE LIGHT BACKDROP */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-white" />

      {/* VERY LIGHT TECH GRID (ENGINEERING FEEL) */}
      <div className="absolute inset-0 opacity-[0.025] bg-[linear-gradient(to_right,#16a34a_1px,transparent_1px),linear-gradient(to_bottom,#16a34a_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative max-w-7xl mx-auto px-8 pt-36 pb-32 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-green-700 text-sm tracking-[0.3em] uppercase mb-6">
            Projection & Audio Visual Engineering
          </p>

          <h1 className="text-[3.2rem] md:text-[4.4rem] font-semibold text-gray-900 leading-tight">
            Transforming Spaces with
            <span className="block text-green-600 font-bold">
              Integrated AV Solutions
            </span>
          </h1>

          <p className="mt-8 text-lg text-gray-700 max-w-xl leading-relaxed">
            Projection House designs, integrates, and supports
            professional audiovisual, projection, and control
            systems for enterprise, education, hospitality,
            and government environments.
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="
                px-8 py-4
                rounded-md
                bg-green-600 text-white
                hover:bg-green-700
                transition font-medium text-base
              "
            >
              Request Consultation
            </a>

            <a
              href="/projects"
              className="
                px-8 py-4
                rounded-md
                border border-gray-300
                text-gray-800
                hover:border-green-600
                hover:text-green-600
                transition font-medium text-base
              "
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT TRUST PANEL */}
        <div className="relative">

          {/* SOFT ACCENT GLOW */}
          <div className="absolute -inset-8 bg-green-600/8 blur-3xl rounded-full" />

          <div className="relative bg-white border border-gray-100 rounded-2xl shadow-xl p-10">
            <div className="grid grid-cols-2 gap-10 text-left">
              {[
                { value: '15+', label: 'Years of Experience' },
                { value: '500+', label: 'Projects Delivered' },
                { value: '20+', label: 'Technology Partners' },
                { value: 'UAE', label: 'Nationwide Coverage' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-semibold text-green-600">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
