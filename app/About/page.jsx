function About() {
  return (
    <div
      id="about"
      className="bg-[#1A132F] md:py-24 px-4 sm:px-8 mx-auto max-w-7xl rounded-3xl shadow-2xl overflow-hidden"
    >
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <div
          className="relative flex items-center justify-center py-10 md:py-0"
          data-aos="zoom-in-right"
          data-aos-duration="1200"
          data-aos-easing="ease-out-back"
        >
          {/* Glow */}
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <div className="w-[90%] max-w-md h-[90%] rounded-3xl bg-gradient-to-tr from-[#7142d2] to-[#1A132F] blur-2xl opacity-30" />
          </div>

          {/* Frame */}
          <div className="absolute w-full h-full max-w-md max-h-[110%] rounded-[2rem] border-4 border-[#7142d2]/30 opacity-20" />

          {/* Image */}
          <div className="relative z-10 transition duration-700 ease-out hover:scale-105 hover:-translate-y-2 hover:rotate-[-1deg] shadow-xl">
            <img
              src="/glansa/glansa002.jpg"
              alt="Glansa AV"
              className="w-[clamp(250px,80vw,420px)] object-contain rounded-3xl drop-shadow-[0_20px_40px_rgba(113,66,210,0.3)]"
            />
          </div>
        </div>

        {/* Text */}
        <div
          className="text-white px-2 sm:px-4 md:px-6"
          data-aos="zoom-in-left"
          data-aos-duration="1200"
          data-aos-easing="ease-out-back"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center md:text-left mb-6 tracking-tight text-balance">
            About Glansa AV
          </h1>

          <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 text-center md:text-left max-w-3xl">
            At Glansa AV, we craft dermatology-backed skincare for all skin types. With over 15 years of medical expertise, our team develops clean, effective, and inclusive formulas — including India’s first 6-hour protection sunscreen.
          </p>

          <div className="flex justify-center md:justify-start">
            <button               onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              className="cursor-pointer bg-[#7142d2] text-[#F4F0FA] px-6 py-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;