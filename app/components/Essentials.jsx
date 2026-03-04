import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Essentials() {
  return (
    <div
      id="essentials"
      className="bg-[#1A132F] md:py-24 py-16 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 sm:gap-20 items-center relative z-10">
        {/* === IMAGE STACK SECTION === */}
        <div className="relative flex justify-center items-center order-2 md:order-1 min-h-[300px] sm:min-h-[400px] overflow-visible">
          {/* Background Circle Glow */}
          <div className="absolute w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] bg-[#7142d2]/20 blur-3xl rounded-full z-0"></div>

          {/* Back Image Layer */}
          <div
            className="absolute left-3 sm:left-6 top-6 sm:top-10 rotate-3 md:rotate-6 rounded-2xl shadow-2xl border border-gray-100 z-10"
            data-aos="fade-left"
            data-aos-duration="1300"
          >
            <img
              src="/glansa/camara.jpg"
              alt="Camara Back"
              width={300}
              height={280}
              className="rounded-2xl object-cover w-[clamp(220px,34vw,340px)]"
            />
          </div>

          {/* Front Image Layer */}
          <div
            className="relative rotate-[-6deg] md:rotate-[-10deg] rounded-2xl shadow-2xl border border-gray-100 z-20"
            data-aos="fade-right"
            data-aos-duration="1300"
          >
            <img
              src="/glansa/camara.jpg"
              alt="Camara Front"
              width={280}
              height={260}
              className="rounded-2xl object-cover w-[clamp(200px,30vw,320px)]"
            />
          </div>
        </div>

        {/* === TEXT SECTION === */}
        <div className="text-white order-1 md:order-2 px-2">
          <h2
            className="text-center md:text-left text-3xl md:text-5xl font-bold leading-tight mb-6"
            data-aos="fade-right"
            data-aos-duration="1300"
            data-aos-easing="ease-out-back"
          >
            Unleash Your Radiance with Glansa AV Essentials
          </h2>

          <p
            className="text-gray-300 text-base md:text-lg leading-relaxed mb-8"
            data-aos="fade-left"
            data-aos-duration="1300"
            data-aos-easing="ease-out-back"
          >
            Transform your skincare routine with our groundbreaking Aqua
            Sunscreen. Engineered by a dedicated team of medical professionals,
            our formulation provides superior protection and nourishment,
            ensuring your skin remains vibrant and healthy under the sun’s harsh
            rays.
          </p>

          {/* <div className="flex justify-center md:justify-start">
            
            <Link href="/product-details" target="_blank" rel="noopener noreferrer">
              <Button
                className="bg-[#7142d2] text-white px-6 py-3 rounded-full shadow-lg hover:shadow-purple-500/30 transition-transform hover:scale-105"
                variant="outline"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                Explore Now
              </Button>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Essentials;
