"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Riddhi shah",
    rating: 5,
    text: `I’ve been using this sunscreen for a few months now, and I completely understand the hype. The texture is lightweight and non-greasy, making it perfect for daily use—even under makeup. There’s no white cast, no stickiness—just smooth, comfortable, and glowing skin. It’s especially great for oily skin types too; my skin is oily, and it has worked wonderfully for me. Big thanks to Glansa AV Essentials for helping me discover this gem! ❤❤`,
    image: "/glansa/review1.jpg",
  },
  {
    name: "Daksha Jadhav",
    rating: 5,
    text: ` I've been using this sunscreen for a month now, and I'm thoroughly impressed! The texture is lightweight and non-greasy, making it perfect for daily use. It absorbs quickly into the skin without leaving any white residue. The SPF 50+ protection gives me peace of mind, whether I'm running errands or spending time outdoors. My skin feels protected and moisturized, and I haven't noticed any irritation. Highly recommend for anyone looking for a reliable and comfortable sunscreen! 🌞!`,
    image: "/glansa/review2.jpg",
  },
];

function Testimonial() {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const maxPreviewLength = 160;

  return (
    <section
      id="testimonial"
      className="bg-[#1A132F] py-20 px-4 md:px-8 text-white"
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
          Client Testimonials
        </h2>
        <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
          At Glansa AV, our mission is to empower you with skincare that
          enhances your confidence, protects your skin, and delivers long-term
          results—one product at a time.
        </p>

        {/* Rating Summary */}
        <div
          className="flex items-center justify-center gap-4 mb-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="flex -space-x-2">
            {testimonials.slice(0, 5).map((item, i) => (
              <img
                key={i}
                src={item.image}
                loading="lazy"
                className="w-10 h-10 rounded-full border-2 border-white"
                alt={`Client avatar ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex items-center text-lg font-medium text-white">
            4.6
            <img
              className="ml-1 w-5"
              src="https://www.svgrepo.com/show/513354/star.svg"
              alt="Star icon"
              loading="lazy"
            />
            <span className="ml-2 text-sm text-gray-400">
              Rated by 25k on Google
            </span>
          </div>
        </div>
      </div>

      {/* Swiper Cards */}
      <Swiper
        slidesPerView={1.1}
        spaceBetween={16}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        freeMode
        modules={[FreeMode]}
        className="max-w-7xl mx-auto px-2"
      >
        {testimonials.map((t, index) => {
          const isExpanded = expanded[index];
          const displayText =
            !isExpanded && t.text.length > maxPreviewLength
              ? t.text.slice(0, maxPreviewLength) + "..."
              : t.text;

          return (
            <SwiperSlide key={index}>
              <div className="bg-[#261D44] rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transform transition-transform hover:scale-105 h-full flex flex-col items-center text-center p-6">
                {/* Circular small image */}
                <img
                  src={t.image}
                  alt={`${t.name} testimonial`}
                  loading="lazy"
                  className="w-20 h-20 rounded-full object-cover border-2 border-white mb-4"
                />

                <h3 className="text-xl font-bold text-white mb-1">{t.name}</h3>
                <div className="flex justify-center gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="text-yellow-500 fill-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-gray-300 text-sm mb-4 whitespace-pre-line">
                  {displayText}
                </p>
                {t.text.length > maxPreviewLength && (
                  <button
                    onClick={() => toggleExpand(index)}
                    className="mt-auto w-full py-2 text-sm font-medium bg-[#a88bfa] hover:bg-[#9173e0] text-white rounded-full transition duration-300"
                    aria-label={isExpanded ? "Read less" : "Read more"}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}

export default Testimonial;
