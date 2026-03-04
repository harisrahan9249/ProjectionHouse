import React from 'react';
import { Button } from "@/components/ui/button";

const Explore = () => {
  return (
    <section id="explore" className="bg-[#1A132F] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Heading */}
        <div className="max-w-4xl mx-auto text-center">
          <h1
            className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-duration="1200"
          >
            Skincare That Enhances Confidence, Protects, and Delivers Long-Term Results
          </h1>
          <p
            className="text-gray-300 text-base md:text-xl"
            data-aos="fade-right"
            data-aos-easing="ease-in-out"
            data-aos-duration="1200"
          >
            At Glansa AV, our mission is to empower you with skincare that enhances your confidence,
            protects your skin, and delivers long-term results—one product at a time.
          </p>
        </div>

        {/* Product Card */}
        <div
          className="mt-16 max-w-3xl mx-auto bg-[#261D44] rounded-2xl shadow-xl text-center px-6 sm:px-8 py-12 transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.03] hover:shadow-purple-800/40 group"
          data-aos="zoom-in-up"
          data-aos-duration="1200"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
            AQUA SUNSCREEN
          </h2>
          <p className="text-sm sm:text-base text-purple-200 mb-1">6-Hour Long Protection</p>
          <p className="text-sm sm:text-base text-purple-200 mb-4">SPF 50+</p>

          {/* Image with glow/pulse hover effect */}
          <div className="relative w-fit mx-auto">
            <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition duration-500 bg-gradient-to-r from-[#7142d2] via-purple-500 to-[#7142d2] animate-pulse" />
            <img
              src="/glansa/GLANSA-nero.png"
              alt="Aqua Sunscreen"
              width={320}
              height={200}
              className="relative z-10 mx-auto group-hover:drop-shadow-[0_0_15px_rgba(113,66,210,0.5)] transition-all duration-500 w-[clamp(220px,70vw,340px)] h-auto"
              data-aos="zoom-in"
              data-aos-duration="1000"
            />
          </div>

          <a
            href="https://wa.me/+918928454003"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Button
              className="bg-[#7142d2] hover:bg-gradient-to-r from-[#7142d2] to-[#a88bfa] text-white text-base px-6 py-3 rounded-full transition-all duration-300 ease-out shadow-lg hover:shadow-purple-500/50 hover:scale-105"
              variant="outline"
            >
              Order Now
            </Button>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Explore;
